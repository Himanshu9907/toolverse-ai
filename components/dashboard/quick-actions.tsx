"use client";

import Link from "next/link";

import {
  Image,
  FileText,
  Bot,
  Video,
  ScanText,
  Eraser,
  FileImage,
  Sparkles,
} from "lucide-react";

const actions = [
  {
    title: "Compress Image",
    icon: Image,
    href: "/dashboard/image-tools/compress-image",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Merge PDF",
    icon: FileText,
    href: "/dashboard/pdf-tools/merge-pdf",
    color: "from-red-500 to-orange-500",
  },
  {
    title: "AI Writer",
    icon: Bot,
    href: "/dashboard/ai-tools/ai-writer",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Video Converter",
    icon: Video,
    href: "/dashboard/video-tools/converter",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "OCR",
    icon: ScanText,
    href: "/dashboard/ocr",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Remove Background",
    icon: Eraser,
    href: "/dashboard/ai-tools/remove-background",
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Image Converter",
    icon: FileImage,
    href: "/dashboard/image-tools/converter",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "AI Automation",
    icon: Sparkles,
    href: "/dashboard/automation",
    color: "from-cyan-500 to-violet-500",
  },
];

export function QuickActions() {
  return (
    <section className="mt-14">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">

            Quick Actions

          </h2>

          <p className="mt-2 text-muted-foreground">

            Launch your favorite tools instantly.

          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {actions.map((action) => {

          const Icon = action.icon;

          return (

            <Link
              key={action.title}
              href={action.href}
              className="group relative overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
            >

              {/* Background Glow */}

              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${action.color} opacity-10 blur-3xl transition duration-500 group-hover:scale-150`}
              />

              {/* Icon */}

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${action.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
              >

                <Icon className="h-7 w-7" />

              </div>

              {/* Title */}

              <h3 className="mt-5 text-lg font-semibold leading-snug">

                {action.title}

              </h3>

              {/* Description */}

              <p className="mt-2 text-sm leading-6 text-muted-foreground">

                Launch instantly with a single click.

              </p>

              {/* Footer */}

              <div className="mt-6 flex items-center justify-between">

                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">

                  Quick Access

                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">

                  <Icon className="h-4 w-4" />

                </div>

              </div>

            </Link>

          );

        })}

      </div>
          </section>
  );
}