"use client";

import {
  Sparkles,
  Zap,
  ShieldCheck,
  Bot,
  Cloud,
  Smartphone,
} from "lucide-react";

const features = [
  {
    title: "Lightning Fast",
    description:
      "Process files within seconds using our optimized cloud infrastructure.",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Secure & Private",
    description:
      "Files are encrypted and automatically deleted after processing.",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AI Powered",
    description:
      "Smart AI automates repetitive tasks and improves productivity.",
    icon: Bot,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Cloud Processing",
    description:
      "No installation required. Everything runs securely in the cloud.",
    icon: Cloud,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Mobile Friendly",
    description:
      "Works perfectly on desktop, tablet and mobile devices.",
    icon: Smartphone,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Free & Pro",
    description:
      "Start free and upgrade only when you need advanced features.",
    icon: Sparkles,
    color: "from-indigo-500 to-violet-500",
  },
];

export function WhyToolVerse() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

            <Sparkles className="h-4 w-4" />

            Why ToolVerse AI

          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">

            Everything You Need In One Platform

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">

            Fast, secure and AI-powered online tools designed to save
            your time and boost productivity.

          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => {

          const Icon = feature.icon;

          return (

            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-[28px] border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
            >

              {/* Glow */}

              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:scale-150" />

              <div className="relative">

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                >

                  <Icon className="h-8 w-8" />

                </div>

                <h3 className="mt-8 text-2xl font-bold transition-colors duration-300 group-hover:text-primary">

                  {feature.title}

                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">

                  {feature.description}

                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">

                    Included

                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">

                    <Sparkles className="h-5 w-5" />

                  </div>

                </div>

              </div>

            </div>

          );

        })}

        </div>

        {/* Bottom Banner */}

        <div className="mt-20 overflow-hidden rounded-[32px] border border-border bg-gradient-to-r from-primary via-violet-600 to-blue-600 p-8 text-white md:p-12">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <h3 className="text-3xl font-bold md:text-4xl">

                Trusted by Thousands of Users

              </h3>

              <p className="mt-4 max-w-2xl text-lg text-white/80">

                Join creators, developers, students and businesses using
                ToolVerse AI every day to save time and work smarter.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-6 text-center">

              <div>

                <h2 className="text-4xl font-bold">

                  200+

                </h2>

                <p className="mt-2 text-white/80">

                  Online Tools

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold">

                  1M+

                </h2>

                <p className="mt-2 text-white/80">

                  Files Processed

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold">

                  99.9%

                </h2>

                <p className="mt-2 text-white/80">

                  Uptime

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold">

                  4.9★

                </h2>

                <p className="mt-2 text-white/80">

                  User Rating

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}