// import Credentials from "next-auth/providers/credentials";

// import type { NextAuthConfig } from "next-auth";

// export default {
//   providers: [
//     Credentials({
//       credentials: {
//         email: {},
//         password: {},
//       },

//       async authorize() {
//         return null;
//       },
//     }),
//   ],

//   pages: {
//     signIn: "/login",
//   },

// } satisfies NextAuthConfig;

import type { NextAuthConfig } from "next-auth";

const authConfig = {
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig;

export default authConfig;