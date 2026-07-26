// import NextAuth from "next-auth";

// import authConfig from "./auth.config";

// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { prisma } from "@/lib/prisma";

// import Credentials from "next-auth/providers/credentials";
// import { compare } from "bcryptjs";

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   adapter: PrismaAdapter(prisma),

//   session: {
//     strategy: "jwt",
//   },

//   ...authConfig,

//   providers: [
//     Credentials({
//       credentials: {
//         email: {},
//         password: {},
//       },

//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//             console.log("NO CREDENTIALS");
//           return null;
//         }

//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials.email as string,
//           },
//         });

//         if (!user) {
//           return null;
//         }

//         const valid = await compare(
//           credentials.password as string,
//           user.password
//         );

//         if (!valid) {
//           return null;
//         }

//         return {
//           id: user.id,
//           name: user.name,
//           email: user.email,
//           image: user.image,
//         };
//       },
//     }),
//   ],

//   secret: process.env.AUTH_SECRET,
// });

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcryptjs";

import authConfig from "./auth.config";
import { prisma } from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
  },

  ...authConfig,

  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("NO CREDENTIALS");
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user) {
          console.log("USER NOT FOUND");
          return null;
        }

        const valid = await compare(
          credentials.password as string,
          user.password
        );

        if (!valid) {
          console.log("INVALID PASSWORD");
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.picture as string;
      }

      return session;
    },
  },

  secret: process.env.AUTH_SECRET,
});