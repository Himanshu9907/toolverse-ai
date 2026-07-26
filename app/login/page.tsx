// "use client";

// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function LoginPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [loading, setLoading] = useState(false);

//   const [error, setError] = useState("");

//   async function handleSubmit(
//     e: React.FormEvent<HTMLFormElement>
//   ) {
//     e.preventDefault();

//     setLoading(true);

//     setError("");

//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     setLoading(false);

//     if (result?.error) {
//       setError("Invalid email or password");
//       return;
//     }

//     router.push("/dashboard");
//     router.refresh();
//   }

//   return (
//     <main className="flex min-h-screen items-center justify-center px-4">

//       <div className="w-full max-w-md rounded-3xl border bg-card p-8">

//         <h1 className="text-center text-3xl font-bold">
//           Login
//         </h1>

//         <p className="mt-2 text-center text-muted-foreground">
//           Welcome back to ToolVerse AI
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           className="mt-8 space-y-5"
//         >

//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) =>
//               setEmail(e.target.value)
//             }
//             className="h-12 w-full rounded-xl border px-4"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) =>
//               setPassword(e.target.value)
//             }
//             className="h-12 w-full rounded-xl border px-4"
//           />

//           {error && (
//             <p className="text-sm text-red-500">
//               {error}
//             </p>
//           )}

//           <button
//             className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 font-semibold text-white"
//           >
//             {loading ? "Signing In..." : "Login"}
//           </button>

//         </form>

//         <p className="mt-6 text-center text-sm">

//           Don't have an account?{" "}

//           <Link
//             href="/register"
//             className="font-semibold text-primary"
//           >
//             Register
//           </Link>

//         </p>

//       </div>

//     </main>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { loginUser } from "@/actions/login";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const result = await loginUser(email, password);

    setLoading(false);

    setMessage(result.message);

    // if (result.success) {
    //   router.push("/dashboard");
    // }

    if (result.success) {
  router.refresh();

  setTimeout(() => {
    window.location.href = "/dashboard";
  }, 500);
}
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-3xl border bg-card p-8 shadow-lg">

        <h1 className="text-center text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-muted-foreground">
          Login to ToolVerse AI
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <input
            type="email"
            placeholder="Email Address"
            className="h-12 w-full rounded-xl border px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="h-12 w-full rounded-xl border px-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 font-semibold text-white"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

          {message && (
            <p className="text-center text-sm text-primary">
              {message}
            </p>
          )}

        </form>

        <p className="mt-6 text-center text-sm">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary"
          >
            Register
          </Link>
        </p>

      </div>
    </main>
  );
}