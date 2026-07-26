"use client";

import { useState } from "react";

import {
  SlidersHorizontal,
  RotateCcw,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

type CompressionControlsProps = {
  loading?: boolean;
  onCompress: (quality: number) => void;
};

export function CompressionControls({
  loading = false,
  onCompress,
}: CompressionControlsProps) {

  const [quality, setQuality] = useState(80);

  const [maxWidth, setMaxWidth] = useState(1920);

  const [maxHeight, setMaxHeight] = useState(1080);

  const reset = () => {

    setQuality(80);

    setMaxWidth(1920);

    setMaxHeight(1080);

  };

  return (

    <section className="mt-10 rounded-3xl border bg-card p-6 shadow-sm">

      <div className="mb-8 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 text-white">

          <SlidersHorizontal className="h-6 w-6" />

        </div>

        <div>

          <h2 className="text-2xl font-bold">

            Compression Settings

          </h2>

          <p className="text-muted-foreground">

            Adjust quality and dimensions before compressing.

          </p>

        </div>

      </div>

      <div className="space-y-8">

        {/* Quality */}

        <div>

          <div className="mb-3 flex items-center justify-between">

            <span className="font-medium">

              Image Quality

            </span>

            <span className="rounded-xl bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">

              {quality}%

            </span>

          </div>

          <Slider
            value={[quality]}
            max={100}
            min={10}
            step={1}
            onValueChange={(value) => setQuality(value[0])}
          />

        </div>
                {/* Dimensions */}

        <div className="grid gap-6 md:grid-cols-2">

          {/* Max Width */}

          <div>

            <label className="mb-2 block font-medium">

              Max Width (px)

            </label>

            <input
              type="number"
              value={maxWidth}
              onChange={(e) => setMaxWidth(Number(e.target.value))}
              className="h-12 w-full rounded-2xl border bg-background px-4 outline-none transition focus:border-primary"
            />

          </div>

          {/* Max Height */}

          <div>

            <label className="mb-2 block font-medium">

              Max Height (px)

            </label>

            <input
              type="number"
              value={maxHeight}
              onChange={(e) => setMaxHeight(Number(e.target.value))}
              className="h-12 w-full rounded-2xl border bg-background px-4 outline-none transition focus:border-primary"
            />

          </div>

        </div>

        {/* Output Format */}

        <div>

          <label className="mb-3 block font-medium">

            Output Format

          </label>

          <div className="grid grid-cols-3 gap-4">

            <button
              type="button"
              className="rounded-2xl border bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >

              JPG

            </button>

            <button
              type="button"
              className="rounded-2xl border py-3 font-semibold transition hover:bg-muted"
            >

              PNG

            </button>

            <button
              type="button"
              className="rounded-2xl border py-3 font-semibold transition hover:bg-muted"
            >

              WEBP

            </button>

          </div>

        </div>

        {/* Info */}

        <div className="rounded-2xl border bg-muted/40 p-5">

          <h3 className="font-semibold">

            Recommended Settings

          </h3>

          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">

            <li>• 80% Quality → Best balance between size & quality</li>

            <li>• 1920px Width → Perfect for websites & blogs</li>

            <li>• WEBP → Smallest file size</li>

          </ul>

        </div>

                {/* Action Buttons */}

        <div className="flex flex-col gap-4 pt-2 sm:flex-row">

          <Button
            onClick={() => onCompress(quality)}
            disabled={loading}
            className="h-12 flex-1 rounded-2xl text-base font-semibold"
          >

            <Zap className="mr-2 h-5 w-5" />

            {loading ? "Compressing..." : "Compress Image"}

          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={reset}
            disabled={loading}
            className="h-12 rounded-2xl sm:w-44"
          >

            <RotateCcw className="mr-2 h-5 w-5" />

            Reset

          </Button>

        </div>

      </div>

    </section>

  );

}