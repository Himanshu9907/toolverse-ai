

// "use client";

// import Link from "next/link";
// import {
//   Sparkles,
//   ImageIcon,
//   FileText,
//   Bot,
//   Zap,
//   Search,
//   ArrowRight,
//   Star,
// } from "lucide-react";

// import {
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import { ToolSearch } from "@/components/search/tool-search";

// import { useRouter } from "next/navigation";

// import { DashboardPreview } from "./dashboard-preview";

// import { FadeUp } from "@/components/animations/fade-up";
// import { Floating } from "@/components/animations/floating";

// import { featuredTools } from "@/config/tools";

// export function Hero() {

//   const router = useRouter();

//   const searchRef = useRef<HTMLDivElement>(null);

//   const [query, setQuery] = useState("");

//   const [focused, setFocused] = useState(false);

//   const [activeIndex, setActiveIndex] = useState(-1);

//   const results = useMemo(() => {

//     if (!query.trim()) return [];

//     return featuredTools.filter((tool) => {

//       const q = query.toLowerCase();

//       return (
//         tool.title.toLowerCase().includes(q) ||
//         tool.description.toLowerCase().includes(q) ||
//         tool.category.toLowerCase().includes(q)
//       );

//     });

//   }, [query]);

//   const openTool = (href: string) => {

//     setFocused(false);

//     setQuery("");

//     router.push(href);

//   };

//   useEffect(() => {

//     function handleOutside(e: MouseEvent) {

//       if (
//         searchRef.current &&
//         !searchRef.current.contains(e.target as Node)
//       ) {

//         setFocused(false);

//       }

//     }

//     document.addEventListener(
//       "mousedown",
//       handleOutside
//     );

//     return () =>
//       document.removeEventListener(
//         "mousedown",
//         handleOutside
//       );

//   }, []);

//   const handleKeyDown = (
//     e: React.KeyboardEvent<HTMLInputElement>
//   ) => {

//     if (!results.length) return;

//     switch (e.key) {

//       case "ArrowDown":

//         e.preventDefault();

//         setActiveIndex((prev) =>
//           prev < results.length - 1
//             ? prev + 1
//             : 0
//         );

//         break;

//       case "ArrowUp":

//         e.preventDefault();

//         setActiveIndex((prev) =>
//           prev > 0
//             ? prev - 1
//             : results.length - 1
//         );

//         break;

//       case "Enter":

//         e.preventDefault();

//         if (activeIndex >= 0) {

//           openTool(results[activeIndex].href);

//         } else {

//           openTool(results[0].href);

//         }

//         break;

//       case "Escape":

//         setFocused(false);

//         break;

//     }

//   };

//   return (

//     <section className="relative overflow-hidden bg-background">

//       {/* Background */}

//       <div className="absolute inset-0 -z-10">

//         <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

//         <div className="absolute left-[-120px] top-40 h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-[120px]" />

//         <div className="absolute right-[-120px] top-56 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[120px]" />

//       </div>

//       <div className="mx-auto max-w-7xl px-6">

//         <div className="relative flex flex-col items-center pt-24 pb-20 text-center lg:pt-28">

//           {/* Floating Icons */}

//           <div className="pointer-events-none absolute inset-0 hidden lg:block">

//             <Floating>

//               <div className="absolute left-20 top-20 rounded-2xl border bg-background/80 p-4 shadow-xl backdrop-blur">

//                 <ImageIcon className="h-6 w-6 text-blue-600"/>

//               </div>

//             </Floating>

//             <Floating delay={0.2}>

//               <div className="absolute right-24 top-28 rounded-2xl border bg-background/80 p-4 shadow-xl backdrop-blur">

//                 <FileText className="h-6 w-6 text-red-500"/>

//               </div>

//             </Floating>

//             <Floating delay={0.4}>

//               <div className="absolute left-36 top-[330px] rounded-2xl border bg-background/80 p-4 shadow-xl backdrop-blur">

//                 <Bot className="h-6 w-6 text-violet-600"/>

//               </div>

//             </Floating>

//             <Floating delay={0.6}>

//               <div className="absolute right-40 top-[360px] rounded-2xl border bg-background/80 p-4 shadow-xl backdrop-blur">

//                 <Zap className="h-6 w-6 text-yellow-500"/>

//               </div>

//             </Floating>

//           </div>

//           <FadeUp>

//             <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 dark:border-slate-700 dark:bg-slate-900">

//               <Sparkles className="h-4 w-4 text-blue-600"/>

//               <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">

//                 AI Powered Productivity Platform

//               </span>

//             </div>

//           </FadeUp>

