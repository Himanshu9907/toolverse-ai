// "use client";

// import Link from "next/link";
// import {
//   ImageIcon,
//   FileText,
//   Bot,
//   Video,
//   FileImage,
//   ScanText,
//   Wand2,
//   Layers3,
//   ArrowRight,
// } from "lucide-react";

// const categories = [
//   {
//     title: "Image Tools",
//     description: "Compress, resize, crop, convert and edit images.",
//     icon: ImageIcon,
//     color: "from-blue-500 to-cyan-500",
//     tools: "32 Tools",
//   },
//   {
//     title: "PDF Tools",
//     description: "Merge, split, compress and convert PDF files.",
//     icon: FileText,
//     color: "from-red-500 to-orange-500",
//     tools: "24 Tools",
//   },
//   {
//     title: "AI Tools",
//     description: "AI Writer, Background Removal, AI Image & more.",
//     icon: Bot,
//     color: "from-violet-500 to-fuchsia-500",
//     tools: "40 Tools",
//   },
//   {
//     title: "Video Tools",
//     description: "Compress, convert and optimize videos.",
//     icon: Video,
//     color: "from-pink-500 to-rose-500",
//     tools: "18 Tools",
//   },
//   {
//     title: "Converter",
//     description: "Convert every file format in seconds.",
//     icon: FileImage,
//     color: "from-green-500 to-emerald-500",
//     tools: "56 Tools",
//   },
//   {
//     title: "OCR",
//     description: "Extract text from Images & PDFs.",
//     icon: ScanText,
//     color: "from-yellow-500 to-orange-500",
//     tools: "14 Tools",
//   },
//   {
//     title: "AI Automation",
//     description: "Smart workflows powered by AI.",
//     icon: Wand2,
//     color: "from-indigo-500 to-violet-500",
//     tools: "12 Tools",
//   },
//   {
//     title: "Utilities",
//     description: "QR, Barcode, Color Picker & much more.",
//     icon: Layers3,
//     color: "from-cyan-500 to-blue-500",
//     tools: "28 Tools",
//   },
// ];

// export function Categories() {
//   return (
//     <section className="py-28">

//       <div className="mx-auto max-w-7xl px-6">

//         <div className="text-center">

//           <span className="rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

//             Categories

//           </span>

//           <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">

//             Explore Powerful Tool Categories

//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">

//             Everything you need for Images, PDFs,
//             AI, Videos and Productivity in one place.

//           </p>

//         </div>

//         <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

//           {categories.map((category) => {

//             const Icon = category.icon;

//             return (
//               <Link
//                 href="#"
//                 key={category.title}
//                 className="group relative overflow-hidden rounded-3xl border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
//               >

//                 <div
//                   className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
//                 >

//                   <Icon className="h-8 w-8" />

//                 </div>

//                 <h3 className="mt-8 text-2xl font-bold">

//                   {category.title}

//                 </h3>

//                 <p className="mt-3 leading-7 text-muted-foreground">

//                   {category.description}

//                 </p>

//                 <div className="mt-8 flex items-center justify-between">

//                   <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium">

//                     {category.tools}

//                   </span>

//                   <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />

//                 </div>

//                 <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:scale-150" />

//               </Link>
//             );
//           })}
//         </div>

//       </div>

//     </section>
//   );
// }


"use client";

import Link from "next/link";
import {
  ImageIcon,
  FileText,
  Bot,
  Video,
  FileImage,
  ScanText,
  Wand2,
  Layers3,
  ArrowRight,
} from "lucide-react";

import { FadeUp } from "@/components/animations/fade-up";
import { ScaleIn } from "@/components/animations/scale-in";

const categories = [
  {
    title: "Image Tools",
    description: "Compress, resize, crop, convert and edit images.",
    icon: ImageIcon,
    color: "from-blue-500 to-cyan-500",
    tools: "32 Tools",
  },
  {
    title: "PDF Tools",
    description: "Merge, split, compress and convert PDF files.",
    icon: FileText,
    color: "from-red-500 to-orange-500",
    tools: "24 Tools",
  },
  {
    title: "AI Tools",
    description: "AI Writer, Background Removal, AI Image & more.",
    icon: Bot,
    color: "from-violet-500 to-fuchsia-500",
    tools: "40 Tools",
  },
  {
    title: "Video Tools",
    description: "Compress, convert and optimize videos.",
    icon: Video,
    color: "from-pink-500 to-rose-500",
    tools: "18 Tools",
  },
  {
    title: "Converter",
    description: "Convert every file format in seconds.",
    icon: FileImage,
    color: "from-green-500 to-emerald-500",
    tools: "56 Tools",
  },
  {
    title: "OCR",
    description: "Extract text from Images & PDFs.",
    icon: ScanText,
    color: "from-yellow-500 to-orange-500",
    tools: "14 Tools",
  },
  {
    title: "AI Automation",
    description: "Smart workflows powered by AI.",
    icon: Wand2,
    color: "from-indigo-500 to-violet-500",
    tools: "12 Tools",
  },
  {
    title: "Utilities",
    description: "QR, Barcode, Color Picker & much more.",
    icon: Layers3,
    color: "from-cyan-500 to-blue-500",
    tools: "28 Tools",
  },
];

export function Categories() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      </div>

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <FadeUp>

            <span className="inline-flex rounded-full border bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">

              Categories

            </span>

          </FadeUp>

          <FadeUp delay={0.1}>

            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">

              Explore Powerful Tool Categories

            </h2>

          </FadeUp>

          <FadeUp delay={0.2}>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">

              Everything you need for Images, PDFs, AI,
              Videos and Productivity in one modern platform.

            </p>

          </FadeUp>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                      {categories.map((category, index) => {

            const Icon = category.icon;

            return (

              <ScaleIn
                key={category.title}
                delay={index * 0.08}
              >

                <Link
                  href="#"
                  className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-3 hover:border-primary/40 hover:shadow-2xl"
                >

                  {/* Hover Gradient */}

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Blur Effect */}

                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

                  {/* Icon */}

                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Title */}

                  <h3 className="relative mt-8 text-2xl font-bold transition-colors duration-300 group-hover:text-primary">

                    {category.title}

                  </h3>

                  {/* Description */}

                  <p className="relative mt-3 flex-1 leading-7 text-muted-foreground">

                    {category.description}

                  </p>

                  {/* Bottom */}

                  <div className="relative mt-auto flex items-center justify-between pt-8">

                    <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">

                      {category.tools}

                    </span>

                    <ArrowRight className="h-5 w-5 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary" />

                  </div>

                </Link>

              </ScaleIn>

            );

          })}

        </div>

      </div>

    </section>

  );

}