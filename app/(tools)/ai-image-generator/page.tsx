import type { Metadata } from "next";

import AIImageGenerator from "@/components/tools/ai-image-generator/ai-image-generator";

export const metadata: Metadata = {
  title: "AI Image Generator | KRATIQ AI",
  description:
    "Generate stunning AI images from text prompts using KRATIQ AI. Create realistic, anime, cartoon, 3D and artistic images in seconds.",
};

export default function AIImageGeneratorPage() {
  return (
    <main className="container mx-auto py-10">
      <AIImageGenerator />
    </main>
  );
}