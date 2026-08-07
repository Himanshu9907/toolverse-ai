// "use client";

// import {
//   FileText,
//   ImageIcon,
//   Files,
//   HardDrive,
// } from "lucide-react";

// export default function PreviewPanel() {
//   return (
//     <div className="rounded-2xl border bg-card p-6 shadow-sm">

//       <div className="mb-6">

//         <h2 className="text-xl font-semibold">
//           PDF Details
//         </h2>

//         <p className="text-sm text-muted-foreground mt-1">
//           Information about the uploaded PDF.
//         </p>

//       </div>

//       <div className="space-y-4">

//         <div className="flex items-center gap-4 rounded-xl border p-4">

//           <FileText className="h-10 w-10 text-primary" />

//           <div>

//             <p className="font-medium">
//               File Name
//             </p>

//             <p className="text-sm text-muted-foreground">
//               No PDF Uploaded
//             </p>

//           </div>

//         </div>

//         <div className="grid grid-cols-2 gap-4">

//           <div className="rounded-xl border p-5">

//             <div className="flex items-center gap-3 mb-2">

//               <Files className="h-6 w-6 text-primary" />

//               <span className="font-medium">

//                 Pages

//               </span>

//             </div>

//             <p className="text-3xl font-bold">

//               --

//             </p>

//           </div>

//           <div className="rounded-xl border p-5">

//             <div className="flex items-center gap-3 mb-2">

//               <ImageIcon className="h-6 w-6 text-primary" />

//               <span className="font-medium">

//                 Images

//               </span>

//             </div>

//             <p className="text-3xl font-bold">

//               --

//             </p>

//           </div>

//         </div>

//         <div className="rounded-xl border p-5">

//           <div className="flex items-center gap-3 mb-2">

//             <HardDrive className="h-6 w-6 text-primary" />

//             <span className="font-medium">

//               File Size

//             </span>

//           </div>

//           <p className="text-2xl font-bold">

//             --

//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

// "use client";

// import {
//   FileText,
//   Files,
//   ImageIcon,
//   HardDrive,
// } from "lucide-react";

// interface PreviewPanelProps {
//   extractor: any;
// }

// export default function PreviewPanel({
//   extractor,
// }: PreviewPanelProps) {
//   return (
//     <div className="rounded-2xl border bg-card p-6 shadow-sm">

//       <div className="mb-6">

//         <h2 className="text-xl font-semibold">

//           PDF Details

//         </h2>

//         <p className="mt-1 text-sm text-muted-foreground">

//           Information about your uploaded PDF.

//         </p>

//       </div>

//       <div className="space-y-4">

//         {/* File */}

//         <div className="rounded-xl border p-4">

//           <div className="flex items-center gap-3">

//             <FileText className="h-10 w-10 text-primary" />

//             <div>

//               <p className="font-medium">

//                 {extractor.pdfInfo.fileName || "No PDF Uploaded"}

//               </p>

//               <p className="text-sm text-muted-foreground">

//                 {extractor.pdfInfo.fileSize ||
//                   "Upload a PDF to continue."}

//               </p>

//             </div>

//           </div>

//         </div>

//         {/* Stats */}

//         <div className="grid grid-cols-2 gap-4">

//           <div className="rounded-xl border p-5">

//             <div className="mb-2 flex items-center gap-2">

//               <Files className="h-5 w-5 text-primary" />

//               <span className="text-sm font-medium">

//                 Total Pages

//               </span>

//             </div>

//             <p className="text-3xl font-bold">

//               {extractor.pdfInfo.totalPages || "--"}

//             </p>

//           </div>

//           <div className="rounded-xl border p-5">

//             <div className="mb-2 flex items-center gap-2">

//               <ImageIcon className="h-5 w-5 text-primary" />

//               <span className="text-sm font-medium">

//                 Images

//               </span>

//             </div>

//             <p className="text-3xl font-bold">

//               {extractor.pdfInfo.totalImages || "--"}

//             </p>

//           </div>

//         </div>

//         {/* Size */}

//         <div className="rounded-xl border p-5">

//           <div className="mb-2 flex items-center gap-2">

//             <HardDrive className="h-5 w-5 text-primary" />

//             <span className="text-sm font-medium">

//               File Size

//             </span>

//           </div>

//           <p className="text-2xl font-bold">

//             {extractor.pdfInfo.fileSize || "--"}

//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

"use client";

import {
  FileText,
  Files,
  ImageIcon,
  HardDrive,
  Loader2,
} from "lucide-react";

interface PreviewPanelProps {
  extractor: any;
}

export default function PreviewPanel({
  extractor,
}: PreviewPanelProps) {

  return (

    <div className="rounded-2xl border bg-card p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-semibold">

          PDF Details

        </h2>

        <p className="mt-1 text-sm text-muted-foreground">

          Information about your uploaded PDF.

        </p>

      </div>

      {/* Loading */}

      {

        extractor.loading && (

          <div className="mb-6 flex items-center gap-3 rounded-xl border p-4">

            <Loader2 className="h-5 w-5 animate-spin text-primary" />

            <p className="text-sm font-medium">

              Extracting images...

            </p>

          </div>

        )

      }

      {/* File */}

      <div className="rounded-xl border p-4">

        <div className="flex items-center gap-3">

          <FileText className="h-10 w-10 text-primary" />

          <div className="flex-1">

            <p className="font-medium">

              {

                extractor.pdfInfo.fileName ||

                "No PDF Uploaded"

              }

            </p>

            <p className="text-sm text-muted-foreground">

              {

                extractor.pdfInfo.fileSize ||

                "Upload a PDF to continue."

              }

            </p>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="rounded-xl border p-5">

          <div className="mb-2 flex items-center gap-2">

            <Files className="h-5 w-5 text-primary" />

            <span className="text-sm font-medium">

              Total Pages

            </span>

          </div>

          <p className="text-3xl font-bold">

            {

              extractor.pdfInfo.totalPages ||

              "--"

            }

          </p>

        </div>

        <div className="rounded-xl border p-5">

          <div className="mb-2 flex items-center gap-2">

            <ImageIcon className="h-5 w-5 text-primary" />

            <span className="text-sm font-medium">

              Images

            </span>

          </div>

          <p className="text-3xl font-bold">

            {

              extractor.pdfInfo.totalImages ||

              "--"

            }

          </p>

        </div>

      </div>

      {/* File Size */}

      <div className="mt-6 rounded-xl border p-5">

        <div className="mb-2 flex items-center gap-2">

          <HardDrive className="h-5 w-5 text-primary" />

          <span className="text-sm font-medium">

            File Size

          </span>

        </div>

        <p className="text-2xl font-bold">

          {

            extractor.pdfInfo.fileSize ||

            "--"

          }

        </p>

      </div>

      {/* Error */}

      {

        extractor.error && (

          <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-4">

            <p className="text-sm text-red-500">

              {extractor.error}

            </p>

          </div>

        )

      }

    </div>

  );

}