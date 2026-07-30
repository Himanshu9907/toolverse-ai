import type { Metadata } from "next";

import { AIHumanizer } from "@/components/tools/ai-humanizer/ai-humanizer";

export const metadata: Metadata = {
  title: "AI Humanizer | KRATIQ AI",
  description:
    "Rewrite AI-generated content into natural, human-like writing using KRATIQ AI Humanizer. Perfect for blogs, emails, assignments, articles and social media posts.",
  keywords: [
    "AI Humanizer",
    "Humanize AI Text",
    "AI Rewriter",
    "Human-like Writing",
    "AI Content Rewriter",
    "KRATIQ AI",
  ],
};

export default function AIHumanizerPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-10">

      <div className="mb-10 text-center">

        <h1 className="text-4xl font-bold tracking-tight">
          AI Humanizer
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Transform AI-generated content into natural,
          engaging and human-like writing while preserving
          the original meaning.
        </p>

      </div>

      <AIHumanizer />

    </div>
  );
}