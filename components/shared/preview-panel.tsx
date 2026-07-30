// "use client";

// import { ImageIcon, Maximize2 } from "lucide-react";

// export function PreviewPanel() {
//   return (
//     <div className="space-y-6">

//       {/* Original Image */}

//       <div className="overflow-hidden rounded-3xl border bg-card">

//         <div className="flex items-center justify-between border-b px-6 py-4">

//           <div>

//             <h3 className="text-lg font-bold">

//               Original Image

//             </h3>

//             <p className="text-sm text-muted-foreground">

//               Upload an image to preview

//             </p>

//           </div>

//           <ImageIcon className="h-5 w-5 text-muted-foreground" />

//         </div>

//         <div className="flex aspect-[16/10] items-center justify-center bg-muted/30">

//           <div className="text-center">

//             <ImageIcon className="mx-auto h-14 w-14 text-muted-foreground" />

//             <p className="mt-3 text-sm text-muted-foreground">

//               No image selected

//             </p>

//           </div>

//         </div>

//       </div>

//       {/* Resized Preview */}

//       <div className="overflow-hidden rounded-3xl border bg-card">

//         <div className="flex items-center justify-between border-b px-6 py-4">

//           <div>

//             <h3 className="text-lg font-bold">

//               Resized Preview

//             </h3>

//             <p className="text-sm text-muted-foreground">

//               Preview after resizing

//             </p>

//           </div>

//           <Maximize2 className="h-5 w-5 text-muted-foreground" />

//         </div>

//         <div className="flex aspect-[16/10] items-center justify-center bg-muted/30">

//           <div className="text-center">

//             <Maximize2 className="mx-auto h-14 w-14 text-muted-foreground" />

//             <p className="mt-3 text-sm text-muted-foreground">

//               Preview will appear here

//             </p>

//           </div>

//         </div>

//       </div>

//       {/* Image Information */}

//       <div className="rounded-3xl border bg-card p-6">

//         <h3 className="mb-5 text-lg font-bold">

//           Image Information

//         </h3>

//         <div className="grid grid-cols-2 gap-4">

//           <div className="rounded-2xl bg-muted/40 p-4">

//             <p className="text-xs uppercase tracking-wide text-muted-foreground">

//               Width

//             </p>

//             <p className="mt-2 text-xl font-bold">

//               —

//             </p>

//           </div>

//           <div className="rounded-2xl bg-muted/40 p-4">

//             <p className="text-xs uppercase tracking-wide text-muted-foreground">

//               Height

//             </p>

//             <p className="mt-2 text-xl font-bold">

//               —

//             </p>

//           </div>

//           <div className="rounded-2xl bg-muted/40 p-4">

//             <p className="text-xs uppercase tracking-wide text-muted-foreground">

//               File Size

//             </p>

//             <p className="mt-2 text-xl font-bold">

//               —

//             </p>

//           </div>

//           <div className="rounded-2xl bg-muted/40 p-4">

//             <p className="text-xs uppercase tracking-wide text-muted-foreground">

//               Format

//             </p>

//             <p className="mt-2 text-xl font-bold">

//               —

//             </p>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// "use client";

// import { ImageIcon, Maximize2 } from "lucide-react";

// interface PreviewPanelProps {
//   preview: string;
//   resizedPreview: string;
//   width: number;
//   height: number;
//   fileSize: string;
//   image: File | null;
// }

// export function PreviewPanel({
//   preview,
//   resizedPreview,
//   width,
//   height,
//   fileSize,
//   image,
// }: PreviewPanelProps) {
//   return (
//     <div className="space-y-6">

//       {/* Original Image */}

//       {/* <div className="overflow-hidden rounded-3xl border bg-card"> */}
//       <div className="w-full overflow-hidden rounded-2xl border bg-card lg:rounded-3xl">

//         <div className="flex items-center justify-between border-b px-6 py-4">

//           <div>

//             <h3 className="text-lg font-bold">
//               Original Image
//             </h3>

