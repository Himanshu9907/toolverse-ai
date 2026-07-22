"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[40px] border border-border bg-gradient-to-br from-primary via-violet-600 to-blue-600 p-8 text-white shadow-2xl md:p-14">

          {/* Background Glow */}

          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">

              <Sparkles className="h-4 w-4"/>

              Start Free Today

            </div>

            <h2 className="mt-8 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">

              One Platform.

              <br />

              Hundreds of Powerful Tools.

            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">

              Compress images, edit PDFs, remove backgrounds,
              automate workflows and use AI tools — all in one
              beautiful platform.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">
                              <Link href="/tools">

                <Button
                  size="lg"
                  variant="secondary"
                  className="h-14 rounded-xl px-8 text-base font-semibold"
                >

                  Explore Tools

                  <ArrowRight className="ml-2 h-5 w-5" />

                </Button>

              </Link>

              <Link href="/auth/signup">

                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 rounded-xl border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md hover:bg-white hover:text-black dark:hover:text-black"
                >

                  Create Free Account

                </Button>

              </Link>

            </div>

            {/* Feature Pills */}

            <div className="mt-12 grid gap-4 md:grid-cols-3">

              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">

                <div className="rounded-xl bg-white/20 p-3">

                  <Zap className="h-6 w-6" />

                </div>

                <div>

                  <h4 className="font-semibold">

                    Lightning Fast

                  </h4>

                  <p className="text-sm text-white/70">

                    Average processing in under 3 seconds

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">

                <div className="rounded-xl bg-white/20 p-3">

                  <ShieldCheck className="h-6 w-6" />

                </div>

                <div>

                  <h4 className="font-semibold">

                    Secure & Private

                  </h4>

                  <p className="text-sm text-white/70">

                    Files are encrypted and auto-deleted

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">

                <div className="rounded-xl bg-white/20 p-3">

                  <CheckCircle2 className="h-6 w-6" />

                </div>

                <div>

                  <h4 className="font-semibold">

                    No Installation

                  </h4>

                  <p className="text-sm text-white/70">

                    Use instantly from any device

                  </p>

                </div>

              </div>

            </div>

            {/* Bottom Stats */}

            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/20 pt-10 md:grid-cols-4">

              <div>

                <h3 className="text-4xl font-bold">

                  30+

                </h3>

                <p className="mt-2 text-white/70">

                  Powerful Tools

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold">

                  50K+

                </h3>

                <p className="mt-2 text-white/70">

                  Happy Users

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold">

                  99.9%

                </h3>

                <p className="mt-2 text-white/70">

                  Uptime

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold">

                  24/7

                </h3>

                <p className="mt-2 text-white/70">

                  Cloud Platform

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}