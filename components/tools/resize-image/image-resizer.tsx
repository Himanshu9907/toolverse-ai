"use client";

import { useState } from "react";
import { Crop } from "lucide-react";

import { UploadZone } from "@/components/shared/upload-zone";
import { PreviewPanel } from "@/components/shared/preview-panel";
// import { UploadZone } from "../../shared/upload-zone";
// import { PreviewPanel } from "../../shared/preview-panel";
import { ResizeControls } from "./resize-controls";
import { PresetGrid } from "./preset-grid";
import pica from "pica";

export function ImageResizer() {
  const [image, setImage] = useState<File | null>(null);

  const [preview, setPreview] = useState("");

  const [width, setWidth] = useState(0);

  const [height, setHeight] = useState(0);

  const [fileSize, setFileSize] = useState("");

  const [resizedBlob, setResizedBlob] = useState<Blob | null>(null);

  const [isProcessing, setIsProcessing] = useState(false);

  const [resizedPreview, setResizedPreview] = useState("");

  const [lockRatio, setLockRatio] = useState(true);

  const [aspectRatio, setAspectRatio] = useState(1);

  const handleImageUpload = (file: File) => {
    setImage(file);

    setFileSize((file.size / 1024 / 1024).toFixed(2) + " MB");

    const url = URL.createObjectURL(file);

    setPreview(url);

    const img = new Image();

    img.src = url;

    img.onload = () => {
      setWidth(img.width);
setHeight(img.height);

setAspectRatio(img.width / img.height);
    };
  };

  const handleResize = async () => {
    
  if (!image || !preview) return;

  try {
    setIsProcessing(true);

    // Original image load
    const img = new window.Image();
    img.src = preview;

    await new Promise((resolve) => {
      img.onload = resolve;
    });

    // Source canvas
    const srcCanvas = document.createElement("canvas");
    srcCanvas.width = img.width;
    srcCanvas.height = img.height;

    const srcCtx = srcCanvas.getContext("2d");
    if (!srcCtx) return;

    srcCtx.drawImage(img, 0, 0);

    // Destination canvas
    const destCanvas = document.createElement("canvas");
    destCanvas.width = width;
    destCanvas.height = height;

    // High quality resize with Pica
    const picaInstance = pica();

    await picaInstance.resize(srcCanvas, destCanvas);

    // Convert to blob
    const blob = await picaInstance.toBlob(
      destCanvas,
      image.type || "image/jpeg",
      0.9
    );

    setResizedBlob(blob);

    const resizedUrl = URL.createObjectURL(blob);

    setResizedPreview(resizedUrl);
  } catch (error) {
    console.error("Resize failed:", error);
    alert("Failed to resize image");
  } finally {
    setIsProcessing(false);
  }
};

const handleWidthChange = (value: number) => {
  setWidth(value);

  if (lockRatio) {
    setHeight(Math.round(value / aspectRatio));
  }
};

const handleHeightChange = (value: number) => {
  setHeight(value);

  if (lockRatio) {
    setWidth(Math.round(value * aspectRatio));
  }
};

const handleDownload = () => {
  if (!resizedBlob) return;

  const url = URL.createObjectURL(resizedBlob);

  const a = document.createElement("a");
  a.href = url;

  const extension =
    image?.name.split(".").pop() || "jpg";

  const filename =
    image?.name.replace(/\.[^/.]+$/, "") || "image";

  a.download = `${filename}-resized.${extension}`;

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);

  URL.revokeObjectURL(url);
};

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">

      {/* Header */}

      <div className="mb-10">

        <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

          <Crop className="h-4 w-4" />

          Image Resizer

        </div>

        <h1 className="mt-5 text-4xl font-extrabold lg:text-5xl">

          Resize Images Instantly

        </h1>

        <p className="mt-4 max-w-2xl text-muted-foreground">

          Resize JPG, PNG, WEBP and AVIF images without losing quality.

        </p>

      </div>

      {/* Upload */}

      {/* <UploadZone onUpload={handleImageUpload} /> */}
      <UploadZone onFileSelect={handleImageUpload} />

      {/* Main Layout */}

      {/* <div className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_420px]"> */}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">

        {/* <PreviewPanel
          preview={preview}
          width={width}
          height={height}
          fileSize={fileSize}
          image={image}
        /> */}

        <PreviewPanel
  preview={preview}
  resizedPreview={resizedPreview}
  width={width}
  height={height}
  fileSize={fileSize}
  image={image}
/>

        <div className="space-y-6">

          {/* <ResizeControls
            width={width}
            height={height}
            setWidth={setWidth}
            setHeight={setHeight}
          /> */}

          {/* <ResizeControls
  width={width}
  height={height}
  setWidth={setWidth}
  setHeight={setHeight}
  onResize={handleResize}
  isProcessing={isProcessing}
  canResize={!!image}
/> */}

{/* <ResizeControls
  width={width}
  height={height}
  setWidth={handleWidthChange}
  setHeight={handleHeightChange}
  lockRatio={lockRatio}
  setLockRatio={setLockRatio}
  onResize={handleResize}
  isProcessing={isProcessing}
  canResize={!!image}
/> */}

<ResizeControls
  width={width}
  height={height}
  setWidth={handleWidthChange}
  setHeight={handleHeightChange}
  lockRatio={lockRatio}
  setLockRatio={setLockRatio}
  onResize={handleResize}
  onDownload={handleDownload}
  isProcessing={isProcessing}
  canResize={!!image}
/>

          <PresetGrid
            setWidth={setWidth}
            setHeight={setHeight}
          />

        </div>

      </div>

    </div>
  );
}