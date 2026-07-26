// import NextAuth from "next-auth";

// import authConfig from "./auth.config";

// export const { auth: middleware } = NextAuth(authConfig);

// export const config = {
//   matcher: [
//     "/dashboard/:path*",
//     "/profile/:path*",
//     "/settings/:path*",
//   ],
// };

import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  const pathname = req.nextUrl.pathname;

  if (
    pathname.startsWith("/dashboard") &&
    !isLoggedIn
  ) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
  ],
};