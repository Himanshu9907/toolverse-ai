// "use client";

// import { useRef, useState } from "react";

// import {
//   UploadCloud,
//   ImageIcon,
//   X,
// } from "lucide-react";

// type UploadZoneProps = {
//   onFileSelect: (file: File) => void;
// };

// export function UploadZone({
//   onFileSelect,
// }: UploadZoneProps) {
//   const inputRef = useRef<HTMLInputElement>(null);

//   const [dragging, setDragging] = useState(false);

//   const [preview, setPreview] = useState<string | null>(null);

//   const [fileName, setFileName] = useState("");

//   const handleFile = (file: File) => {
//     if (!file.type.startsWith("image/")) return;

//     setFileName(file.name);

//     const url = URL.createObjectURL(file);

//     setPreview(url);

//     onFileSelect(file);
//   };

//   const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();

//     setDragging(false);

//     if (e.dataTransfer.files.length > 0) {
//       handleFile(e.dataTransfer.files[0]);
//     }
//   };

//   const removeImage = () => {
//     setPreview(null);

//     setFileName("");

//     if (inputRef.current) {
//       inputRef.current.value = "";
//     }
//   };

//   return (
//     <div className="w-full">

//       {!preview ? (

//         <div
//           onDragOver={(e) => {
//             e.preventDefault();
//             setDragging(true);
//           }}
//           onDragLeave={() => setDragging(false)}
//           onDrop={onDrop}
//           onClick={() => inputRef.current?.click()}
//           className={`group cursor-pointer rounded-3xl border-2 border-dashed p-10 text-center transition-all duration-300

//           ${
//             dragging
//               ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20"
//               : "border-slate-300 hover:border-blue-400 dark:border-slate-700"
//           }`}
//         >

//           <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 text-white shadow-xl transition-all duration-300 group-hover:scale-110">

//             <UploadCloud className="h-10 w-10" />

//           </div>

//           <h3 className="mt-8 text-2xl font-bold">

//             Drag & Drop Image

//           </h3>

//           <p className="mt-3 text-muted-foreground">

//             JPG, PNG, WEBP supported

//           </p>

//           <button
//             type="button"
//             className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.03]"
//           >

//             Choose Image

//           </button>

//           <input
//             ref={inputRef}
//             hidden
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               if (e.target.files?.[0]) {
//                 handleFile(e.target.files[0]);
//               }
//             }}
//           />

//         </div>

//       ) : (