// "use client";

// import { useState } from "react";

// export interface PDFInfo {
//   file: File | null;
//   fileName: string;
//   fileSize: string;
//   totalPages: number;
//   totalImages: number;
// }

// import { readPDF } from "@/lib/pdf/extract-images";
// export function usePDFImageExtractor() {
//   const [pdfInfo, setPdfInfo] = useState<PDFInfo>({
//     file: null,
//     fileName: "",
//     fileSize: "",
//     totalPages: 0,
//     totalImages: 0,
//   });

//   const [loading, setLoading] = useState(false);

// //   async function handlePDF(file: File) {
// //     if (!file) return;

// //     if (file.type !== "application/pdf") {
// //       alert("Please upload a PDF file.");
// //       return;
// //     }

// //     setLoading(true);

// //     const size =
// //       (file.size / 1024 / 1024).toFixed(2) + " MB";

// //     setPdfInfo({
// //       file,
// //       fileName: file.name,
// //       fileSize: size,
// //       totalPages: 0,
// //       totalImages: 0,
// //     });

// //     setLoading(false);
// //   }

// async function handlePDF(file: File) {

//   if (!file) return;

//   if (file.type !== "application/pdf") {

//     alert("Please upload PDF");

//     return;

//   }

//   setLoading(true);

//   try {

//     const pdf = await readPDF(file);

//     const size =
//       (file.size / 1024 / 1024).toFixed(2) + " MB";

//     setPdfInfo({

//       file,

//       fileName: file.name,

//       fileSize: size,

//       totalPages: pdf.numPages,

//       totalImages: 0,

//     });

//   } catch (err) {

//     console.error(err);

//     alert("Invalid PDF");

//   }

//   setLoading(false);

// }

//   function clearPDF() {
//     setPdfInfo({
//       file: null,
//       fileName: "",
//       fileSize: "",
//       totalPages: 0,
//       totalImages: 0,
//     });
//   }

//   return {
//     pdfInfo,
//     loading,
//     handlePDF,
//     clearPDF,
//   };
// }

// "use client";

// import { useState } from "react";

// export interface ExtractedImage {
//   page: number;
//   image: string;
//   format: string;
//   path: string;
// }

// export function usePdfImageExtractor() {

//   const [loading, setLoading] = useState(false);

//   const [images, setImages] = useState<ExtractedImage[]>([]);

//   const [pages, setPages] = useState(0);

//   const [error, setError] = useState("");

//   async function upload(file: File) {

//     setLoading(true);
//     setError("");
//     setImages([]);

//     try {

//       const form = new FormData();

//       form.append("file", file);

//       const res = await fetch(

//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/pdf/extract-images`,

//         {
//           method: "POST",
//           body: form,
//         }

//       );

//       const data = await res.json();

//       setImages(data.files);

//       setPages(data.pages);

//     } catch (err) {

//       console.log(err);

//       setError("Extraction Failed");

//     } finally {

//       setLoading(false);

//     }

//   }

//   return {

//     loading,

//     images,

//     pages,

//     error,

//     upload,

//   };

// }

// "use client";

// import { useState } from "react";

// export interface ExtractedImage {
//   page: number;
//   image: string;
//   format: string;
//   path: string;
// }

// export function usePdfImageExtractor() {
//   const [loading, setLoading] = useState(false);

//   const [images, setImages] = useState<ExtractedImage[]>([]);

//   const [pages, setPages] = useState(0);

//   const [error, setError] = useState("");

//   const [pdfInfo, setPdfInfo] = useState({
//     file: null as File | null,
//     fileName: "",
//     fileSize: "",
//   });

//   function handlePDF(file: File) {
//     setPdfInfo({
//       file,
//       fileName: file.name,
//       fileSize: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
//     });

//     setImages([]);
//     setPages(0);
//     setError("");
//   }

//   function clearPDF() {

//   setPdfInfo({
//     file: null,
//     fileName: "",
//     fileSize: "",
//   });

//   setImages([]);

//   setPages(0);

//   setError("");

// }

//   async function extractImages() {
//     if (!pdfInfo.file) return;

//     setLoading(true);
//     setError("");

//     try {
//       const form = new FormData();

//       form.append("file", pdfInfo.file);

//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/pdf/extract-images`,
//         {
//           method: "POST",
//           body: form,
//         }
//       );

//       if (!res.ok) {
//         throw new Error("Extraction failed");
//       }

//       const data = await res.json();

//       setImages(data.files || []);

//       setPages(data.pages || 0);
//     } catch (err) {
//       console.error(err);
//       setError("Extraction Failed");
//     } finally {
//       setLoading(false);
//     }
//   }

//   // return {
//   //   loading,
//   //   images,
//   //   pages,
//   //   error,

//   //   pdfInfo,

//   //   handlePDF,

//   //   extractImages,
//   // };

//   return {

//   loading,

//   images,

//   pages,

//   error,

//   pdfInfo,

//   handlePDF,

//   extractImages,

//   clearPDF,

// };
// }

"use client";

import { useState } from "react";

export interface ExtractedImage {
  page: number;
  image: string;
  format: string;
  path: string;
}

interface PdfInfo {
  file: File | null;
  fileName: string;
  fileSize: string;
  totalPages: number;
  totalImages: number;
}

export function usePdfImageExtractor() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [images, setImages] = useState<ExtractedImage[]>([]);

  const [pdfInfo, setPdfInfo] = useState<PdfInfo>({
    file: null,
    fileName: "",
    fileSize: "",
    totalPages: 0,
    totalImages: 0,
  });

  function handlePDF(file: File) {
    setPdfInfo({
      file,
      fileName: file.name,
      fileSize: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      totalPages: 0,
      totalImages: 0,
    });

    setImages([]);
    setError("");
  }

  async function extractImages() {
    if (!pdfInfo.file) return;

    setLoading(true);
    setError("");

    try {
      const form = new FormData();

      form.append("file", pdfInfo.file);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/pdf/extract-images`,
        {
          method: "POST",
          body: form,
        }
      );

      if (!res.ok) {
        throw new Error("Extraction failed");
      }

      const data = await res.json();

      setImages(data.files ?? []);

      setPdfInfo((prev) => ({
        ...prev,
        totalPages: data.pages ?? 0,
        totalImages: data.images ?? 0,
      }));
    } catch (err) {
      console.error(err);
      setError("Failed to extract images.");
    } finally {
      setLoading(false);
    }
  }

  function clearPDF() {
    setPdfInfo({
      file: null,
      fileName: "",
      fileSize: "",
      totalPages: 0,
      totalImages: 0,
    });

    setImages([]);
    setError("");
    setLoading(false);
  }

  async function downloadZip() {

  window.open(

    `${process.env.NEXT_PUBLIC_BACKEND_URL}/pdf/download-zip`,

    "_blank"

  );

}

  return {
    loading,
    error,

    pdfInfo,

    images,

    handlePDF,

    extractImages,

    clearPDF,
    downloadZip,
  };
}