//             <p className="text-sm text-muted-foreground">
//               {image ? image.name : "Upload an image"}
//             </p>

//           </div>

//           <ImageIcon className="h-5 w-5 text-muted-foreground" />

//         </div>

//         {/* <div className="flex aspect-[16/10] items-center justify-center bg-muted/30"> */}
//         <div className="flex h-[260px] sm:h-[320px] lg:aspect-[16/10] lg:h-auto items-center justify-center overflow-hidden bg-muted/30 p-3">

//           {preview ? (

//             <img
//               src={preview}
//               alt="Preview"
//               className="max-h-full max-w-full object-contain"
//             />

//           ) : (

//             <div className="text-center">

//               <ImageIcon className="mx-auto h-14 w-14 text-muted-foreground" />

//               <p className="mt-3 text-sm text-muted-foreground">
//                 No image selected
//               </p>

//             </div>

//           )}

//         </div>

//       </div>

//       {/* Resized Preview */}

//       <div className="overflow-hidden rounded-3xl border bg-card">

//         <div className="flex items-center justify-between border-b px-6 py-4">

//           <div>

//             <h3 className="text-lg font-bold">
//               Resized Preview
//             </h3>

//             <p className="text-sm text-muted-foreground">
//               Live Preview
//             </p>

//           </div>

//           <Maximize2 className="h-5 w-5 text-muted-foreground" />

//         </div>

//         <div className="flex aspect-[16/10] items-center justify-center bg-muted/30">

//           {preview ? (

//             <img
//               src={resizedPreview || preview}
//               alt="Resized Preview"
//               className="h-full w-full object-contain"
//             />

//           ) : (

//             <div className="text-center">

//               <Maximize2 className="mx-auto h-14 w-14 text-muted-foreground" />

//               <p className="mt-3 text-sm text-muted-foreground">
//                 Preview will appear here
//               </p>

//             </div>

//           )}

//         </div>

//       </div>

//       {/* Image Information */}

//       <div className="rounded-3xl border bg-card p-6">

//         <h3 className="mb-5 text-lg font-bold">
//           Image Information
//         </h3>

//         <div className="grid grid-cols-2 gap-4">

//           <div className="rounded-2xl bg-muted/40 p-4">

//             <p className="text-xs uppercase tracking-wide text-muted-foreground">
//               Width
//             </p>

//             <p className="mt-2 text-xl font-bold">
//               {width || "--"} px
//             </p>

//           </div>

//           <div className="rounded-2xl bg-muted/40 p-4">

//             <p className="text-xs uppercase tracking-wide text-muted-foreground">
//               Height
//             </p>

//             <p className="mt-2 text-xl font-bold">
//               {height || "--"} px
//             </p>

//           </div>

//           <div className="rounded-2xl bg-muted/40 p-4">

//             <p className="text-xs uppercase tracking-wide text-muted-foreground">
//               File Size
//             </p>

//             <p className="mt-2 text-xl font-bold">
//               {fileSize || "--"}
//             </p>

//           </div>

//           <div className="rounded-2xl bg-muted/40 p-4">

//             <p className="text-xs uppercase tracking-wide text-muted-foreground">
//               Format
//             </p>

//             <p className="mt-2 text-xl font-bold">
//               {image ? image.type.replace("image/", "").toUpperCase() : "--"}
//             </p>

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }

// "use client";

// import {
//   ImageIcon,
//   Sparkles,
//   Loader2,
// } from "lucide-react";

// interface PreviewPanelProps {
//   originalImage?: string;
//   processedImage?: string;

//   image?: File | null;

//   originalTitle?: string;
//   processedTitle?: string;

//   loading?: boolean;
//   loadingText?: string;

//   width?: number;
//   height?: number;

//   fileSize?: string;

//   showInfo?: boolean;
// }

// export function PreviewPanel({
//   originalImage,
//   processedImage,
//   image,

//   originalTitle = "Original Image",
//   processedTitle = "Processed Image",

