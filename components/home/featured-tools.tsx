"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { featuredTools } from "@/config/tools";
import { ToolCard } from "@/components/tools/tool-card";

export function FeaturedTools() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            Featured Tools
          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Most Popular Tools
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Powerful online tools used by thousands of users every day.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] border border-border bg-gradient-to-br from-primary/5 via-background to-background p-8 md:p-12">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" />
                200+ Powerful Tools
              </div>

              <h3 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
                Everything you need in one platform
              </h3>

              <p className="mt-4 text-lg text-muted-foreground">
                Image tools, PDF tools, AI automation, OCR, video tools,
                converters and many more. One clean dashboard. One fast
                experience.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              {/* <Button
                size="lg"
                className="h-12 px-8"
              >
                Browse All Tools

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button> */}

              <Button asChild size="lg" className="h-12 px-8">
                <Link href="/tools">
                  Browse All Tools
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              {/* <Button
                variant="outline"
                size="lg"
                className="h-12 px-8"
              >
                Explore Categories
              </Button> */}

              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <Link href="/categories">Explore Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
