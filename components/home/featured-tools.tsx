"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ImageIcon,
  FileText,
  Bot,
  Video,
  Eraser,
  ScanText,
  FileImage,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const featuredTools = [
  {
    title: "Image Compressor",
    description: "Reduce image size without losing quality.",
    icon: ImageIcon,
    badge: "Popular",
    category: "Image",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Background Remover",
    description: "Remove image background in seconds using AI.",
    icon: Eraser,
    badge: "AI",
    category: "AI",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "PDF Merger",
    description: "Merge multiple PDFs into one document.",
    icon: FileText,
    badge: "Free",
    category: "PDF",
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Image Converter",
    description: "Convert PNG, JPG, WEBP and AVIF instantly.",
    icon: FileImage,
    badge: "New",
    category: "Converter",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "OCR Scanner",
    description: "Extract text from Images and PDFs.",
    icon: ScanText,
    badge: "Fast",
    category: "OCR",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "AI Writer",
    description: "Generate articles, emails and captions.",
    icon: Bot,
    badge: "AI",
    category: "Writing",
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Video Compressor",
    description: "Compress MP4 and MOV without quality loss.",
    icon: Video,
    badge: "Pro",
    category: "Video",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "File Encryptor",
    description: "Secure your files with encryption.",
    icon: ShieldCheck,
    badge: "Secure",
    category: "Security",
    color: "from-cyan-500 to-blue-500",
  },
];

export function FeaturedTools() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

            <Sparkles className="h-4 w-4"/>

            Featured Tools

          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">

            Most Popular Tools

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">

            Powerful online tools used by thousands of users every day.

          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                      {featuredTools.map((tool) => {

            const Icon = tool.icon;

            return (

              <Link
                href="#"
                key={tool.title}
                className="group relative overflow-hidden rounded-[28px] border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
              >

                {/* Glow */}

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:scale-150" />

                <div className="relative p-6">

                  {/* Top */}

                  <div className="flex items-start justify-between">

                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-white shadow-lg`}
                    >

                      <Icon className="h-8 w-8" />

                    </div>

                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">

                      {tool.badge}

                    </span>

                  </div>

                  {/* Content */}

                  <h3 className="mt-8 text-2xl font-bold transition-colors group-hover:text-primary">

                    {tool.title}

                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">

                    {tool.description}

                  </p>

                  {/* Category */}

                  <div className="mt-6 flex items-center justify-between">

                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium">

                      {tool.category}

                    </span>

                    <div className="flex items-center gap-1">

                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                      <span className="text-sm font-semibold">

                        4.9

                      </span>

                    </div>

                  </div>

                  {/* Stats */}

                  <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">

                    <div className="flex items-center gap-2">

                      <Zap className="h-4 w-4 text-primary" />

                      <span>120K Uses</span>

                    </div>

                    <span>Free</span>

                  </div>

                  {/* Button */}

                  <Button
                    className="mt-8 w-full group/button"
                    size="lg"
                  >

                    Open Tool

                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />

                  </Button>

                </div>

              </Link>

            );

          })}

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

              <Button
                size="lg"
                className="h-12 px-8"
              >
                Browse All Tools

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8"
              >
                Explore Categories
              </Button>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}