

"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { featuredTools } from "@/config/tools";
import { ToolCard } from "@/components/tools/tool-card";

// const tools = [
//   {
//     id: 1,
//     title: "AI Blog Writer",
//     description:
//       "Generate high-quality SEO blog posts in seconds using AI.",
//     icon: Bot,
//     rating: 4.9,
//     badge: "PRO",
//     color: "from-violet-500 to-fuchsia-500",
//   },
//   {
//     id: 2,
//     title: "Background Remover",
//     description:
//       "Remove image backgrounds instantly with AI precision.",
//     icon: ImageIcon,
//     rating: 4.8,
//     badge: "FREE",
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     id: 3,
//     title: "Merge PDF",
//     description:
//       "Combine multiple PDF files into a single document.",
//     icon: FileText,
//     rating: 4.9,
//     badge: "FREE",
//     color: "from-red-500 to-orange-500",
//   },
//   {
//     id: 4,
//     title: "Image Converter",
//     description:
//       "Convert PNG, JPG, WEBP and AVIF within seconds.",
//     icon: FileImage,
//     rating: 4.7,
//     badge: "FREE",
//     color: "from-green-500 to-emerald-500",
//   },
// ];

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

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

  {featuredTools.map((tool) => (

    <ToolCard
      key={tool.id}
      tool={tool}
    />

  ))}

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