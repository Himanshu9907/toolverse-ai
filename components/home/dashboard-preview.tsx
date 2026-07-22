"use client";

import React from "react";
import {
  Activity,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Clock3,
  Cpu,
  FileText,
  ImageIcon,
  Sparkles,
  BarChart3,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function DashboardPreview() {
  return (
    <section className="relative mt-24">

      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_30px_80px_rgba(0,0,0,.08)]">

          {/* Header */}

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">

            <div className="flex items-center gap-2">

              <div className="h-3 w-3 rounded-full bg-red-400"/>

              <div className="h-3 w-3 rounded-full bg-yellow-400"/>

              <div className="h-3 w-3 rounded-full bg-green-400"/>

            </div>

            <div className="flex items-center gap-2">

              <Sparkles className="h-4 w-4 text-primary"/>

              <span className="text-sm text-muted-foreground">

                ToolVerse Dashboard

              </span>

            </div>

            <Button size="sm">

              Upgrade

            </Button>

          </div>

          {/* Body */}

          <div className="grid gap-6 p-5 lg:grid-cols-[1.45fr_.95fr] lg:p-8">

            {/* LEFT */}

            <div className="space-y-6">

              {/* Upload */}

              <div className="rounded-[28px] border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-8 lg:p-10">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] bg-primary text-primary-foreground shadow-lg sm:h-24 sm:w-24">

                  <ImageIcon className="h-10 w-10 sm:h-12 sm:w-12"/>

                </div>

                <h2 className="mt-6 text-center text-2xl font-bold sm:text-3xl">

                  Upload Your File

                </h2>

                <p className="mx-auto mt-4 max-w-md text-center text-sm leading-7 text-muted-foreground sm:text-base">

                  Compress Images, Convert Files,
                  Merge PDFs, Remove Background
                  and use powerful AI tools.

                </p>

                <div className="mt-8 flex justify-center">

                  <Button
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Select File
                  </Button>

                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3">

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600">

                    PNG

                  </span>

                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600">

                    JPG

                  </span>

                  <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-600">

                    WEBP

                  </span>

                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-600">

                    PDF

                  </span>

                </div>

              </div>

              {/* Stats */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

                <StatCard
                  icon={<Activity className="h-6 w-6 text-primary"/>}
                  title="Files"
                  value="128K"
                />

                <StatCard
                  icon={<Bot className="h-6 w-6 text-violet-500"/>}
                  title="AI Tools"
                  value="38"
                />

                <StatCard
                  icon={<ArrowUpRight className="h-6 w-6 text-green-500"/>}
                  title="Success"
                  value="99%"
                />

              </div>
                            {/* AI Processing */}

              <div className="rounded-[28px] border border-border bg-card p-6 sm:p-8">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <h3 className="text-xl font-bold">

                      AI Processing

                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">

                      Live processing statistics

                    </p>

                  </div>

                  <div className="inline-flex w-fit items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">

                    ● LIVE

                  </div>

                </div>

                <div className="mt-8 space-y-6">

                  <ProgressItem
                    title="Image Compression"
                    value="92%"
                    percentage={92}
                  />

                  <ProgressItem
                    title="PDF Compression"
                    value="84%"
                    percentage={84}
                  />

                  <ProgressItem
                    title="Background Removal"
                    value="74%"
                    percentage={74}
                  />

                  <ProgressItem
                    title="AI Enhancement"
                    value="61%"
                    percentage={61}
                  />

                </div>

              </div>

            </div>

            {/* ================= RIGHT ================= */}

            <div className="space-y-6">

              {/* Performance */}

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

                <div className="rounded-[24px] border bg-card p-6">

                  <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-primary/10 p-3">

                      <Cpu className="h-7 w-7 text-primary"/>

                    </div>

                    <div>

                      <p className="text-sm text-muted-foreground">

                        AI Engine

                      </p>

                      <h3 className="text-2xl font-bold">

                        GPT-5.5

                      </h3>

                    </div>

                  </div>

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-muted-foreground">

                      Speed

                    </span>

                    <span className="font-semibold text-green-600">

                      Ultra Fast

                    </span>

                  </div>

                </div>

                <div className="rounded-[24px] border bg-card p-6">

                  <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-green-500/10 p-3">

                      <Clock3 className="h-7 w-7 text-green-500"/>

                    </div>

                    <div>

                      <p className="text-sm text-muted-foreground">

                        Avg Time

                      </p>

                      <h3 className="text-2xl font-bold">

                        2.4 sec

                      </h3>

                    </div>

                  </div>

                  <div className="mt-8 flex items-center justify-between">

                    <span className="text-muted-foreground">

                      Queue

                    </span>

                    <span className="font-semibold">

                      12 Jobs

                    </span>

                  </div>

                </div>

              </div>

              {/* Recent Activity */}

              <div className="rounded-[28px] border bg-card p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-xl font-bold">

                      Recent Activity

                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">

                      Latest processed files

                    </p>

                  </div>

                </div>

                <div className="mt-8 space-y-4">

                  <ActivityRow

                    icon={<ImageIcon className="h-5 w-5"/>}

                    title="holiday-photo.png"

                    subtitle="Compressed Successfully"

                    status="Completed"

                  />

                  <ActivityRow

                    icon={<FileText className="h-5 w-5"/>}

                    title="resume.pdf"

                    subtitle="Merged Successfully"

                    status="Completed"

                  />

                  <ActivityRow

                    icon={<Bot className="h-5 w-5"/>}

                    title="portrait.jpg"

                    subtitle="Background Removed"

                    status="Running"

                  />

                  <ActivityRow

                    icon={<ImageIcon className="h-5 w-5"/>}

                    title="cover.webp"

                    subtitle="Converted Successfully"

                    status="Completed"

                  />

                </div>

              </div>

              {/* Usage */}

              <div className="rounded-[28px] border bg-card p-6">

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-bold">

                    Usage Overview

                  </h3>

                  <BarChart3 className="h-5 w-5 text-primary"/>

                </div>

                <div className="mt-8 space-y-5">

                  <MetricRow
                    label="Images"
                    value="2,436"
                  />

                  <MetricRow
                    label="PDF"
                    value="1,182"
                  />

                  <MetricRow
                    label="AI Tools"
                    value="864"
                  />

                  <MetricRow
                    label="Video"
                    value="428"
                  />

                  <MetricRow
                    label="API Calls"
                    value="8,942"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

/* ==========================================================
   Stat Card
========================================================== */

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="group rounded-[24px] border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110">

        {icon}

      </div>

      <h3 className="mt-5 text-3xl font-bold">

        {value}

      </h3>

      <p className="mt-2 text-sm text-muted-foreground">

        {title}

      </p>

    </div>
  );
}

