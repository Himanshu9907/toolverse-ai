"use client";

import Link from "next/link";

import {
  Sparkles,
  Search,
  ArrowRight,
  Image,
  FileText,
  Bot,
  Video,
} from "lucide-react";

import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { ToolCard } from "@/components/tools/tool-card";
import { Button } from "@/components/ui/button";

import {
  searchTools,
} from "@/config/tools";

const quickCategories = [

  {
    title: "Image",
    icon: Image,
    href: "/image",
  },

  {
    title: "PDF",
    icon: FileText,
    href: "/pdf",
  },

  {
    title: "AI",
    icon: Bot,
    href: "/ai",
  },

  {
    title: "Video",
    icon: Video,
    href: "/video",
  },

];

export function HomeSearch() {

  const [query, setQuery] = useState("");

  const results = useMemo(() => {

    if (!query.trim()) return [];

    return searchTools(query);

  }, [query]);

  return (

    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

            <Sparkles className="h-4 w-4" />

            Find Your Perfect Tool

          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">

            Search 200+ Powerful Tools

          </h2>

          <p className="mt-5 text-lg text-muted-foreground">

            Image tools, PDF utilities, AI tools, OCR, Video tools and much more.

          </p>

        </div>

        {/* Search */}

        <div className="mx-auto mt-12 max-w-3xl">

          <div className="relative">

            <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools like Compress Image, Merge PDF..."
              className="h-16 rounded-2xl border-2 pl-14 text-lg shadow-lg"
            />

          </div>

        </div>
                {/* Trending Searches */}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

          <span className="text-sm font-medium text-muted-foreground">

            Trending:

          </span>

          {[
            "Compress Image",
            "Merge PDF",
            "AI Writer",
            "Remove Background",
            "Image Converter",
          ].map((item) => (

            <button
              key={item}
              onClick={() => setQuery(item)}
              className="rounded-full border bg-background px-4 py-2 text-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >

              {item}

            </button>

          ))}

        </div>

        {/* Quick Categories */}

        <div className="mt-14">

          <div className="mb-6 flex items-center justify-between">

            <h3 className="text-xl font-bold">

              Browse by Category

            </h3>

            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >

              View All

              <ArrowRight className="h-4 w-4" />

            </Link>

          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

            {quickCategories.map((category) => {

              const Icon = category.icon;

              return (

                <Link
                  key={category.title}
                  href={category.href}
                  className="group flex flex-col items-center rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-white">

                    <Icon className="h-7 w-7" />

                  </div>

                  <h4 className="mt-4 text-lg font-semibold">

                    {category.title}

                  </h4>

                </Link>

              );

            })}

          </div>

        </div>
                {/* Search Results */}

        <div className="mt-16">

          {!query.trim() ? (

            <div className="rounded-3xl border border-dashed bg-card/50 p-12 text-center">

              <Search className="mx-auto h-12 w-12 text-muted-foreground" />

              <h3 className="mt-6 text-2xl font-bold">

                Start searching

              </h3>

              <p className="mt-3 text-muted-foreground">

                Search from Image, PDF, AI, Video and Automation tools.

              </p>

            </div>

          ) : results.length === 0 ? (

            <div className="rounded-3xl border border-dashed bg-card/50 p-12 text-center">

              <h3 className="text-2xl font-bold">

                No tools found

              </h3>

              <p className="mt-3 text-muted-foreground">

                Try another keyword like "Image", "PDF", "AI" or "Video".

              </p>

            </div>

          ) : (

            <>

              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <h3 className="text-2xl font-bold">

                  {results.length} Tool{results.length > 1 ? "s" : ""} Found

                </h3>

                <Link
                  href="/tools"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >

                  Browse All Tools

                  <ArrowRight className="h-4 w-4" />

                </Link>

              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {results.map((tool) => (

                  <ToolCard
                    key={tool.id}
                    tool={tool}
                  />

                ))}

              </div>

            </>

          )}

        </div>

                {/* Bottom CTA */}

        <div className="mt-20 overflow-hidden rounded-[36px] border bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 p-10 text-white shadow-2xl">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* Left */}

            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">

                <Sparkles className="h-4 w-4" />

                ToolVerse AI Platform

              </div>

              <h3 className="mt-6 text-3xl font-bold md:text-4xl">

                One Platform.

                <br />

                200+ Powerful Online Tools.

              </h3>

              <p className="mt-5 text-lg text-blue-100">

                Compress Images, Edit PDFs, AI Writing, OCR,
                Video Tools, Automation and much more —
                everything you need in one place.

              </p>

            </div>

            {/* Right */}

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">

                <h4 className="text-3xl font-bold">

                  200+

                </h4>

                <p className="mt-2 text-sm text-blue-100">

                  Tools

                </p>

              </div>

              <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">

                <h4 className="text-3xl font-bold">

                  100K+

                </h4>

                <p className="mt-2 text-sm text-blue-100">

                  Monthly Users

                </p>

              </div>

              <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">

                <h4 className="text-3xl font-bold">

                  99.9%

                </h4>

                <p className="mt-2 text-sm text-blue-100">

                  Uptime

                </p>

              </div>

              <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur">

                <h4 className="text-3xl font-bold">

                  Free

                </h4>

                <p className="mt-2 text-sm text-blue-100">

                  To Start

                </p>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Button
              asChild
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100"
            >

              <Link href="/tools">

                Browse All Tools

                <ArrowRight className="ml-2 h-4 w-4" />

              </Link>

            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >

              <Link href="/pricing">

                Upgrade to Pro

              </Link>

            </Button>

          </div>

        </div>

      </div>

    </section>

  );

}