// "use client";

// import Link from "next/link";

// import {
//   ArrowRight,
//   Sparkles,
//   Zap,
//   Bot,
//   Image,
//   FileText,
// } from "lucide-react";

// export function WelcomeCard() {
//   return (
   
//     <section className="relative overflow-hidden rounded-[32px] border bg-card px-6 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-10 lg:py-12">

//   {/* Background Glow */}

//   <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

//   <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[140px]" />

//   <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

//     {/* Left */}

//     <div className="w-full max-w-2xl">

//       {/* Badge */}

//       <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-xs font-semibold text-primary sm:text-sm">

//         <Sparkles className="h-4 w-4" />

//         Welcome Back

//       </div>

//       {/* Heading */}

//       <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">

//         Ready to build

//         <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">

//           something amazing?

//         </span>

//       </h1>

//       {/* Description */}

//       <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">

//         Access all your favourite AI tools, continue previous work,
//         generate content faster and boost productivity using
//         ToolVerse AI.

//       </p>

//       {/* Buttons */}

//       <div className="mt-8 flex flex-col gap-4 sm:flex-row">

//         <Link
//           href="/dashboard/ai-tools"
//           className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-6 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
//         >

//           Explore AI Tools

//           <ArrowRight className="h-4 w-4" />

//         </Link>

//         <Link
//           href="/dashboard/history"
//           className="flex h-12 items-center justify-center rounded-2xl border bg-background px-6 font-semibold transition hover:bg-muted"
//         >

//           Continue Working

//         </Link>

//       </div>

//             {/* Feature Chips */}

//       <div className="mt-8 flex flex-wrap gap-3">

//         {[
//           "⚡ Fast AI",
//           "🔒 Secure",
//           "☁ Cloud Sync",
//         ].map((item) => (

//           <div
//             key={item}
//             className="rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//           >
//             {item}
//           </div>

//         ))}

//       </div>

//     </div>

//     {/* Right Side */}

//     <div className="grid w-full max-w-xl grid-cols-2 gap-4 lg:gap-6">

//       <div className="rounded-3xl border bg-background p-5 shadow-lg transition-all duration-300 hover:-translate-y-2">

//         <Bot className="h-9 w-9 text-violet-600" />

//         <h3 className="mt-4 text-lg font-bold">

//           AI Writer

//         </h3>

//         <p className="mt-2 text-sm leading-6 text-muted-foreground">

//           Generate blogs, emails, ads and social media content instantly.

//         </p>

//       </div>

//       <div className="rounded-3xl border bg-background p-5 shadow-lg transition-all duration-300 hover:-translate-y-2">

//         <Image className="h-9 w-9 text-blue-600" />

//         <h3 className="mt-4 text-lg font-bold">

//           Image Tools

//         </h3>

//         <p className="mt-2 text-sm leading-6 text-muted-foreground">

//           Compress, resize, convert and enhance images in seconds.

//         </p>

//       </div>

//       <div className="rounded-3xl border bg-background p-5 shadow-lg transition-all duration-300 hover:-translate-y-2">

//         <FileText className="h-9 w-9 text-red-500" />

//         <h3 className="mt-4 text-lg font-bold">

//           PDF Tools

//         </h3>

//         <p className="mt-2 text-sm leading-6 text-muted-foreground">

//           Merge, split, protect and convert PDF documents.

//         </p>

//       </div>

//       <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 p-5 text-white shadow-xl transition-all duration-300 hover:-translate-y-2">

//         <Zap className="h-9 w-9" />

//         <h3 className="mt-4 text-lg font-bold">

//           AI Automation

//         </h3>

//         <p className="mt-2 text-sm leading-6 text-blue-100">

//           Create powerful workflows and automate repetitive tasks.

//         </p>

//       </div>

//     </div>

//   </div>

//   {/* Bottom Stats */}

//   <div className="relative mt-10 grid grid-cols-2 gap-4 rounded-3xl border bg-background/70 p-5 backdrop-blur md:grid-cols-4">

//     <div className="text-center">

//       <h3 className="text-2xl font-bold text-blue-600">

//         200+

//       </h3>

//       <p className="mt-1 text-sm text-muted-foreground">

//         AI Tools

//       </p>

//     </div>

//     <div className="text-center">

//       <h3 className="text-2xl font-bold text-violet-600">

//         50K+

//       </h3>

//       <p className="mt-1 text-sm text-muted-foreground">

//         Users

//       </p>

//     </div>

//     <div className="text-center">

//       <h3 className="text-2xl font-bold text-cyan-600">

//         99.9%

//       </h3>

//       <p className="mt-1 text-sm text-muted-foreground">

//         Uptime

