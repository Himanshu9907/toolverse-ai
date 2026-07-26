"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";

import { UploadZone } from "@/components/shared/upload-zone";
import { ImagePreview } from "@/components/tools/compress-image/image-preview";
import { CompressionControls } from "@/components/tools/compress-image/compression-controls";

export function ImageCompressor()  {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [originalImage, setOriginalImage] = useState<string | null>(null);

  const [compressedImage, setCompressedImage] = useState<string | null>(null);

  const [compressedFile, setCompressedFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const formatSize = (bytes: number) => {

    if (bytes < 1024) return `${bytes} B`;

    if (bytes < 1024 * 1024)
      return `${(bytes / 1024).toFixed(2)} KB`;

    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

  };

  const handleFileSelect = (file: File) => {

    setSelectedFile(file);

    setCompressedFile(null);

    setCompressedImage(null);

    setOriginalImage(URL.createObjectURL(file));

  };

  const handleCompress = async (quality: number) => {

    if (!selectedFile) return;

    setLoading(true);

    try {

      const options = {

        maxSizeMB: 5,

        maxWidthOrHeight: 1920,

        useWebWorker: true,

        initialQuality: quality / 100,

      };

      const compressed = await imageCompression(
        selectedFile,
        options
      );

      setCompressedFile(compressed);

      setCompressedImage(
        URL.createObjectURL(compressed)
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const downloadImage = () => {

    if (!compressedFile) return;

    const link = document.createElement("a");

    link.href = URL.createObjectURL(compressedFile);

    link.download = compressedFile.name;

    link.click();

  };

  return (

    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

      <div className="mb-10">

        <h1 className="text-4xl font-bold tracking-tight">

          Compress Image

        </h1>

        <p className="mt-3 max-w-2xl text-muted-foreground">

          Reduce image size without losing noticeable quality.
          Upload an image, choose compression settings and download
          the optimized version.

        </p>

      </div>

    <UploadZone onFileSelect={handleFileSelect} />
            {selectedFile && (

        <>

          <ImagePreview
            originalImage={originalImage}
            compressedImage={compressedImage}
            originalSize={formatSize(selectedFile.size)}
            compressedSize={
              compressedFile
                ? formatSize(compressedFile.size)
                : "--"
            }
          />

          <CompressionControls
            loading={loading}
            onCompress={handleCompress}
          />

        </>

      )}

      {selectedFile && compressedFile && (

  <section className="mt-10 rounded-3xl border bg-card p-8">

    <div className="grid gap-6 md:grid-cols-3">

      <div>

        <p className="text-sm text-muted-foreground">

          Original Size

        </p>

        <h3 className="mt-2 text-3xl font-bold">

          {formatSize(selectedFile.size)}

        </h3>

      </div>

      <div>

        <p className="text-sm text-muted-foreground">

          Compressed Size

        </p>

        <h3 className="mt-2 text-3xl font-bold text-green-600">

          {formatSize(compressedFile.size)}

        </h3>

      </div>

      <div>

        <p className="text-sm text-muted-foreground">

          Space Saved

        </p>

        <h3 className="mt-2 text-3xl font-bold text-blue-600">

          {(
            ((selectedFile.size - compressedFile.size) /
              selectedFile.size) *
            100
          ).toFixed(1)}
          %

        </h3>

      </div>

    </div>

    <button
      onClick={downloadImage}
      className="mt-8 w-full rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
    >

      Download Compressed Image

    </button>

  </section>

)}
            {/* Related Tools */}

      <section className="mt-16">

        <div className="mb-8">

          <h2 className="text-3xl font-bold">

            More Image Tools

          </h2>

          <p className="mt-2 text-muted-foreground">

            Explore more powerful image utilities available in ToolVerse AI.

          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[
            "Remove Background",
            "Image Converter",
            "Resize Image",
            "Crop Image",
          ].map((tool) => (

            <div
              key={tool}
              className="rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >

              <h3 className="text-lg font-semibold">

                {tool}

              </h3>

              <p className="mt-2 text-sm text-muted-foreground">

                Coming soon in ToolVerse AI.

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* FAQ */}

      <section className="mt-16 rounded-3xl border bg-card p-8">

        <h2 className="text-3xl font-bold">

          Frequently Asked Questions

        </h2>

        <div className="mt-8 space-y-6">

          <div>

            <h3 className="font-semibold">

              Does image compression reduce quality?

            </h3>

            <p className="mt-2 text-muted-foreground">

              Yes, but our compression aims to reduce file size while
              keeping visual quality as high as possible.

            </p>

          </div>

          <div>

            <h3 className="font-semibold">

              Are my images uploaded to any server?

            </h3>

            <p className="mt-2 text-muted-foreground">

              No. Compression happens directly inside your browser,
              so your files remain private.

            </p>

          </div>

          <div>

            <h3 className="font-semibold">

              Which formats are supported?

            </h3>

            <p className="mt-2 text-muted-foreground">

              JPG, JPEG, PNG and WEBP are currently supported.

            </p>

          </div>

        </div>

      </section>

    </main>

  );

}