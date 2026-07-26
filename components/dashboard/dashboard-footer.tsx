"use client";

import Link from "next/link";
import { Code2, LifeBuoy, ShieldCheck } from "lucide-react";

export function DashboardFooter() {
  return (
    <footer className="mt-14 border-t border-border/60 bg-background/60 backdrop-blur-xl">

      <div className="mx-auto flex max-w-[1700px] flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground md:flex-row">

        {/* Left */}

        <div className="flex flex-col items-center gap-1 md:items-start">

          <p className="font-medium text-foreground">
            © 2026 ToolVerse AI
          </p>

          <p className="text-xs">
            Build faster with AI-powered productivity tools.
          </p>

        </div>

        {/* Center */}

        <div className="flex flex-wrap items-center justify-center gap-5">

          <Link
            href="/privacy"
            className="transition hover:text-foreground"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="transition hover:text-foreground"
          >
            Terms
          </Link>

          <Link
            href="/support"
            className="flex items-center gap-1 transition hover:text-foreground"
          >
            <LifeBuoy className="h-4 w-4" />
            Support
          </Link>

          <Link
            href="/security"
            className="flex items-center gap-1 transition hover:text-foreground"
          >
            <ShieldCheck className="h-4 w-4" />
            Security
          </Link>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition hover:text-foreground"
          >
            <Code2 className="h-4 w-4" />
            GitHub
          </a>

        </div>

        {/* Right */}

        <div className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium">

          Version 1.0.0

        </div>

      </div>

    </footer>
  );
}