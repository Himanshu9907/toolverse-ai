"use client";

import {
  Bot,
  Sparkles,
  ArrowRight,
  Wand2,
  Workflow,
  BrainCircuit,
  ImageIcon,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const automations = [
  {
    title: "Image Optimizer AI",
    description:
      "Automatically compress, resize and convert images with one click.",
    icon: ImageIcon,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Document AI",
    description:
      "Extract text, summarize documents and convert files instantly.",
    icon: FileText,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Workflow Automation",
    description:
      "Connect multiple tools together and automate repetitive tasks.",
    icon: Workflow,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "AI Assistant",
    description:
      "Generate content, answer questions and improve productivity.",
    icon: BrainCircuit,
    color: "from-green-500 to-emerald-500",
  },
];

export function AIAutomation() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

            <Sparkles className="h-4 w-4"/>

            AI Automation

          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">

            Let AI Do The Work

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">

            Automate repetitive tasks, process files faster,
            and boost productivity using powerful AI workflows.

          </p>

        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
                      {/* Left Side */}

          <div className="space-y-6">

            {automations.map((automation) => {

              const Icon = automation.icon;

              return (

                <div
                  key={automation.title}
                  className="group rounded-[28px] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
                >

                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${automation.color} text-white shadow-lg`}
                    >

                      <Icon className="h-8 w-8"/>

                    </div>

                    <div className="flex-1">

                      <h3 className="text-2xl font-bold">

                        {automation.title}

                      </h3>

                      <p className="mt-3 leading-7 text-muted-foreground">

                        {automation.description}

                      </p>

                      <Button
                        variant="ghost"
                        className="mt-6 px-0 group/button"
                      >

                        Learn More

                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1"/>

                      </Button>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

          {/* Right Side */}

          <div className="relative overflow-hidden rounded-[32px] border border-border bg-card p-8">

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

            <div className="relative">

              <div className="flex items-center gap-3">

                <div className="rounded-2xl bg-primary/10 p-4">

                  <Bot className="h-8 w-8 text-primary"/>

                </div>

                <div>

                  <h3 className="text-2xl font-bold">

                    AI Workflow

                  </h3>

                  <p className="text-muted-foreground">

                    Smart automation engine

                  </p>

                </div>

              </div>

              <div className="mt-10 space-y-5">

                <WorkflowStep
                  number="01"
                  title="Upload File"
                  subtitle="Image, PDF or Video"
                />

                <WorkflowStep
                  number="02"
                  title="AI Processing"
                  subtitle="Smart Optimization"
                />

                <WorkflowStep
                  number="03"
                  title="Quality Check"
                  subtitle="Automatic Validation"
                />

                <WorkflowStep
                  number="04"
                  title="Download"
                  subtitle="Ready in Seconds"
                />

              </div>

              <div className="mt-10 rounded-3xl bg-primary p-6 text-primary-foreground">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm opacity-80">

                      AI Efficiency

                    </p>

                    <h2 className="mt-2 text-4xl font-bold">

                      98%

                    </h2>

                  </div>

                  <Wand2 className="h-14 w-14 opacity-80"/>

                </div>

              </div>

            </div>

          </div>

        </div>
                {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] border border-border bg-gradient-to-br from-primary/5 via-background to-background p-8 md:p-12">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

                <Sparkles className="h-4 w-4" />

                AI Powered Platform

              </div>

              <h3 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">

                Automate Your Entire Workflow

              </h3>

              <p className="mt-4 text-lg text-muted-foreground">

                Upload once, let AI optimize, convert, compress,
                enhance and deliver your files automatically.
                No manual work required.

              </p>

            </div>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">

              <Button
                size="lg"
                className="h-12 px-8"
              >
                Start Automation

                <ArrowRight className="ml-2 h-4 w-4" />

              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8"
              >
                View Demo
              </Button>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

/* ==========================================================
   Workflow Step
========================================================== */

function WorkflowStep({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="group flex items-center gap-5 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-violet-600 text-lg font-bold text-white">

        {number}

      </div>

      <div className="flex-1">

        <h4 className="text-lg font-semibold">

          {title}

        </h4>

        <p className="mt-1 text-sm text-muted-foreground">

          {subtitle}

        </p>

      </div>

      <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />

    </div>
  );
}