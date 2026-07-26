"use client";

import { Crop, RotateCcw } from "lucide-react";


  interface CropControlsProps {
  zoom: number;
  setZoom: (value: number) => void;

  rotation: number;
  setRotation: (value: number) => void;

  aspect: number;
  setAspect: (value: number) => void;

  onCrop: () => void;
  onReset: () => void;

  isCropping: boolean;
  canCrop: boolean;
}


export function CropControls({
  zoom,
  setZoom,
  rotation,
  setRotation,
  aspect,
  setAspect,
  onCrop,
  onReset,
  isCropping,
  canCrop,
}: CropControlsProps) {
  return (
    <div className="rounded-3xl border bg-card p-6">

      <h3 className="text-xl font-bold">
        Crop Controls
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Select the desired area and crop your image.
      </p>

      <div className="mt-8 space-y-4">

        <button
          onClick={onCrop}
          disabled={!canCrop || isCropping}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Crop className="h-5 w-5" />

          {isCropping ? "Cropping..." : "Crop Image"}
        </button>

        <button
          onClick={onReset}
          disabled={!canCrop}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border font-semibold transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RotateCcw className="h-5 w-5" />

          Reset
        </button>

      </div>

    </div>
  );
}