//   loading = false,
//   loadingText = "Processing...",

//   width,
//   height,
//   fileSize,

//   showInfo = true,
// }: PreviewPanelProps) {
//   return (
//     <div className="space-y-6">

//       {/* ============================ */}
//       {/* Preview Grid */}
//       {/* ============================ */}

//       <div className="grid gap-6 xl:grid-cols-2">

//         {/* ORIGINAL */}

//         <div className="overflow-hidden rounded-3xl border bg-card">

//           <div className="flex items-center justify-between border-b px-6 py-4">

//             <div>

//               <h3 className="text-lg font-bold">
//                 {originalTitle}
//               </h3>

//               <p className="text-sm text-muted-foreground">

//                 {image
//                   ? image.name
//                   : "Upload an image"}

//               </p>

//             </div>

//             <ImageIcon className="h-5 w-5 text-muted-foreground" />

//           </div>

//           <div className="flex h-[260px] items-center justify-center overflow-hidden bg-muted/30 p-4 sm:h-[320px] lg:h-[420px]">

//             {originalImage ? (

//               <img
//                 src={originalImage}
//                 alt="Original"
//                 className="max-h-full max-w-full object-contain"
//               />

//             ) : (

//               <div className="text-center">

//                 <ImageIcon className="mx-auto h-16 w-16 text-muted-foreground" />

//                 <p className="mt-4 text-muted-foreground">

//                   Upload an image

//                 </p>

//               </div>

//             )}

//           </div>

//         </div>

//         {/* RESULT */}

//         <div className="overflow-hidden rounded-3xl border bg-card">

//           <div className="flex items-center justify-between border-b px-6 py-4">

//             <div>

//               <h3 className="text-lg font-bold">

//                 {processedTitle}

//               </h3>

//               <p className="text-sm text-muted-foreground">

//                 Live Preview

//               </p>

//             </div>

//             <Sparkles className="h-5 w-5 text-primary" />

//           </div>

//           <div className="relative flex h-[260px] items-center justify-center overflow-hidden bg-muted/30 p-4 sm:h-[320px] lg:h-[420px]">

//             {/* Loading */}

//             {loading && (

//               <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">

//                 <Loader2 className="h-10 w-10 animate-spin text-primary" />

//                 <p className="mt-4 font-medium">

//                   {loadingText}

//                 </p>

//               </div>

//             )}

//             {processedImage ? (

//               <img
//                 src={processedImage}
//                 alt="Processed"
//                 className="max-h-full max-w-full object-contain"
//               />

//             ) : (

//               <div className="text-center">

//                 <Sparkles className="mx-auto h-16 w-16 text-muted-foreground" />

//                 <p className="mt-4 text-muted-foreground">

//                   Processed image will appear here

//                 </p>

//               </div>

//             )}

//           </div>

//         </div>

//       </div>

//       {/* ============================ */}
//       {/* Image Information */}
//       {/* ============================ */}

//       {showInfo && (

//         <div className="rounded-3xl border bg-card p-6">

//           <h3 className="mb-5 text-lg font-bold">

//             Image Information

//           </h3>

//           <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//                         {/* Width */}

//             <div className="rounded-2xl bg-muted/40 p-4">

//               <p className="text-xs uppercase tracking-wide text-muted-foreground">
//                 Width
//               </p>

//               <p className="mt-2 text-2xl font-bold">
//                 {width ?? "--"} px
//               </p>

//             </div>

//             {/* Height */}

//             <div className="rounded-2xl bg-muted/40 p-4">

//               <p className="text-xs uppercase tracking-wide text-muted-foreground">
//                 Height
//               </p>

//               <p className="mt-2 text-2xl font-bold">
//                 {height ?? "--"} px
//               </p>

//             </div>

//             {/* File Size */}

//             <div className="rounded-2xl bg-muted/40 p-4">

//               <p className="text-xs uppercase tracking-wide text-muted-foreground">
//                 File Size
//               </p>

//               <p className="mt-2 text-2xl font-bold">
//                 {fileSize || "--"}
//               </p>

