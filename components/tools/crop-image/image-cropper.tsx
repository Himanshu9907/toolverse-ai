// "use client";

// import { useState } from "react";
// import { Crop } from "lucide-react";

// import { UploadZone } from "@/components/shared/upload-zone";
// import { PreviewPanel } from "@/components/shared/preview-panel";
// import { CropControls } from "./crop-controls";
// import { getCroppedImg } from "@/lib/cropImage";

// export function ImageCropper() {
//   const [image, setImage] = useState<File | null>(null);

//   const [preview, setPreview] = useState("");

//   const [croppedPreview, setCroppedPreview] = useState("");

//   const [width, setWidth] = useState(0);

//   const [height, setHeight] = useState(0);

//   const [fileSize, setFileSize] = useState("");

//   const [croppedBlob, setCroppedBlob] = useState<Blob | null>(null);

//   const [processing, setProcessing] = useState(false);

//   const handleUpload = (file: File) => {
//     setImage(file);

//     setFileSize((file.size / 1024 / 1024).toFixed(2) + " MB");

//     const url = URL.createObjectURL(file);

//     setPreview(url);

//     const img = new Image();

//     img.src = url;

//     img.onload = () => {
//       setWidth(img.width);
//       setHeight(img.height);
//     };
//   };

//   const handleCrop = async () => {
//   if (!croppedAreaPixels) return;

//   setProcessing(true);

//   try {
//     const blob = await getCroppedImg(
//       preview,
//       croppedAreaPixels
//     );

//     setCroppedBlob(blob);

//     setCroppedPreview(URL.createObjectURL(blob));
//   } finally {
//     setProcessing(false);
//   }
// };

// const downloadImage = () => {
//   if (!croppedBlob) return;

//   const link = document.createElement("a");

//   link.href = URL.createObjectURL(croppedBlob);

//   link.download = "cropped-image.png";

//   link.click();
// };

//   return (
//     <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
//       {/* Header */}

//       <div className="mb-10">
//         <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
//           <Crop className="h-4 w-4" />

//           Image Crop Tool
//         </div>

//         <h1 className="mt-5 text-4xl font-extrabold lg:text-5xl">
//           Crop Images Online
//         </h1>

//         <p className="mt-4 max-w-2xl text-muted-foreground">
//           Crop JPG, PNG, WEBP and AVIF images directly in your browser.
//         </p>
//       </div>

//       {/* Upload */}

//       <UploadZone onUpload={handleUpload} />

//       {image && (
//         <div className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_420px]">
//           <PreviewPanel
//             preview={preview}
//             resizedPreview={croppedPreview}
//             width={width}
//             height={height}
//             fileSize={fileSize}
//             image={image}
//           />

//           <CropControls />
//         </div> 
//       )}

//       {croppedPreview && (
//     <img
//         src={croppedPreview}
//         className="rounded-xl"
//     />

//     <button onClick={downloadImage}>
//         Download
//     </button>
// )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import type { Area } from "react-easy-crop";
import { Crop } from "lucide-react";
import { CropToolbar } from "./crop-toolbar";

import { UploadZone } from "@/components/shared/upload-zone";
import { CropPreview } from "./crop-preview";
import { CropControls } from "./crop-controls";

import { getCroppedImg } from "@/lib/cropImage";

export function ImageCropper() {

  const [image, setImage] = useState<File | null>(null);

  const [preview, setPreview] = useState("");

  const [croppedPreview, setCroppedPreview] = useState("");

  const [croppedBlob, setCroppedBlob] =
    useState<Blob | null>(null);

  const [processing, setProcessing] =
    useState(false);

  const [width, setWidth] = useState(0);

  const [height, setHeight] = useState(0);

  const [fileSize, setFileSize] = useState("");

  // Crop States

  const [crop, setCrop] = useState({
    x: 0,
    y: 0,
  });

  const [zoom, setZoom] = useState(1);

  const [rotation, setRotation] = useState(0);

  const [aspect, setAspect] = useState(1);

  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<Area | null>(null);

  // Upload

  const handleUpload = (file: File) => {

    setImage(file);

    setFileSize(
      (file.size / 1024 / 1024).toFixed(2) + " MB"
    );

    const url = URL.createObjectURL(file);

    setPreview(url);

    const img = new Image();

    img.src = url;

    img.onload = () => {

      setWidth(img.width);

      setHeight(img.height);

    };

  };

  // Crop Complete

  const onCropComplete = (
    croppedArea: Area,
    croppedPixels: Area
  ) => {

    setCroppedAreaPixels(croppedPixels);

  };

  // Crop Image

  const handleCrop = async () => {

    if (!preview || !croppedAreaPixels) return;

    try {

      setProcessing(true);

      // const blob = await getCroppedImg(
      //   preview,
      //   croppedAreaPixels,
      //   rotation,
      // );

      const blob = await getCroppedImg(
  preview,
  croppedAreaPixels
);

      setCroppedBlob(blob);

      setCroppedPreview(
        URL.createObjectURL(blob)
      );

    } catch (err) {

      console.error(err);

    } finally {

      setProcessing(false);

    }

  };

  // Download

  const downloadImage = () => {

    if (!croppedBlob) return;

    const url = URL.createObjectURL(croppedBlob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "cropped-image.png";

    a.click();

    URL.revokeObjectURL(url);

  };

  // Reset

  const handleReset = () => {

    setCrop({
      x: 0,
      y: 0,
    });

    setZoom(1);

    setRotation(0);

    setAspect(1);

    setCroppedPreview("");

    setCroppedBlob(null);

  };

    return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">

      {/* Header */}

      <div className="mb-10">

        <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

          <Crop className="h-4 w-4" />

          Image Crop Tool

        </div>

        <h1 className="mt-5 text-4xl font-extrabold lg:text-5xl">
          Crop Images Online
        </h1>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          Crop JPG, PNG, WEBP and AVIF images directly inside your browser.
        </p>

      </div>

      {/* Upload */}

      {/* <UploadZone onUpload={handleUpload} /> */}
      <UploadZone onFileSelect={handleUpload} />

      {image && (

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_420px]">

          <CropPreview
            image={preview}
            crop={crop}
            setCrop={setCrop}
            zoom={zoom}
            setZoom={setZoom}
            rotation={rotation}
            setRotation={setRotation}
            aspect={aspect}
            onCropComplete={onCropComplete}
          />

          <CropToolbar
  zoom={zoom}
  setZoom={setZoom}
  rotation={rotation}
  setRotation={setRotation}
  aspect={aspect}
  setAspect={setAspect}
/>

          <CropControls
            zoom={zoom}
            setZoom={setZoom}
            rotation={rotation}
            setRotation={setRotation}
            aspect={aspect}
            setAspect={setAspect}
            onCrop={handleCrop}
            onReset={handleReset}
            isCropping={processing}
            canCrop={!!image}
          />

        </div>

      )}

      {croppedPreview && (

        <section className="mt-10 rounded-3xl border bg-card p-6">

          <div className="mb-5 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold">

                Cropped Image

              </h2>

              <p className="text-sm text-muted-foreground">

                Your cropped image is ready.

              </p>

            </div>

          </div>

          <img
            src={croppedPreview}
            alt="Cropped Image"
            className="w-full rounded-2xl border"
          />

          <button
            onClick={downloadImage}
            className="mt-6 flex h-12 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 font-semibold text-white transition hover:scale-[1.02]"
          >

            Download Cropped Image

          </button>

        </section>

      )}

    </div>
  );

}