/* ==========================================================
   Activity Row
========================================================== */

function ActivityRow({
  icon,
  title,
  subtitle,
  status,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  status: string;
}) {
  const completed = status === "Completed";

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-4 transition-all duration-300 hover:border-primary/20 hover:bg-accent sm:flex-row sm:items-center sm:justify-between">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-muted p-3">

          {icon}

        </div>

        <div>

          <h4 className="font-semibold">

            {title}

          </h4>

          <p className="text-xs text-muted-foreground">

            {subtitle}

          </p>

        </div>

      </div>

      <div
        className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
          completed
            ? "bg-green-500/10 text-green-600"
            : "bg-orange-500/10 text-orange-600"
        }`}
      >
        <CheckCircle2 className="h-4 w-4" />

        {status}

      </div>

    </div>
  );
}

/* ==========================================================
   Progress Item
========================================================== */

function ProgressItem({
  title,
  value,
  percentage,
}: {
  title: string;
  value: string;
  percentage: number;
}) {
  return (
    <div>

      <div className="mb-2 flex items-center justify-between">

        <span className="text-sm font-medium">

          {title}

        </span>

        <span className="text-sm text-muted-foreground">

          {value}

        </span>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-muted">

        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 transition-all duration-700"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}

/* ==========================================================
   Metric Row
========================================================== */

function MetricRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3 transition-all duration-300 hover:bg-muted">

      <span className="text-sm text-muted-foreground">

        {label}

      </span>

      <span className="font-semibold">

        {value}

      </span>

    </div>
  );
}