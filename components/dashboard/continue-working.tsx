"use client";

import Link from "next/link";

import {
  ArrowRight,
  Bot,
  FileText,
  ImageIcon,
  Clock3,
} from "lucide-react";

const recentTools = [
  {
    title: "AI Blog Writer",
    description: "Generate SEO friendly blog articles using AI.",
    lastUsed: "2 hours ago",
    progress: "80%",
    icon: Bot,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Background Remover",
    description: "Remove image background instantly with AI.",
    lastUsed: "Yesterday",
    progress: "55%",
    icon: ImageIcon,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Merge PDF",
    description: "Combine multiple PDF files into one document.",
    lastUsed: "3 days ago",
    progress: "100%",
    icon: FileText,
    color: "from-red-500 to-orange-500",
  },
];

export function ContinueWorking() {
  return (
    <section>

      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">

        <div>

          <h2 className="text-3xl font-bold">

            Continue Working

          </h2>

          <p className="mt-2 text-muted-foreground">

            Jump back into your recently used tools.

          </p>

        </div>

        <Link
          href="/dashboard/history"
          className="rounded-xl border px-5 py-2 font-medium transition hover:bg-muted"
        >

          View History

        </Link>

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        {recentTools.map((tool) => {

          const Icon = tool.icon;

          return (

            <div
              key={tool.title}
              className="group relative overflow-hidden rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div
                className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${tool.color} opacity-10 blur-3xl transition-all duration-500 group-hover:scale-150`}
              />

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.color} text-white shadow-lg`}
              >

                <Icon className="h-7 w-7" />

              </div>

              <h3 className="mt-6 text-xl font-bold">

                {tool.title}

              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">

                {tool.description}

              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">

                <Clock3 className="h-4 w-4" />

                Last used {tool.lastUsed}

              </div>

              <div className="mt-6">
                              {/* Progress */}

              <div className="mb-6">

                <div className="mb-2 flex items-center justify-between">

                  <span className="text-sm text-muted-foreground">

                    Progress

                  </span>

                  <span className="text-sm font-semibold">

                    {tool.progress}

                  </span>

                </div>

                <div className="h-2 overflow-hidden rounded-full bg-muted">

                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${tool.color}`}
                    style={{ width: tool.progress }}
                  />

                </div>

              </div>

              {/* Continue Button */}

              <Link
                href="#"
                className="flex items-center justify-between rounded-2xl border bg-background px-5 py-3 font-semibold transition-all duration-300 hover:bg-muted hover:shadow-md"
              >

                Continue

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

              </Link>

            </div>
            </div>

          );

        })}

      </div>

    </section>

  );

}