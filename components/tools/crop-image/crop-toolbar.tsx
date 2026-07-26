"use client";

import { Crop, RotateCw, ZoomIn, Ratio } from "lucide-react";

interface CropToolbarProps {
  zoom: number;
  setZoom: (value: number) => void;

  rotation: number;
  setRotation: (value: number) => void;

  aspect: number;
  setAspect: (value: number) => void;
}

export function CropToolbar({
  zoom,
  setZoom,
  rotation,
  setRotation,
  aspect,
  setAspect,
}: CropToolbarProps) {
  return (
    <div className="rounded-3xl border bg-card p-6">

      <h3 className="text-xl font-bold">
        Crop Settings
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Adjust zoom, rotation and aspect ratio.
      </p>

      <div className="mt-8 space-y-6">

        {/* Zoom */}

        <div>

          <div className="mb-2 flex items-center justify-between">

            <span className="flex items-center gap-2 text-sm font-medium">
              <ZoomIn className="h-4 w-4" />
              Zoom
            </span>

            <span>{zoom.toFixed(1)}x</span>

          </div>

          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-full"
          />

        </div>

        {/* Rotation */}

        <div>

          <div className="mb-2 flex items-center justify-between">

            <span className="flex items-center gap-2 text-sm font-medium">
              <RotateCw className="h-4 w-4" />
              Rotation
            </span>

            <span>{rotation}°</span>

          </div>

          <input
            type="range"
            min={0}
            max={360}
            step={1}
            value={rotation}
            onChange={(e) => setRotation(Number(e.target.value))}
            className="w-full"
          />

        </div>

        {/* Aspect Ratio */}

        <div>

          <div className="mb-3 flex items-center gap-2">

            <Ratio className="h-4 w-4" />

            <span className="text-sm font-medium">
              Aspect Ratio
            </span>

          </div>

          <div className="grid grid-cols-2 gap-2">

            <button
              onClick={() => setAspect(1)}
              className={`rounded-xl border py-2 ${
                aspect === 1
                  ? "bg-primary text-white"
                  : "hover:bg-muted"
              }`}
            >
              1 : 1
            </button>

            <button
              onClick={() => setAspect(16 / 9)}
              className={`rounded-xl border py-2 ${
                aspect === 16 / 9
                  ? "bg-primary text-white"
                  : "hover:bg-muted"
              }`}
            >
              16 : 9
            </button>

            <button
              onClick={() => setAspect(4 / 3)}
              className={`rounded-xl border py-2 ${
                aspect === 4 / 3
                  ? "bg-primary text-white"
                  : "hover:bg-muted"
              }`}
            >
              4 : 3
            </button>

            <button
              onClick={() => setAspect(3 / 2)}
              className={`rounded-xl border py-2 ${
                aspect === 3 / 2
                  ? "bg-primary text-white"
                  : "hover:bg-muted"
              }`}
            >
              3 : 2
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}