//             </div>

//             {/* Format */}

//             <div className="rounded-2xl bg-muted/40 p-4">

//               <p className="text-xs uppercase tracking-wide text-muted-foreground">
//                 Format
//               </p>

//               <p className="mt-2 text-2xl font-bold">
//                 {image
//                   ? image.type.replace("image/", "").toUpperCase()
//                   : "--"}
//               </p>

//             </div>

//             {/* Resolution */}

//             <div className="rounded-2xl bg-muted/40 p-4">

//               <p className="text-xs uppercase tracking-wide text-muted-foreground">
//                 Resolution
//               </p>

//               <p className="mt-2 text-xl font-bold">
//                 {width && height
//                   ? `${width} × ${height}`
//                   : "--"}
//               </p>

//             </div>

//             {/* Aspect Ratio */}

//             <div className="rounded-2xl bg-muted/40 p-4">

//               <p className="text-xs uppercase tracking-wide text-muted-foreground">
//                 Aspect Ratio
//               </p>

//               <p className="mt-2 text-xl font-bold">
//                 {width && height
//                   ? (width / height).toFixed(2)
//                   : "--"}
//               </p>

//             </div>

//             {/* Transparency */}

//             <div className="rounded-2xl bg-muted/40 p-4">

//               <p className="text-xs uppercase tracking-wide text-muted-foreground">
//                 Transparency
//               </p>

//               <p className="mt-2 text-xl font-bold">

//                 {image?.type === "image/png"
//                   ? "Supported"
//                   : "No"}

//               </p>

//             </div>

//             {/* Status */}

//             <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 p-4 text-white">

//               <p className="text-xs uppercase tracking-wide opacity-80">
//                 Status
//               </p>

//               <p className="mt-2 text-xl font-bold">

//                 {processedImage
//                   ? "Ready"
//                   : loading
//                   ? "Processing"
//                   : "Waiting"}

//               </p>

//             </div>

//           </div>

//         </div>

//       )}

//     </div>
//   );
// }


"use client";

import {
  ImageIcon,
  Sparkles,
  Loader2,
} from "lucide-react";

interface PreviewPanelProps {
  // Existing Tools
  preview?: string;
  resizedPreview?: string;

  // Future Tools
  originalImage?: string;
  processedImage?: string;

  image?: File | null;

  originalTitle?: string;
  processedTitle?: string;

  loading?: boolean;
  loadingText?: string;

  width?: number;
  height?: number;

  fileSize?: string;

  showInfo?: boolean;

  children?: React.ReactNode;
}

