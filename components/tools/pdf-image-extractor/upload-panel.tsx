// "use client";

// import { UploadCloud, FileText } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// export default function UploadPanel() {
//   return (
//     <div className="rounded-2xl border bg-card p-6 shadow-sm">

//       <div className="mb-6">

//         <h2 className="text-xl font-semibold">
//           Upload PDF
//         </h2>

//         <p className="text-sm text-muted-foreground mt-1">
//           Select a PDF file to extract all embedded images.
//         </p>

//       </div>

//       <label
//         htmlFor="pdf-upload"
//         className="
//           flex
//           h-72
//           cursor-pointer
//           flex-col
//           items-center
//           justify-center
//           rounded-xl
//           border-2
//           border-dashed
//           border-primary/30
//           transition-all
//           hover:border-primary
//           hover:bg-primary/5
//         "
//       >

//         <UploadCloud
//           className="
//             h-16
//             w-16
//             text-primary
//             mb-4
//           "
//         />

//         <span className="text-lg font-semibold">
//           Drag & Drop PDF
//         </span>

//         <span className="text-sm text-muted-foreground mt-2">
//           or click to browse
//         </span>

//         <Input
//           id="pdf-upload"
//           type="file"
//           accept=".pdf"
//           className="hidden"
//         />

//       </label>

//       <div className="mt-6 rounded-xl border p-4">

//         <div className="flex items-center gap-3">

//           <FileText className="h-10 w-10 text-primary" />

//           <div className="flex-1">

//             <p className="font-medium">
//               No PDF Selected
//             </p>

//             <p className="text-sm text-muted-foreground">
//               Upload a PDF to continue.
//             </p>

//           </div>

//         </div>

//       </div>

//       <Button
//         className="mt-6 w-full"
//         disabled
//       >
//         Extract Images
//       </Button>

//     </div>
//   );
// }

// "use client";

// import { UploadCloud, FileText } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// interface UploadPanelProps {
//   extractor: any;
// }

// export default function UploadPanel({
//   extractor,
// }: UploadPanelProps) {

//   function handleDrop(
//     e: React.DragEvent<HTMLDivElement>
//   ) {

//     e.preventDefault();

//     const file = e.dataTransfer.files?.[0];

//     if (!file) return;

//     extractor.handlePDF(file);
//   }

//   function handleDragOver(
//     e: React.DragEvent<HTMLDivElement>
//   ) {

//     e.preventDefault();

//   }

//   function handleChange(
//     e: React.ChangeEvent<HTMLInputElement>
//   ) {

//     const file = e.target.files?.[0];

//     if (!file) return;

//     extractor.handlePDF(file);

//   }

//   return (

//     <div className="rounded-2xl border bg-card p-6 shadow-sm">

//       <div className="mb-6">

//         <h2 className="text-xl font-semibold">

//           Upload PDF

//         </h2>

//         <p className="mt-1 text-sm text-muted-foreground">

//           Upload your PDF and extract all embedded images.

//         </p>

//       </div>

//       <label htmlFor="pdf-upload">

//         <div

//           onDrop={handleDrop}

//           onDragOver={handleDragOver}

//           className="
//             flex
//             h-72
//             cursor-pointer
//             flex-col
//             items-center
//             justify-center
//             rounded-xl
//             border-2
//             border-dashed
//             border-primary/30
//             transition-all
//             hover:border-primary
//             hover:bg-primary/5
//           "

//         >

//           <UploadCloud

//             className="mb-4 h-16 w-16 text-primary"

//           />

//           <p className="text-lg font-semibold">

//             Drag & Drop PDF

//           </p>

//           <p className="mt-2 text-sm text-muted-foreground">

//             or click to browse

//           </p>

//           <Input

//             id="pdf-upload"

//             type="file"

//             accept=".pdf"

//             className="hidden"

//             onChange={handleChange}

//           />

//         </div>

//       </label>

//       <div className="mt-6 rounded-xl border p-4">

//         <div className="flex items-center gap-3">

//           <FileText className="h-10 w-10 text-primary" />

//           <div className="flex-1">

//             <p className="font-medium">

//               {

//                 extractor.pdfInfo.fileName ||

//                 "No PDF Selected"

//               }

//             </p>

//             <p className="text-sm text-muted-foreground">

//               {

//                 extractor.pdfInfo.fileSize ||

//                 "Upload a PDF to continue."

//               }

//             </p>

//           </div>

//         </div>

//       </div>

//       {/* <Button

//         className="mt-6 w-full"

//         disabled={!extractor.pdfInfo.file}

//       >

//         Extract Images

//       </Button> */}

//       <Button
//   className="mt-6 w-full"
//   disabled={
//     !extractor.pdfInfo.file || extractor.loading
//   }
//   onClick={extractor.extractImages}
// >
//   {extractor.loading
//     ? "Extracting..."
//     : "Extract Images"}
// </Button>

//     </div>

//   );

// }

"use client";

import { UploadCloud, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UploadPanelProps {
  extractor: any;
}

export default function UploadPanel({
  extractor,
}: UploadPanelProps) {

  function handleDrop(
    e: React.DragEvent<HTMLDivElement>
  ) {

    e.preventDefault();

    const file = e.dataTransfer.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      return;
    }

    extractor.handlePDF(file);

  }

  function handleDragOver(
    e: React.DragEvent<HTMLDivElement>
  ) {

    e.preventDefault();

  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      return;
    }

    extractor.handlePDF(file);

  }

  return (

    <div className="rounded-2xl border bg-card p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-semibold">

          Upload PDF

        </h2>

        <p className="mt-1 text-sm text-muted-foreground">

          Upload your PDF and extract every embedded image.

        </p>

      </div>

      <label htmlFor="pdf-upload">

        <div

          onDrop={handleDrop}

          onDragOver={handleDragOver}

          className="
          flex
          h-72
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-xl
          border-2
          border-dashed
          border-primary/30
          transition-all
          hover:border-primary
          hover:bg-primary/5
          "

        >

          <UploadCloud
            className="mb-4 h-16 w-16 text-primary"
          />

          <p className="text-lg font-semibold">

            Drag & Drop PDF

          </p>

          <p className="mt-2 text-sm text-muted-foreground">

            or click to browse

          </p>

          <Input

            id="pdf-upload"

            type="file"

            accept=".pdf"

            className="hidden"

            onChange={handleChange}

          />

        </div>

      </label>

      <div className="mt-6 rounded-xl border p-4">

        <div className="flex items-center gap-3">

          <FileText
            className="h-10 w-10 text-primary"
          />

          <div className="flex-1">

            <p className="font-medium">

              {

                extractor.pdfInfo.fileName ||

                "No PDF Selected"

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

      <Button

        className="mt-6 w-full"

        disabled={
          !extractor.pdfInfo.file ||
          extractor.loading
        }

        onClick={extractor.extractImages}

      >

        {

          extractor.loading

            ? "Extracting Images..."

            : "Extract Images"

        }

      </Button>

      {
  extractor.loading && (

    <div className="mt-4">

      <div className="h-2 overflow-hidden rounded-full bg-muted">

        <div

          className="h-full w-full animate-pulse bg-primary"

        />

      </div>

    </div>

  )
}

      {

        extractor.error && (

          <p className="mt-4 text-sm text-red-500">

            {extractor.error}

          </p>

        )

      }

    </div>

  );

}