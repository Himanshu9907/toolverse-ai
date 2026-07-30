// "use client";

// import { useState } from "react";
// import { Wand2 } from "lucide-react";
// import { removeBackground } from "@imgly/background-removal";

// import { UploadZone } from "@/components/shared/upload-zone";
// import { PreviewPanel } from "@/components/shared/preview-panel";
// import { Controls } from "./controls";

// export function BackgroundRemover() {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const [originalPreview, setOriginalPreview] = useState("");

//   const [resultPreview, setResultPreview] = useState("");

//   const [loading, setLoading] = useState(false);

//   const [resultBlob, setResultBlob] = useState<Blob | null>(null);

//   const [processedImage, setProcessedImage] = useState("");

//   const handleUpload = (file: File) => {
//     setSelectedFile(file);

//     const url = URL.createObjectURL(file);

//     setOriginalPreview(url);

//     setResultPreview("");
//     setResultBlob(null);
//   };

//   const handleRemoveBackground = async () => {
//     if (!selectedFile) return;

//     setLoading(true);

//     // API integration yahan hoga

//     setTimeout(() => {
//       setResultPreview(originalPreview);
//       setLoading(false);
//     }, 2000);
//   };

//   const handleDownload = () => {
//     if (!resultBlob) return;

//     const url = URL.createObjectURL(resultBlob);

//     const a = document.createElement("a");

//     a.href = url;

//     a.download = "background-removed.png";

//     a.click();

//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">

//       {/* Header */}

//       <div className="mb-10">

//         <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

//           <Wand2 className="h-4 w-4" />

//           AI Background Remover

//         </div>

//         <h1 className="mt-5 text-4xl font-extrabold lg:text-5xl">

//           Remove Background Instantly

//         </h1>

//         <p className="mt-4 max-w-2xl text-muted-foreground">

//           Upload your image and remove the background with AI in seconds.

//         </p>

//       </div>

//       {/* Upload */}

//       <UploadZone onFileSelect={handleUpload} />

//       {/* Main */}

//       <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">

//         <PreviewPanel
//           originalPreview={originalPreview}
//           resultPreview={resultPreview}
//           loading={loading}
//         />

//         <Controls
//           canProcess={!!selectedFile}
//           canDownload={!!resultBlob}
//           loading={loading}
//           onRemove={handleRemoveBackground}
//           onDownload={handleDownload}
//         />

//       </div>

//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Wand2 } from "lucide-react";
import { removeBackground } from "@imgly/background-removal";

import { UploadZone } from "@/components/shared/upload-zone";
// import { PreviewPanel } from "@/components/shared/preview-panel";
import { Controls } from "./controls";
// import { BeforeAfter } from "./before-after";

export function BackgroundRemover() {
  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);

  const [originalPreview, setOriginalPreview] =
    useState("");

  const [resultPreview, setResultPreview] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [resultBlob, setResultBlob] =
    useState<Blob | null>(null);

  const [imageWidth, setImageWidth] =
    useState(0);

  const [imageHeight, setImageHeight] =
    useState(0);

  const [fileSize, setFileSize] =
    useState("");

  const handleUpload = (file: File) => {
    setSelectedFile(file);

    setResultPreview("");
    setResultBlob(null);

    const url = URL.createObjectURL(file);

    setOriginalPreview(url);

    setFileSize(
      (file.size / 1024 / 1024).toFixed(2) + " MB"
    );

    const img = new Image();

    img.src = url;

    img.onload = () => {
      setImageWidth(img.width);
      setImageHeight(img.height);
    };
  };

  const handleRemoveBackground = async () => {
    if (!selectedFile) return;

    try {
      setLoading(true);

      const blob = await removeBackground(
        selectedFile
      );

      setResultBlob(blob);

      const url =
        URL.createObjectURL(blob);

      setResultPreview(url);
    } catch (err) {
      console.error(err);

      alert(
        "Failed to remove background."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!resultBlob) return;

    const url =
      URL.createObjectURL(resultBlob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      "background-removed.png";

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

          <Wand2 className="h-4 w-4" />

          AI Background Remover

        </div>

        <h1 className="mt-5 text-4xl font-extrabold lg:text-5xl">

          Remove Background Instantly

        </h1>

        <p className="mt-4 max-w-2xl text-muted-foreground">

          Upload your image and remove
          the background using AI in
          seconds.

        </p>

      </div>

      <UploadZone
        onFileSelect={handleUpload}
      />
            <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">

        {/* <PreviewPanel
          preview={originalPreview}
          resizedPreview={resultPreview}
          image={selectedFile}
          width={imageWidth}
          height={imageHeight}
          fileSize={fileSize}
          loading={loading}
        />

        {originalPreview && resultPreview && (
  <div className="mt-6">
    <BeforeAfter
      before={originalPreview}
      after={resultPreview}
    />
  </div>
)} */}

<div className="space-y-6">

  {/* Original */}

  <div className="overflow-hidden rounded-3xl border bg-card">

    <div className="border-b px-6 py-4">
      <h3 className="font-bold text-lg">
        Original Image
      </h3>
    </div>

    <div className="flex h-[420px] items-center justify-center bg-muted/30">

      {originalPreview ? (

        <img
          src={originalPreview}
          className="max-h-full max-w-full object-contain"
        />

      ) : (

        <p>No Image</p>

      )}

    </div>

  </div>

  {/* Result */}

  <div className="overflow-hidden rounded-3xl border bg-card">

    <div className="border-b px-6 py-4">
      <h3 className="font-bold text-lg">
        Background Removed
      </h3>
    </div>

    <div className="flex h-[420px] items-center justify-center bg-muted/30">

      {loading ? (

        <p>Removing Background...</p>

      ) : resultPreview ? (

        <img
          src={resultPreview}
          className="max-h-full max-w-full object-contain"
        />

      ) : (

        <p>Result will appear here</p>

      )}

    </div>

  </div>

  {/* {originalPreview && resultPreview && (

    <BeforeAfter
      before={originalPreview}
      after={resultPreview}
    />

  )} */}

</div>

        <Controls
          canProcess={!!selectedFile}
          canDownload={!!resultBlob}
          loading={loading}
          onRemove={handleRemoveBackground}
          onDownload={handleDownload}
        />

      </div>

    </div>
  );
}