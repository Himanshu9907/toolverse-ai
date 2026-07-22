// "use client";

// import Link from "next/link";

// import {
//   ArrowRight,
//   Bot,
//   FileImage,
//   FileText,
//   ImageIcon,
//   Sparkles,
//   Star,
// } from "lucide-react";

// const tools = [
//   {
//     title: "AI Blog Writer",
//     description: "Generate high quality SEO blogs in seconds.",
//     icon: Bot,
//     rating: "4.9",
//     badge: "PRO",
//     color: "from-violet-500 to-fuchsia-500",
//   },
//   {
//     title: "Background Remover",
//     description: "Remove image backgrounds instantly.",
//     icon: ImageIcon,
//     rating: "4.8",
//     badge: "FREE",
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     title: "Merge PDF",
//     description: "Merge multiple PDF files quickly.",
//     icon: FileText,
//     rating: "4.9",
//     badge: "FREE",
//     color: "from-red-500 to-orange-500",
//   },
//   {
//     title: "Image Converter",
//     description: "Convert PNG, JPG, WEBP & AVIF.",
//     icon: FileImage,
//     rating: "4.7",
//     badge: "FREE",
//     color: "from-green-500 to-emerald-500",
//   },
// ];

// export function RecommendedTools() {

//   return (

//     <section className="mt-14">

//       <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

//         <div>

//           <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

//             <Sparkles className="h-4 w-4" />

//             Recommended

//           </div>

//           <h2 className="mt-4 text-3xl font-bold">

//             Recommended Tools

//           </h2>

//           <p className="mt-2 text-muted-foreground">

//             Discover the most popular AI tools for your workflow.

//           </p>

//         </div>

//         <Link
//           href="/tools"
//           className="rounded-2xl border px-5 py-3 font-medium transition hover:bg-muted"
//         >

//           View All

//         </Link>

//       </div>

//       <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

//         {tools.map((tool) => {

//           const Icon = tool.icon;

//           return (

//             <div
//               key={tool.title}
//               className="group relative overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
//             >

//               <div
//                 className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${tool.color} opacity-10 blur-3xl transition-all duration-500 group-hover:scale-150`}
//               />

//               <div
//                 className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-white shadow-lg`}
//               >

//                 <Icon className="h-7 w-7" />

//               </div>

//               <div className="mt-6 flex items-center justify-between">

//                 <h3 className="text-xl font-bold">

//                   {tool.title}

//                 </h3>

//                 <span
//                   className={`rounded-full px-3 py-1 text-xs font-bold ${
//                     tool.badge === "PRO"
//                       ? "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300"
//                       : "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
//                   }`}
//                 >
//                   {tool.badge}
//                 </span>
//                               <div className="mt-4 flex items-center gap-1">

//                 <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

//                 <span className="text-sm font-semibold">

//                   {tool.rating}

//                 </span>

//               </div>

//               <p className="mt-4 leading-7 text-muted-foreground">

//                 {tool.description}

//               </p>

//               <div className="mt-8 flex items-center gap-3">

//                 <button className="flex-1 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02]">

//                   Open Tool

//                 </button>

//                 <button className="flex h-12 w-12 items-center justify-center rounded-2xl border transition hover:bg-muted">

//                   ❤️

//                 </button>

//               </div>

//               <div className="mt-6 flex items-center justify-between border-t pt-5">

//                 <span className="text-sm text-muted-foreground">

//                   Most Popular

//                 </span>

//                 <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

//               </div>

//             </div>

//             </div>

//           );

//         })}

//       </div>

//     </section>

//   );

// }

"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  FileImage,
  FileText,
  Heart,
  ImageIcon,
  Sparkles,
  Star,
} from "lucide-react";

const tools = [
  {
    id: 1,
    title: "AI Blog Writer",
    description:
      "Generate high-quality SEO blog posts in seconds using AI.",
    icon: Bot,
    rating: 4.9,
    badge: "PRO",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    id: 2,
    title: "Background Remover",
    description:
      "Remove image backgrounds instantly with AI precision.",
    icon: ImageIcon,
    rating: 4.8,
    badge: "FREE",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Merge PDF",
    description:
      "Combine multiple PDF files into a single document.",
    icon: FileText,
    rating: 4.9,
    badge: "FREE",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 4,
    title: "Image Converter",
    description:
      "Convert PNG, JPG, WEBP and AVIF within seconds.",
    icon: FileImage,
    rating: 4.7,
    badge: "FREE",
    color: "from-green-500 to-emerald-500",
  },
];

export function RecommendedTools() {
  return (
    <section className="mt-14">

      {/* Header */}

      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

            <Sparkles className="h-4 w-4" />

            Recommended

          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">

            Recommended Tools

          </h2>

          <p className="mt-3 max-w-2xl text-muted-foreground">

            Discover the most popular tools based on your activity.

          </p>

        </div>

        <Link
          href="/tools"
          className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 font-medium transition hover:bg-muted"
        >
          View All
        </Link>

      </div>

      {/* Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {tools.map((tool) => {

          const Icon = tool.icon;

          return (

            <div
              key={tool.id}
              className="group relative overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
            >

              {/* Glow */}

              <div
                className={`absolute -right-14 -top-14 h-44 w-44 rounded-full bg-gradient-to-br ${tool.color} opacity-10 blur-3xl transition duration-500 group-hover:scale-150`}
              />

              {/* Icon */}

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-white shadow-lg`}
              >

                <Icon className="h-7 w-7" />

              </div>

              {/* Title + Badge */}

              <div className="mt-6 flex items-start justify-between gap-3">

                <h3 className="flex-1 text-xl font-bold leading-tight">

                  {tool.title}

                </h3>

                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                    tool.badge === "PRO"
                      ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300"
                      : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  }`}
                >
                  {tool.badge}
                </span>

              </div>
                            {/* Rating */}

              <div className="mt-4 flex items-center gap-2">

                <div className="flex items-center gap-1">

                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                  <span className="text-sm font-semibold">

                    {tool.rating}

                  </span>

                </div>

                <span className="text-xs text-muted-foreground">

                  • Popular Tool

                </span>

              </div>

              {/* Description */}

              <p className="mt-4 min-h-[72px] text-sm leading-6 text-muted-foreground">

                {tool.description}

              </p>

              {/* Buttons */}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                <button
                  className={`flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${tool.color} px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]`}
                >

                  Open Tool

                  <ArrowRight className="h-4 w-4" />

                </button>

                <button className="flex h-12 w-full items-center justify-center rounded-2xl border transition-all duration-300 hover:bg-muted sm:w-12">

                  <Heart className="h-5 w-5" />

                </button>

              </div>

              {/* Footer */}

              <div className="mt-6 flex items-center justify-between border-t pt-5">

                <span className="text-sm text-muted-foreground">

                  AI Productivity

                </span>

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

              </div>

                          </div>

          );

        })}

      </div>

      {/* Bottom CTA */}

      <div className="mt-10 rounded-3xl border bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 p-8 text-white shadow-xl">

        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">

          <div>

            <h3 className="text-2xl font-bold">

              Unlock 200+ AI Tools

            </h3>

            <p className="mt-3 max-w-2xl text-blue-100">

              Access premium AI tools, advanced automation,
              image editing, PDF utilities and much more with
              ToolVerse AI.

            </p>

          </div>

          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:scale-[1.03]"
          >

            Upgrade to Pro

            <ArrowRight className="h-5 w-5" />

          </Link>

        </div>

      </div>

    </section>

  );

}