"use client";

import UploadPanel from "./upload-panel";
import PreviewPanel from "./preview-panel";
import Toolbar from "./toolbar";
import { useImageConverter } from "@/hooks/use-image-converter";

export default function ImageConverter() {

  const converter = useImageConverter();

  return (
    // <section className="container mx-auto py-10">
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-10">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Image Converter
        </h1>

        <p className="text-muted-foreground mt-2">
          Convert JPG PNG WEBP instantly.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <UploadPanel converter={converter} />

        <PreviewPanel converter={converter} />

      </div>

      <Toolbar converter={converter} />

    </section>
  );
}