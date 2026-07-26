"use client";

import Cropper, { Area } from "react-easy-crop";

interface CropPreviewProps {
  image: string;

  crop: {
    x: number;
    y: number;
  };

  setCrop: (crop: { x: number; y: number }) => void;

  zoom: number;
  setZoom: (zoom: number) => void;

  rotation: number;
  setRotation: (rotation: number) => void;

  aspect: number;

  onCropComplete: (
    croppedArea: Area,
    croppedAreaPixels: Area
  ) => void;
}

export function CropPreview({
  image,
  crop,
  setCrop,
  zoom,
  setZoom,
  rotation,
  setRotation,
  aspect,
  onCropComplete,
}: CropPreviewProps) {
  return (
    <div className="overflow-hidden rounded-3xl border bg-card">

      <div className="border-b px-6 py-4">

        <h3 className="text-xl font-bold">

          Crop Preview

        </h3>

      </div>

      <div className="relative h-[500px] w-full bg-black">

        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={aspect}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
        />

      </div>

    </div>
  );
}