//           <FadeUp>

//             <h1 className="max-w-5xl text-[46px] font-extrabold leading-none tracking-[-2px] text-slate-900 dark:text-white md:text-[72px]">

//               One Platform.

//               <br/>

//               <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">

//                 Infinite Tools.

//               </span>

//             </h1>

//           </FadeUp>

//           <FadeUp delay={0.15}>

//             <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-500 dark:text-slate-400 md:text-xl mb-10">

//               Everything you need to compress images,
//               edit PDFs, convert files, automate workflows
//               and boost your productivity using powerful AI tools.

//             </p>

//           </FadeUp>
                   
//           <ToolSearch variant="hero" />

//           {/* ================= Popular Searches ================= */}

//           <FadeUp delay={0.35}>

//             <div className="mt-8 flex w-full max-w-5xl flex-wrap items-center justify-center gap-3">

//               <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">

//                 Popular

//               </span>

//               {[
//                 "Compress Image",
//                 "Merge PDF",
//                 "Background Remover",
//                 "Image Converter",
//                 "OCR Scanner",
//                 "AI Writer",
//                 "Resize Image",
//                 "Crop Image",
//               ].map((tool) => (

//                 <button
//                   key={tool}
//                   onClick={() => {

//                     setQuery(tool);

//                     setFocused(true);

//                   }}
//                   className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-slate-800"
//                 >

//                   {tool}

//                 </button>

//               ))}

//             </div>

//           </FadeUp>

//           {/* ================= Trust Section ================= */}

//           <FadeUp delay={0.45}>

//             <div className="mt-12 grid w-full max-w-5xl gap-5 sm:grid-cols-3">

//               <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70">

//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

//                   <Zap className="h-6 w-6"/>

//                 </div>

//                 <h3 className="text-lg font-bold">

//                   Lightning Fast

//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">

//                   Compress, convert and edit files within seconds using
//                   high-performance browser technology.

//                 </p>

//               </div>

//               <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70">

//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white">

//                   <Sparkles className="h-6 w-6"/>

//                 </div>

//                 <h3 className="text-lg font-bold">

//                   100+ Free Tools

//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">

//                   Image tools, PDF tools, AI utilities, OCR, converters,
//                   generators and much more.

//                 </p>

//               </div>

//               <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70">

//                 <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white">

//                   <Star className="h-6 w-6"/>

//                 </div>

//                 <h3 className="text-lg font-bold">

//                   Trusted Worldwide

//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">

//                   Thousands of creators, developers and businesses trust
//                   ToolVerse AI every day.

//                 </p>

//               </div>

//             </div>

//           </FadeUp>

//           <Floating>

//             <DashboardPreview />

//           </Floating>
                    

//         </div>

//       </div>

//     </section>

//   );

// }


"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Sparkles,
  ImageIcon,
  FileText,
  Bot,
  Zap,
  Star,
  ArrowRight,
} from "lucide-react";

import { ToolSearch } from "@/components/search/tool-search";

import { FadeUp } from "@/components/animations/fade-up";
import { Floating } from "@/components/animations/floating";

import { DashboardPreview } from "./dashboard-preview";

import { featuredTools } from "@/config/tools";

interface HeroProps {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export function Hero({ user }: HeroProps) {
  const router = useRouter();

