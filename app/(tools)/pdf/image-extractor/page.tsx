import PDFImageExtractor from "@/components/tools/pdf-image-extractor/pdf-image-extractor";

export const metadata = {
  title: "PDF Image Extractor | Kratiq AI",
  description:
    "Extract all images from your PDF in original quality. Download individual images or all images as ZIP instantly.",
};

export default function PDFImageExtractorPage() {
  return (
    <main className="container mx-auto px-4 py-10">

      <div className="mb-10 text-center">

        <h1 className="text-4xl font-bold tracking-tight">
          PDF Image Extractor
        </h1>

        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Upload your PDF and extract every embedded image in original quality.
          Download single images or export everything as a ZIP file.
        </p>

      </div>

      <PDFImageExtractor />

    </main>
  );
}