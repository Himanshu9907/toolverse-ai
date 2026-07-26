"use client";

import {
  ImageIcon,
  Maximize2,
  Minimize2,
} from "lucide-react";

type ImagePreviewProps = {
  originalImage: string | null;
  compressedImage: string | null;
  originalSize?: string;
  compressedSize?: string;
};

export function ImagePreview({
  originalImage,
  compressedImage,
  originalSize = "--",
  compressedSize = "--",
}: ImagePreviewProps) {
  if (!originalImage) return null;

  return (
    <section className="mt-10">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">

            Image Preview

          </h2>

          <p className="mt-2 text-muted-foreground">

            Compare your original image with the compressed version.

          </p>

        </div>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Original */}

        <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">

          <div className="flex items-center justify-between border-b px-6 py-4">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">

                <ImageIcon className="h-5 w-5" />

              </div>

              <div>

                <h3 className="font-semibold">

                  Original Image

                </h3>

                <p className="text-sm text-muted-foreground">

                  {originalSize}

                </p>

              </div>

            </div>

            <button className="rounded-xl border p-2 transition hover:bg-muted">

              <Maximize2 className="h-4 w-4" />

            </button>

          </div>

          <div className="flex h-[350px] items-center justify-center bg-muted/30 p-5">

            <img
              src={originalImage}
              alt="Original"
              className="max-h-full rounded-2xl object-contain"
            />

          </div>

        </div>

                {/* Compressed */}

        <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">

          <div className="flex items-center justify-between border-b px-6 py-4">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 text-white">

                <ImageIcon className="h-5 w-5" />

              </div>

              <div>

                <h3 className="font-semibold">

                  Compressed Image

                </h3>

                <p className="text-sm text-muted-foreground">

                  {compressedSize}

                </p>

              </div>

            </div>

            <button className="rounded-xl border p-2 transition hover:bg-muted">

              <Minimize2 className="h-4 w-4" />

            </button>

          </div>

          <div className="flex h-[350px] items-center justify-center bg-muted/30 p-5">

            {compressedImage ? (

              <img
                src={compressedImage}
                alt="Compressed"
                className="max-h-full rounded-2xl object-contain"
              />

            ) : (

              <div className="flex flex-col items-center justify-center text-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">

                  <ImageIcon className="h-10 w-10 text-muted-foreground" />

                </div>

                <h3 className="mt-6 text-lg font-semibold">

                  Waiting for Compression

                </h3>

                <p className="mt-2 max-w-xs text-sm text-muted-foreground">

                  Your compressed image will appear here after processing.

                </p>

              </div>

            )}

          </div>

        </div>

      </div>

      {/* Bottom Stats */}

      <div className="mt-8 grid gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border bg-card p-5">

          <p className="text-sm text-muted-foreground">

            Original Size

          </p>

          <h3 className="mt-2 text-2xl font-bold">

            {originalSize}

          </h3>

        </div>

        <div className="rounded-2xl border bg-card p-5">

          <p className="text-sm text-muted-foreground">

            Compressed Size

          </p>

          <h3 className="mt-2 text-2xl font-bold text-green-600">

            {compressedSize}

          </h3>

        </div>

        <div className="rounded-2xl border bg-card p-5">

          <p className="text-sm text-muted-foreground">

            Status

          </p>

          <h3 className="mt-2 text-2xl font-bold">

            {compressedImage ? "Completed" : "Pending"}

          </h3>

        </div>

      </div>

    </section>

  );

}