// // "use client";

// // import { useRef } from "react";
// // import { UploadCloud, ImageIcon } from "lucide-react";

// // export function UploadZone() {
// //   const inputRef = useRef<HTMLInputElement>(null);

// //   return (
// //     <div
// //       onClick={() => inputRef.current?.click()}
// //       className="group relative cursor-pointer overflow-hidden rounded-3xl border-2 border-dashed border-border bg-card transition-all duration-300 hover:border-primary hover:bg-primary/5"
// //     >
// //       <input
// //         ref={inputRef}
// //         type="file"
// //         accept="image/png,image/jpeg,image/webp,image/avif"
// //         className="hidden"
// //       />

// //       {/* Glow */}
// //       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

// //       <div className="relative flex flex-col items-center justify-center px-6 py-16 text-center">

// //         <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">

// //           <UploadCloud className="h-10 w-10 text-primary" />

// //         </div>

// //         <h3 className="mt-6 text-2xl font-bold">

// //           Upload Your Image

// //         </h3>

// //         <p className="mt-3 max-w-lg text-muted-foreground">

// //           Drag & drop your image here or click to browse.
// //           Supports JPG, PNG, WEBP and AVIF.

// //         </p>

// //         <button
// //           type="button"
// //           className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
// //         >
// //           Choose Image
// //         </button>

// //         <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

// //           <div className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm">

// //             <ImageIcon className="h-4 w-4 text-blue-500" />

// //             JPG

// //           </div>

// //           <div className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm">

// //             <ImageIcon className="h-4 w-4 text-emerald-500" />

// //             PNG

// //           </div>

// //           <div className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm">

// //             <ImageIcon className="h-4 w-4 text-violet-500" />

// //             WEBP

// //           </div>

// //           <div className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm">

// //             <ImageIcon className="h-4 w-4 text-orange-500" />

// //             AVIF

// //           </div>

// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { useRef } from "react";
// import { UploadCloud, ImageIcon } from "lucide-react";

// interface UploadZoneProps {
//   onUpload: (file: File) => void;
// }

// export function UploadZone({ onUpload }: UploadZoneProps) {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleFile = (file: File | null) => {
//     if (!file) return;

//     if (!file.type.startsWith("image/")) return;

//     onUpload(file);
//   };

//   return (
//     <div
//       onClick={() => inputRef.current?.click()}
//       onDragOver={(e) => e.preventDefault()}
//       onDrop={(e) => {
//         e.preventDefault();

//         const file = e.dataTransfer.files[0];

//         handleFile(file);
//       }}
//       className="group relative cursor-pointer overflow-hidden rounded-3xl border-2 border-dashed border-border bg-card transition-all duration-300 hover:border-primary hover:bg-primary/5"
//     >
//       <input
//         ref={inputRef}
//         type="file"
//         accept="image/*"
//         hidden
//         onChange={(e) => {
//           const file = e.target.files?.[0];

//           handleFile(file || null);
//         }}
//       />

//       {/* Background Glow */}

//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//       <div className="relative flex flex-col items-center justify-center px-6 py-16 text-center">

//         <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">

//           <UploadCloud className="h-10 w-10 text-primary" />

//         </div>

//         <h3 className="mt-6 text-2xl font-bold">
//           Upload Your Image
//         </h3>

//         <p className="mt-3 max-w-lg text-muted-foreground">
//           Drag & Drop your image here or click to browse.
//         </p>

//         <button
//           type="button"
//           className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
//         >
//           Choose Image
//         </button>

//         <div className="mt-8 flex flex-wrap justify-center gap-3">

//           {["JPG", "PNG", "WEBP", "AVIF"].map((type) => (
//             <div
//               key={type}
//               className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm"
//             >
//               <ImageIcon className="h-4 w-4 text-primary" />

//               {type}
//             </div>
//           ))}

//         </div>

//       </div>

//     </div>
//   );
// }

"use client";

import { useRef } from "react";
import { UploadCloud, ImageIcon } from "lucide-react";

interface UploadZoneProps {
  onUpload: (file: File) => void;
}

export function UploadZone({ onUpload }: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | null) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) return;

    onUpload(file);
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];

        handleFile(file);
      }}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border-2 border-dashed border-border bg-card transition-all duration-300 hover:border-primary hover:bg-primary/5"
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];

          handleFile(file || null);
        }}
      />

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col items-center justify-center px-6 py-16 text-center">

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">

          <UploadCloud className="h-10 w-10 text-primary" />

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Upload Your Image
        </h3>

        <p className="mt-3 max-w-lg text-muted-foreground">
          Drag & Drop your image here or click to browse.
        </p>

        <button
          type="button"
          className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
        >
          Choose Image
        </button>

        <div className="mt-8 flex flex-wrap justify-center gap-3">

          {["JPG", "PNG", "WEBP", "AVIF"].map((type) => (
            <div
              key={type}
              className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm"
            >
              <ImageIcon className="h-4 w-4 text-primary" />

              {type}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}