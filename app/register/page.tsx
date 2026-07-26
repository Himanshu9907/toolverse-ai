"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { registerUser } from "@/actions/auth";

export default function RegisterPage() {
    const router = useRouter();
    const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);

const [message, setMessage] = useState("");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);

  const result = await registerUser({
    name,
    email,
    password,
  });

  setLoading(false);

  setMessage(result.message);

  if (result.success) {
    router.push("/login");
  }
};
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-3xl border bg-card p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold">Create Account</h1>

        <p className="mt-2 text-center text-muted-foreground">
          Join ToolVerse AI
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-primary"
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-primary"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-primary"
          />

          <button className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 font-semibold text-white">
            {loading ? "Creating..." : "Create Account"}
          </button>

          {message && (
            <p className="text-center text-sm text-primary">{message}</p>
          )}
        </form>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
