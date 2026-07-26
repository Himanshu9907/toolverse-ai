// "use server";

// import { prisma } from "@/lib/prisma";
// import { compare } from "bcryptjs";
// import { generateToken } from "@/lib/jwt";
// import { cookies } from "next/headers";

// export async function loginUser(email: string, password: string) {
//   const user = await prisma.user.findUnique({
//     where: {
//       email,
//     },
//   });

//   if (!user) {
//     return {
//       success: false,
//       message: "User not found",
//     };
//   }

//   const valid = await compare(password, user.password);

//   if (!valid) {
//     return {
//       success: false,
//       message: "Invalid password",
//     };
//   }

//   const token = generateToken({
//     id: user.id,
//     email: user.email,
//     name: user.name ?? "",
//   });

//   const cookieStore = await cookies();

//   cookieStore.set("toolverse-token", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     path: "/",
//     maxAge: 60 * 60 * 24 * 7, // 7 days
//   });

//   return {
//     success: true,
//     message: "Login successful",
//   };
// }

// "use server";

// import { signIn } from "@/auth";
// import { AuthError } from "next-auth";

// export async function loginUser(
//   email: string,
//   password: string
// ) {
//   try {
//     await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     return {
//       success: true,
//       message: "Login successful",
//     };
//   } catch (error) {
//     if (error instanceof AuthError) {
//       return {
//         success: false,
//         message: "Invalid email or password",
//       };
//     }

//     throw error;
//   }
// }

// const result = await signIn("credentials", {
//   email,
//   password,
//   redirect: false,
// });

// console.log("SIGNIN RESULT =", result);

"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function loginUser(
  email: string,
  password: string
) {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log("SIGNIN RESULT =", result);

    return {
      success: true,
      message: "Login successful",
    };
  } catch (error) {
    console.log(error);

    if (error instanceof AuthError) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}