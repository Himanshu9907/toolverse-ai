// "use client";

// import { useState } from "react";

// export function useImageConverter() {
//   const [file, setFile] = useState<File | null>(null);
//   const [preview, setPreview] = useState<string>("");

//   function handleFile(file: File) {
//     setFile(file);

//     const url = URL.createObjectURL(file);

//     setPreview(url);
//   }

//   function reset() {
//     if (preview) URL.revokeObjectURL(preview);

//     setFile(null);
//     setPreview("");
//   }

//   return {
//     file,
//     preview,
//     handleFile,
//     reset,
//   };
// }

"use client";

import { useState } from "react";
import { convertImage } from "@/lib/image/converter";

export function useImageConverter() {

  const [file, setFile] = useState<File | null>(null);

  const [preview, setPreview] = useState("");

  const [format, setFormat] = useState("png");

  const [quality, setQuality] = useState(90);

  const [converted, setConverted] = useState<Blob | null>(null);

  async function convert() {

    if (!file) return;

    const blob = await convertImage(
      file,
      format,
      quality
    );

    setConverted(blob);

  }

  function handleFile(file: File) {

    setFile(file);

    setPreview(URL.createObjectURL(file));

    setConverted(null);

  }

  function reset() {

    setFile(null);

    setPreview("");

    setConverted(null);

  }

  return {

    file,

    preview,

    format,

    setFormat,

    quality,

    setQuality,

    converted,

    convert,

    handleFile,

    reset,

  };

}