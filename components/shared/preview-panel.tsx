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

"use client";

import { ImageIcon, Maximize2 } from "lucide-react";

interface PreviewPanelProps {
  preview: string;
  resizedPreview: string;
  width: number;
  height: number;
  fileSize: string;
  image: File | null;
}

export function PreviewPanel({
  preview,
  resizedPreview,
  width,
  height,
  fileSize,
  image,
}: PreviewPanelProps) {
  return (
    <div className="space-y-6">

      {/* Original Image */}

      {/* <div className="overflow-hidden rounded-3xl border bg-card"> */}
      <div className="w-full overflow-hidden rounded-2xl border bg-card lg:rounded-3xl">

        <div className="flex items-center justify-between border-b px-6 py-4">

          <div>

            <h3 className="text-lg font-bold">
              Original Image
            </h3>

            <p className="text-sm text-muted-foreground">
              {image ? image.name : "Upload an image"}
            </p>

          </div>

          <ImageIcon className="h-5 w-5 text-muted-foreground" />

        </div>

        {/* <div className="flex aspect-[16/10] items-center justify-center bg-muted/30"> */}
        <div className="flex h-[260px] sm:h-[320px] lg:aspect-[16/10] lg:h-auto items-center justify-center overflow-hidden bg-muted/30 p-3">

          {preview ? (

            <img
              src={preview}
              alt="Preview"
              className="max-h-full max-w-full object-contain"
            />

          ) : (

            <div className="text-center">

              <ImageIcon className="mx-auto h-14 w-14 text-muted-foreground" />

              <p className="mt-3 text-sm text-muted-foreground">
                No image selected
              </p>

            </div>

          )}

        </div>

      </div>

      {/* Resized Preview */}

      <div className="overflow-hidden rounded-3xl border bg-card">

        <div className="flex items-center justify-between border-b px-6 py-4">

          <div>

            <h3 className="text-lg font-bold">
              Resized Preview
            </h3>

            <p className="text-sm text-muted-foreground">
              Live Preview
            </p>

          </div>

          <Maximize2 className="h-5 w-5 text-muted-foreground" />

        </div>

        <div className="flex aspect-[16/10] items-center justify-center bg-muted/30">

          {preview ? (

            <img
              src={resizedPreview || preview}
              alt="Resized Preview"
              className="h-full w-full object-contain"
            />

          ) : (

            <div className="text-center">

              <Maximize2 className="mx-auto h-14 w-14 text-muted-foreground" />

              <p className="mt-3 text-sm text-muted-foreground">
                Preview will appear here
              </p>

            </div>

          )}

        </div>

      </div>

      {/* Image Information */}

      <div className="rounded-3xl border bg-card p-6">

        <h3 className="mb-5 text-lg font-bold">
          Image Information
        </h3>

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-muted/40 p-4">

            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Width
            </p>

            <p className="mt-2 text-xl font-bold">
              {width || "--"} px
            </p>

          </div>

          <div className="rounded-2xl bg-muted/40 p-4">

            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Height
            </p>

            <p className="mt-2 text-xl font-bold">
              {height || "--"} px
            </p>

          </div>

          <div className="rounded-2xl bg-muted/40 p-4">

            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              File Size
            </p>

            <p className="mt-2 text-xl font-bold">
              {fileSize || "--"}
            </p>

          </div>

          <div className="rounded-2xl bg-muted/40 p-4">

            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Format
            </p>

            <p className="mt-2 text-xl font-bold">
              {image ? image.type.replace("image/", "").toUpperCase() : "--"}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}