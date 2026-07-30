import type { Metadata } from "next";

import { AITextGenerator } from "@/components/tools/ai-text-generator/ai-text-generator";

export const metadata: Metadata = {
  title: "AI Text Generator | KRATIQ",
  description:
    "Generate high-quality AI text instantly with KRATIQ AI Text Generator. Create blogs, emails, captions, product descriptions and more.",
  keywords: [
    "AI Text Generator",
    "AI Writer",
    "AI Content Generator",
    "Free AI Writer",
    "KRATIQ AI",
  ],
};

export default function AITextGeneratorPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-10">

      <div className="mb-10 text-center">

        <h1 className="text-4xl font-bold tracking-tight">
          AI Text Generator
        </h1>

        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Generate blogs, emails, product descriptions, captions,
          social media posts and more using KRATIQ AI.
        </p>

      </div>

      <AITextGenerator />

    </div>
  );
}