export function PreviewPanel({
  preview,
  resizedPreview,

  originalImage,
  processedImage,

  image,

  originalTitle = "Original Image",
  processedTitle = "Processed Image",

  loading = false,
  loadingText = "Processing...",

  width,
  height,

  fileSize,

  showInfo = true,

  children,
}: PreviewPanelProps) {

  const original =
    originalImage || preview || "";

  const processed =
    processedImage || resizedPreview || "";

  return (

    <div className="space-y-6">

      <div className="grid gap-6 xl:grid-cols-2">

        {/* ORIGINAL */}

        <div className="overflow-hidden rounded-3xl border bg-card">

          <div className="flex items-center justify-between border-b px-6 py-4">

            <div>

              <h3 className="text-lg font-bold">

                {originalTitle}

              </h3>

              <p className="text-sm text-muted-foreground">

                {image
                  ? image.name
                  : "Upload an image"}

              </p>

            </div>

            <ImageIcon className="h-5 w-5 text-muted-foreground"/>

          </div>

          <div className="flex h-[260px] items-center justify-center overflow-hidden bg-muted/30 p-3 sm:h-[320px] lg:h-[420px]">

            {original ? (

              <img
                src={original}
                alt="Original"
                className="max-h-full max-w-full object-contain"
              />

            ) : (

              <div className="text-center">

                <ImageIcon className="mx-auto h-16 w-16 text-muted-foreground"/>

                <p className="mt-4 text-muted-foreground">

                  Upload an image

                </p>

              </div>

            )}

          </div>

        </div>

                {/* RESULT */}

        <div className="overflow-hidden rounded-3xl border bg-card">

          <div className="flex items-center justify-between border-b px-6 py-4">

            <div>

              <h3 className="text-lg font-bold">

                {processedTitle}

              </h3>

              <p className="text-sm text-muted-foreground">

                Live Preview

              </p>

            </div>

            <Sparkles className="h-5 w-5 text-primary"/>

          </div>

          <div className="relative flex h-[260px] items-center justify-center overflow-hidden bg-muted/30 p-3 sm:h-[320px] lg:h-[420px]">

            {/* Loading Overlay */}

            {loading && (

              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">

                <Loader2 className="h-10 w-10 animate-spin text-primary"/>

                <p className="mt-4 font-medium">

                  {loadingText}

                </p>

              </div>

            )}

            {/* Processed Image */}

            {processed ? (

              <img
                src={processed}
                alt="Processed"
                className="max-h-full max-w-full object-contain"
              />

            ) : original ? (

              <img
                src={original}
                alt="Preview"
                className="max-h-full max-w-full object-contain opacity-40"
              />

            ) : (

              <div className="text-center">

                <Sparkles className="mx-auto h-16 w-16 text-muted-foreground"/>

                <p className="mt-4 text-muted-foreground">

                  Processed image will appear here

                </p>

              </div>

            )}

          </div>

        </div>

      </div>

      {/* ============================== */}
      {/* Image Information */}
      {/* ============================== */}

      {showInfo && (

        <div className="rounded-3xl border bg-card p-6">

          <h3 className="mb-6 text-lg font-bold">

            Image Information

          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {/* Width */}

            <div className="rounded-2xl bg-muted/40 p-4">

              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Width
              </p>

              <p className="mt-2 text-2xl font-bold">
                {width ?? "--"} px
              </p>

            </div>

            {/* Height */}

            <div className="rounded-2xl bg-muted/40 p-4">

              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Height
              </p>

              <p className="mt-2 text-2xl font-bold">
                {height ?? "--"} px
              </p>

            </div>

            {/* File Size */}

            <div className="rounded-2xl bg-muted/40 p-4">

              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                File Size
              </p>

              <p className="mt-2 text-2xl font-bold">
                {fileSize || "--"}
              </p>

            </div>

            {/* Format */}

            <div className="rounded-2xl bg-muted/40 p-4">

              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Format
              </p>

              <p className="mt-2 text-2xl font-bold">

                {image
                  ? image.type.replace("image/", "").toUpperCase()
                  : "--"}

              </p>

            </div>

            {/* Resolution */}

            <div className="rounded-2xl bg-muted/40 p-4">

              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Resolution
              </p>

              <p className="mt-2 text-xl font-bold">

                {width && height
                  ? `${width} × ${height}`
                  : "--"}

              </p>

            </div>

            {/* Aspect Ratio */}

            <div className="rounded-2xl bg-muted/40 p-4">

              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Aspect Ratio
              </p>

              <p className="mt-2 text-xl font-bold">

                {width && height
                  ? (width / height).toFixed(2)
                  : "--"}

              </p>

            </div>

            {/* Image Type */}

            <div className="rounded-2xl bg-muted/40 p-4">

              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                Image Type
              </p>

              <p className="mt-2 text-xl font-bold">

                {image?.type || "--"}

              </p>

            </div>

            {/* Status */}

            <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 p-4 text-white">

              <p className="text-xs uppercase tracking-wide opacity-80">
                Status
              </p>

              <p className="mt-2 text-xl font-bold">

                {loading
                  ? "Processing..."
                  : processed
                  ? "Completed"
                  : "Ready"}

              </p>

            </div>

          </div>

          {children && (

            <div className="mt-6">

              {children}

            </div>

          )}
                  </div>

      )}

    </div>

  );

}