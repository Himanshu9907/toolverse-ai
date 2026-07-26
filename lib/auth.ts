// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { prisma } from "./prisma";

// import Credentials from "next-auth/providers/credentials";
// import { compare } from "bcryptjs";

// import type { NextAuthConfig } from "next-auth";

// export const authConfig: NextAuthConfig = {
//   adapter: PrismaAdapter(prisma),

//   session: {
//     strategy: "jwt",
//   },

//   providers: [
//     Credentials({
//       name: "Credentials",

//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//         },

//         password: {
//           label: "Password",
//           type: "password",
//         },
//       },

//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
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

//         return user;
//       },
//     }),
//   ],

//   pages: {
//     signIn: "/login",
//   },

//   secret: process.env.AUTH_SECRET,
// };

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";

import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user) {
          return null;
        }

        const valid = await compare(
          credentials.password as string,
          user.password
        );

        if (!valid) {
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
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }

      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.AUTH_SECRET,
};