//       </p>

//     </div>

//     <div className="text-center">

//       <h3 className="text-2xl font-bold text-emerald-600">

//         24/7

//       </h3>

//       <p className="mt-1 text-sm text-muted-foreground">

//         Support

//       </p>

//     </div>

//   </div>

// </section>

//   );

// }

"use client";

import Link from "next/link";

import {
  ArrowRight,
  Sparkles,
  Zap,
  Bot,
  Image,
  FileText,
} from "lucide-react";

export function WelcomeCard() {
  return (
    <section className="relative overflow-hidden rounded-3xl border bg-card p-5 shadow-sm sm:p-8 lg:p-10">

      {/* Background Glow */}

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative grid gap-10 xl:grid-cols-[1.15fr_.85fr] xl:items-center">

        {/* ================= LEFT ================= */}

        <div>

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary sm:text-sm">

            <Sparkles className="h-4 w-4" />

            Welcome Back

          </div>

          {/* Heading */}

          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">

            Ready to build

            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">

              something amazing?

            </span>

          </h1>

          {/* Description */}

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">

            Access all your favourite AI tools, continue previous work,
            generate content faster and boost productivity using
            ToolVerse AI.

          </p>
                    {/* ================= BUTTONS ================= */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/dashboard/ai-tools"
              className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-6 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >

              Explore AI Tools

              <ArrowRight className="h-4 w-4" />

            </Link>

            <Link
              href="/dashboard/history"
              className="flex h-12 items-center justify-center rounded-2xl border bg-background px-6 text-sm font-semibold transition-all duration-300 hover:bg-muted"
            >

              Continue Working

            </Link>

          </div>

          {/* ================= FEATURE CHIPS ================= */}

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "⚡ Fast AI",
              "🔒 Secure",
              "☁ Cloud Sync",
              "🚀 200+ Tools",
            ].map((item) => (

              <div
                key={item}
                className="rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* AI Writer */}

          <div className="group rounded-3xl border bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10">

              <Bot className="h-6 w-6 text-violet-600" />

            </div>

            <h3 className="mt-5 text-lg font-bold">

              AI Writer

            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">

              Generate blogs, emails, social media posts and marketing content instantly.

            </p>

          </div>

          {/* Image Tools */}

          <div className="group rounded-3xl border bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">

              <Image className="h-6 w-6 text-blue-600" />

            </div>

            <h3 className="mt-5 text-lg font-bold">

              Image Tools

            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">

              Compress, resize, convert and enhance your images with one click.

            </p>

          </div>

          {/* PDF Tools */}

          <div className="group rounded-3xl border bg-background p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10">

              <FileText className="h-6 w-6 text-red-500" />

            </div>

            <h3 className="mt-5 text-lg font-bold">

              PDF Tools

            </h3>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">

              Merge, split, convert and protect PDF documents in seconds.

            </p>

          </div>

          {/* AI Automation */}

          <div className="group rounded-3xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 p-5 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">

              <Zap className="h-6 w-6" />

            </div>

            <h3 className="mt-5 text-lg font-bold">

              AI Automation

            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-100">

              Build powerful AI workflows and automate repetitive tasks effortlessly.

            </p>

          </div>

        </div>

      </div>
            {/* ================= STATS ================= */}

      <div className="relative mt-10 grid grid-cols-2 gap-4 rounded-3xl border bg-background/70 p-5 backdrop-blur-lg sm:grid-cols-4">

        <div className="rounded-2xl bg-background/60 py-4 text-center transition-all duration-300 hover:shadow-md">

          <h3 className="text-2xl font-bold text-blue-600">

            200+

          </h3>

          <p className="mt-1 text-sm text-muted-foreground">

            AI Tools

          </p>

        </div>

        <div className="rounded-2xl bg-background/60 py-4 text-center transition-all duration-300 hover:shadow-md">

          <h3 className="text-2xl font-bold text-violet-600">

            50K+

          </h3>

          <p className="mt-1 text-sm text-muted-foreground">

            Users

          </p>

        </div>

        <div className="rounded-2xl bg-background/60 py-4 text-center transition-all duration-300 hover:shadow-md">

          <h3 className="text-2xl font-bold text-cyan-600">

            99.9%

          </h3>

          <p className="mt-1 text-sm text-muted-foreground">

            Uptime

          </p>

        </div>

        <div className="rounded-2xl bg-background/60 py-4 text-center transition-all duration-300 hover:shadow-md">

          <h3 className="text-2xl font-bold text-emerald-600">

            24/7

          </h3>

          <p className="mt-1 text-sm text-muted-foreground">

            Support

          </p>

        </div>

      </div>

    </section>

  );

}

