"use server";

import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export async function registerUser({
  name,
  email,
  password,
}: RegisterData) {
  try {
    // Validation
    if (!name || !email || !password) {
      return {
        success: false,
        message: "All fields are required.",
      };
    }

    // Existing user check
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return {
        success: false,
        message: "Email already exists.",
      };
    }

    // Password Hash
    const hashedPassword = await hash(password, 10);

    // Create User
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      success: true,
      message: "Account created successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}