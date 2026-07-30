"use client";

import { useState } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
}

export function BeforeAfter({
  before,
  after,
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);

  if (!before || !after) return null;

  return (
    <div className="overflow-hidden rounded-3xl border bg-card">

      <div className="border-b px-6 py-4">

        <h3 className="text-lg font-bold">
          Before / After
        </h3>

        <p className="text-sm text-muted-foreground">
          Drag the slider to compare
        </p>

      </div>

      <div className="relative aspect-[16/10] select-none overflow-hidden">

        {/* After */}

        <img
          src={after}
          alt="After"
          className="absolute inset-0 h-full w-full object-contain"
        />

        {/* Before */}

        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            width: `${position}%`,
          }}
        >
          <img
            src={before}
            alt="Before"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Divider */}

        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-lg"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%)",
          }}
        >

          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-xl">

            ⇆

          </div>

        </div>

        {/* Slider */}

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) =>
            setPosition(Number(e.target.value))
          }
          className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
        />

        {/* Labels */}

        <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
          Before
        </div>

        <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
          After
        </div>

      </div>

    </div>
  );
}