  const searchRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    return featuredTools.filter((tool) => {
      const q = query.toLowerCase();

      return (
        tool.title.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q)
      );
    });
  }, [query]);

  function openTool(href: string) {
    setFocused(false);
    setQuery("");
    router.push(href);
  }

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        setFocused(false);
      }
    }

    document.addEventListener("mousedown", handleOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleOutside
      );
  }, []);

    return (
    <section className="relative overflow-hidden bg-background">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute left-[-120px] top-40 h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute right-[-120px] top-56 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[120px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6">

        <div className="relative flex flex-col items-center pt-24 pb-20 text-center lg:pt-28">

          {/* Floating Icons */}

          <div className="pointer-events-none absolute inset-0 hidden lg:block">

            <Floating>

              <div className="absolute left-20 top-20 rounded-2xl border bg-background/80 p-4 shadow-xl backdrop-blur">

                <ImageIcon className="h-6 w-6 text-blue-600" />

              </div>

            </Floating>

            <Floating delay={0.2}>

              <div className="absolute right-24 top-28 rounded-2xl border bg-background/80 p-4 shadow-xl backdrop-blur">

                <FileText className="h-6 w-6 text-red-500" />

              </div>

            </Floating>

            <Floating delay={0.4}>

              <div className="absolute left-36 top-[330px] rounded-2xl border bg-background/80 p-4 shadow-xl backdrop-blur">

                <Bot className="h-6 w-6 text-violet-600" />

              </div>

            </Floating>

            <Floating delay={0.6}>

              <div className="absolute right-40 top-[360px] rounded-2xl border bg-background/80 p-4 shadow-xl backdrop-blur">

                <Zap className="h-6 w-6 text-yellow-500" />

              </div>

            </Floating>

          </div>

          {/* Welcome Back */}

          {user?.name && (

            <FadeUp>

              <div className="mb-6 flex items-center gap-3 rounded-full border bg-background px-5 py-2 shadow-lg">

                <img
                  src={
                    user.image ??
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user.name
                    )}&background=3b82f6&color=fff`
                  }
                  alt={user.name}
                  className="h-9 w-9 rounded-full"
                />

                <span className="font-semibold">

                  Welcome back,&nbsp;

                  {user.name
                    ?.split(" ")
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                    )
                    .join(" ")}

                  👋

                </span>

              </div>

            </FadeUp>

          )}

          <FadeUp>

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 dark:border-slate-700 dark:bg-slate-900">

              <Sparkles className="h-4 w-4 text-blue-600" />

              <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">

                AI Powered Productivity Platform

              </span>

            </div>

          </FadeUp>

          <FadeUp>

            <h1 className="max-w-5xl text-[46px] font-extrabold leading-none tracking-[-2px] text-slate-900 dark:text-white md:text-[72px]">

              One Platform.

              <br />

              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">

                Infinite Tools.

              </span>

            </h1>

          </FadeUp>

          <FadeUp delay={0.15}>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-500 dark:text-slate-400 md:text-xl">

              Everything you need to compress images,
              edit PDFs, convert files,
              automate workflows and boost productivity
              using powerful AI tools.

            </p>

          </FadeUp>

          <FadeUp delay={0.2}>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

              {user ? (

                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
                >

                  Go to Dashboard

                  <ArrowRight className="h-5 w-5" />

                </Link>

              ) : (

                <>

                  <Link
                    href="/signup"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-xl transition hover:scale-105"
                  >

                    Get Started Free

                    <ArrowRight className="h-5 w-5" />

                  </Link>

                  <Link
                    href="/login"
                    className="rounded-2xl border px-7 py-4 font-semibold transition hover:bg-muted"
                  >

                    Login

                  </Link>

                </>

              )}

            </div>

          </FadeUp>

          <div className="mt-12 w-full max-w-5xl">

            <ToolSearch variant="hero" />

          </div>
                    {/* Popular Searches */}

          <FadeUp delay={0.35}>

            <div className="mt-8 flex w-full max-w-5xl flex-wrap items-center justify-center gap-3">

              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                Popular
              </span>

              {[
                "Compress Image",
                "Merge PDF",
                "Background Remover",
                "Image Converter",
                "OCR Scanner",
                "AI Writer",
                "Resize Image",
                "Crop Image",
              ].map((tool) => (

                <button
                  key={tool}
                  onClick={() => router.push("/tools")}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-slate-800"
                >

                  {tool}

                </button>

              ))}

            </div>

          </FadeUp>

          {/* Feature Cards */}

          <FadeUp delay={0.45}>

            <div className="mt-14 grid w-full max-w-6xl gap-6 md:grid-cols-3">

              <div className="rounded-3xl border bg-white/70 p-7 backdrop-blur transition hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70">

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">

                  <Zap className="h-7 w-7" />

                </div>

                <h3 className="text-xl font-bold">
                  Lightning Fast
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">

                  Compress, resize, convert and optimize files
                  within seconds directly inside your browser.

                </p>

              </div>

              <div className="rounded-3xl border bg-white/70 p-7 backdrop-blur transition hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70">

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white">

                  <Sparkles className="h-7 w-7" />

                </div>

                <h3 className="text-xl font-bold">
                  AI Powered
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">

                  Powerful AI tools for writing, image editing,
                  OCR, automation and productivity.

                </p>

              </div>

              <div className="rounded-3xl border bg-white/70 p-7 backdrop-blur transition hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70">

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white">

                  <Star className="h-7 w-7" />

                </div>

                <h3 className="text-xl font-bold">
                  Trusted Worldwide
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">

                  Thousands of creators, developers and businesses
                  trust ToolVerse AI every single day.

                </p>

              </div>

            </div>

          </FadeUp>

          {/* Dashboard Preview */}

          <Floating>

            <div className="mt-20 w-full">

              <DashboardPreview />

            </div>

          </Floating>

        </div>

      </div>

    </section>

  );

}