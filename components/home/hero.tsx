import { Sparkles, ImageIcon, FileText, Bot, Zap, Search } from "lucide-react";
import { DashboardPreview } from "./dashboard-preview";
import { FadeUp } from "@/components/animations/fade-up";
import { Floating } from "@/components/animations/floating";

// import { Sparkles, ImageIcon, FileText, Bot, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* ================= Background ================= */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute left-[-120px] top-40 h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute right-[-120px] top-56 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      {/* ================= Container ================= */}

      <div className="mx-auto max-w-7xl px-6">
        <div className="relative flex flex-col items-center pt-24 pb-20 text-center lg:pt-28">
          {/* ================= Floating Icons ================= */}

          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {/* Image */}

            <div className="absolute left-20 top-20 rounded-2xl border bg-background/80 p-4 shadow-xl backdrop-blur">
              <ImageIcon className="h-6 w-6 text-blue-600" />
            </div>

            {/* PDF */}

            <div className="absolute right-24 top-28 rounded-2xl border bg-background/80 p-4 shadow-xl backdrop-blur">
              <FileText className="h-6 w-6 text-red-500" />
            </div>

            {/* AI */}

            <div className="absolute left-36 top-[330px] rounded-2xl border bg-background/80 p-4 shadow-xl backdrop-blur">
              <Bot className="h-6 w-6 text-violet-600" />
            </div>

            {/* Automation */}

            <div className="absolute right-40 top-[360px] rounded-2xl border bg-background/80 p-4 shadow-xl backdrop-blur">
              <Zap className="h-6 w-6 text-yellow-500" />
            </div>
          </div>

          {/* ================= Badge ================= */}

          <FadeUp>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2">
            <Sparkles className="h-4 w-4 text-blue-600" />

            <span className="text-sm font-semibold text-blue-700">
              AI-Powered Productivity Platform
            </span>
          </div>
          </FadeUp>

          {/* ================= Heading ================= */}
          <FadeUp>
          <h1 className="max-w-5xl text-[46px] font-extrabold leading-none tracking-[-2px] text-slate-900 dark:text-white md:text-[72px]">
            One Platform.
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Infinite Tools.
            </span>
          </h1>
          </FadeUp>

          {/* ================= Description ================= */}

          <FadeUp delay={0.15}>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-500 dark:text-slate-400 md:text-xl">
            Everything you need to compress images, edit PDFs, convert files,
            automate workflows and boost your productivity with powerful AI
            tools.
          </p>
          </FadeUp>

          {/* Search will come here in Part 2 */}

          {/* ================= Search ================= */}

           <FadeUp delay={0.25}>
          <div className="mt-12 w-full max-w-4xl">
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 md:flex-row md:items-center dark:border-slate-800 dark:bg-slate-900">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search image tools, PDF tools, AI tools..."
                  className="h-14 w-full rounded-xl border-0 bg-transparent pl-14 pr-4 text-base outline-none placeholder:text-slate-400"
                />
              </div>
              
              
              <button className="mt-3 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 font-semibold text-white transition hover:scale-[1.02] md:mt-0">
                Search
              </button>
              
            </div>
          </div>
           </FadeUp>

          {/* ================= Popular Tags ================= */}

          <FadeUp delay={0.35}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-medium text-slate-500">Popular</span>

            {[
              "Compress Image",
              "Merge PDF",
              "Remove Background",
              "Image Converter",
              "AI Writer",
              "Resize Image",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                {tool}
              </button>
            ))}
          </div>
           </FadeUp>

          {/* ================= Trust ================= */}
           <FadeUp delay={0.45}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500" />

              <span className="text-sm text-slate-500">100+ Free Tools</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />

              <span className="text-sm text-slate-500">
                No Sign Up Required
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-violet-500" />

              <span className="text-sm text-slate-500">Fast & Secure</span>
            </div>
          </div>
           </FadeUp>
          <Floating>
          <DashboardPreview />
          </Floating>
        </div>
      </div>
    </section>
  );
}
