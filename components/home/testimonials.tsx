"use client";

import {
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "John Carter",
    role: "UI Designer",
    text: "The fastest online tools I've ever used. Everything feels premium.",
  },
  {
    name: "Sarah Wilson",
    role: "Content Creator",
    text: "AI automation saves me hours every single week.",
  },
  {
    name: "Alex Brown",
    role: "Software Engineer",
    text: "Beautiful UI and incredibly fast processing.",
  },
  {
    name: "Emily Clark",
    role: "Marketing Manager",
    text: "One platform replaced five different websites for my team.",
  },
  {
    name: "David Lee",
    role: "Photographer",
    text: "Background remover and image compressor are outstanding.",
  },
  {
    name: "Sophia Taylor",
    role: "Student",
    text: "PDF tools are simple, clean and super fast.",
  },
];

export function Testimonials() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

            <Sparkles className="h-4 w-4"/>

            Testimonials

          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">

            Loved by Thousands of Users

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">

            See why creators, students, developers and businesses
            trust ToolVerse AI every day.

          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((testimonial) => (

          <div
            key={testimonial.name}
            className="group relative overflow-hidden rounded-[30px] border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
          >

            {/* Glow */}

            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:scale-150" />

            <div className="relative">

              {/* Rating */}

              <div className="flex items-center gap-1">

                {Array.from({ length: 5 }).map((_, index) => (

                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              {/* Quote */}

              <p className="mt-8 text-lg leading-8 text-muted-foreground">

                "{testimonial.text}"

              </p>

              {/* Divider */}

              <div className="my-8 h-px bg-border" />

              {/* User */}

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 text-lg font-bold text-white shadow-lg">

                  {testimonial.name.charAt(0)}

                </div>

                <div>

                  <h4 className="font-semibold text-lg">

                    {testimonial.name}

                  </h4>

                  <p className="text-sm text-muted-foreground">

                    {testimonial.role}

                  </p>

                </div>

              </div>

            </div>

          </div>

        ))}

        </div>
                {/* Trust Banner */}

        <div className="mt-20 rounded-[32px] border border-border bg-gradient-to-br from-primary/5 via-background to-background p-8 md:p-12">

          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

            {/* Left */}

            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

                <Sparkles className="h-4 w-4" />

                Trusted Worldwide

              </div>

              <h3 className="mt-6 text-3xl font-bold md:text-4xl">

                Built for creators, developers and businesses

              </h3>

              <p className="mt-4 text-lg text-muted-foreground">

                Millions of files are processed every month with
                enterprise-grade speed, privacy and AI-powered
                automation.

              </p>

            </div>

            {/* Right Stats */}

            <div className="grid w-full grid-cols-2 gap-5 sm:w-auto">

              <div className="rounded-2xl border border-border bg-card p-6 text-center">

                <h4 className="text-4xl font-bold text-primary">

                  4.9★

                </h4>

                <p className="mt-2 text-sm text-muted-foreground">

                  Average Rating

                </p>

              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center">

                <h4 className="text-4xl font-bold text-primary">

                  50K+

                </h4>

                <p className="mt-2 text-sm text-muted-foreground">

                  Happy Users

                </p>

              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center">

                <h4 className="text-4xl font-bold text-primary">

                  1M+

                </h4>

                <p className="mt-2 text-sm text-muted-foreground">

                  Files Processed

                </p>

              </div>

              <div className="rounded-2xl border border-border bg-card p-6 text-center">

                <h4 className="text-4xl font-bold text-primary">

                  99.9%

                </h4>

                <p className="mt-2 text-sm text-muted-foreground">

                  Uptime

                </p>

              </div>

            </div>

          </div>

          {/* Company Logos */}

          <div className="mt-14 border-t border-border pt-10">

            <p className="text-center text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">

              Trusted by professionals from

            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-6">

              {[
                "Google",
                "Microsoft",
                "Adobe",
                "GitHub",
                "Vercel",
                "OpenAI",
              ].map((company) => (

                <div
                  key={company}
                  className="rounded-xl border border-border bg-background px-5 py-4 font-semibold text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-foreground"
                >

                  {company}

                </div>

              ))}

            </div>

          </div>

          {/* CTA */}

          <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[24px] bg-primary px-8 py-8 text-primary-foreground lg:flex-row">

            <div>

              <h4 className="text-2xl font-bold">

                Ready to experience ToolVerse AI?

              </h4>

              <p className="mt-2 text-primary-foreground/80">

                Start using powerful online tools for free in seconds.

              </p>

            </div>

            <Button
              size="lg"
              variant="secondary"
              className="min-w-[190px]"
            >

              Get Started

            </Button>

          </div>

        </div>

      </div>

    </section>

  );
}