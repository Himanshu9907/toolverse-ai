import { Metadata } from "next";
import ImageConverter from "@/components/tools/image-converter/image-converter";

export const metadata: Metadata = {
  title: "Image Converter | Kratiq AI Tools",
  description:
    "Convert JPG, PNG and WEBP images instantly for free.",
};

export default function Page() {
  return <ImageConverter />;
}