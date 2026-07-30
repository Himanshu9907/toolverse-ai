"use client";

import Image from "next/image";

import {
  Download,
  Expand,
  ImageIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface ImageGridProps {
  images: string[];
  loading: boolean;
  prompt: string;
}

export function ImageGrid({
  images,
  loading,
  prompt,
}: ImageGridProps) {
    console.log("IMAGES ARRAY =>", images);

  const downloadImage = async (
    url: string,
    index: number
  ) => {
    const response = await fetch(url);

    const blob = await response.blob();

    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = blobUrl;

    link.download = `kratiq-ai-${index + 1}.png`;

    link.click();

    URL.revokeObjectURL(blobUrl);
  };

  return (

    <div className="space-y-5">

      <div>

        <h2 className="text-2xl font-bold">

          Generated Images

        </h2>

        <p className="text-sm text-muted-foreground">

          AI generated images based on your prompt.

        </p>

      </div>

      {loading ? (

        <div className="grid grid-cols-2 gap-4">

          {[1,2,3,4].map((item)=>(

            <div
              key={item}
              className="aspect-square animate-pulse rounded-2xl bg-muted"
            />

          ))}

        </div>

      ) : images.length === 0 ? (

        <div className="flex h-[500px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card">

          <ImageIcon className="mb-5 h-16 w-16 text-muted-foreground" />

          <h3 className="text-xl font-semibold">

            No Images Yet

          </h3>

          <p className="mt-2 max-w-sm text-center text-sm text-muted-foreground">

            Enter a prompt and click
            <span className="font-medium text-foreground">
              {" "}Generate Images
            </span>
            {" "}to create AI artwork.

          </p>

        </div>

      ) : (

        <div className="grid gap-5 sm:grid-cols-2">
                      {images.map((image, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >

              <Image
                src={image}
                alt={`${prompt}-${index}`}
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                unoptimized
              />

              {/* Overlay */}

              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                <div>

                  <p className="line-clamp-2 max-w-[220px] text-sm font-medium text-white">

                    {prompt}

                  </p>

                </div>

                <div className="flex gap-2">

                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-xl"
                    onClick={() =>
                      window.open(image, "_blank")
                    }
                  >

                    <Expand className="h-4 w-4" />

                  </Button>

                  <Button
                    size="icon"
                    className="rounded-xl"
                    onClick={() =>
                      downloadImage(image, index)
                    }
                  >

                    <Download className="h-4 w-4" />

                  </Button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default ImageGrid;

// "use client";

// import Image from "next/image";
// import {
//   Download,
//   Expand,
//   ImageIcon,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";

// interface ImageGridProps {
//   images: string[];
//   loading: boolean;
//   prompt: string;
// }

// export function ImageGrid({
//   images,
//   loading,
//   prompt,
// }: ImageGridProps) {
//   console.log("IMAGES ARRAY =>", images);

//   const downloadImage = async (
//     url: string,
//     index: number
//   ) => {
//     const response = await fetch(url);

//     const blob = await response.blob();

//     const blobUrl = URL.createObjectURL(blob);

//     const link = document.createElement("a");

//     link.href = blobUrl;
//     link.download = `kratiq-ai-${index + 1}.png`;

//     link.click();

//     URL.revokeObjectURL(blobUrl);
//   };

//   return (
//     <div className="space-y-5">

//       <div>
//         <h2 className="text-2xl font-bold">
//           Generated Images
//         </h2>

//         <p className="text-sm text-muted-foreground">
//           AI generated images based on your prompt.
//         </p>
//       </div>

//       {loading ? (

//         <div className="grid grid-cols-2 gap-4">

//           {[1, 2, 3, 4].map((item) => (

//             <div
//               key={item}
//               className="h-[420px] animate-pulse rounded-2xl bg-muted"
//             />

//           ))}

//         </div>

//       ) : images.length === 0 ? (

//         <div className="flex h-[500px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card">

//           <ImageIcon className="mb-5 h-16 w-16 text-muted-foreground" />

//           <h3 className="text-xl font-semibold">
//             No Images Yet
//           </h3>

//           <p className="mt-2 max-w-sm text-center text-sm text-muted-foreground">
//             Enter a prompt and click
//             <span className="font-medium text-foreground">
//               {" "}Generate Images
//             </span>
//             {" "}to create AI artwork.
//           </p>

//         </div>

//       ) : (

//         <div className="grid gap-5 sm:grid-cols-2">

//           {images.map((image, index) => (

//             <div
//               key={index}
//               className="group relative h-[420px] overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
//             >

//               <Image
//                 src={image}
//                 alt={`${prompt}-${index}`}
//                 fill
//                 unoptimized
//                 className="object-contain transition duration-500 group-hover:scale-105"
//               />

//               {/* Overlay */}

//               <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

//                 <div>

//                   <p className="line-clamp-2 max-w-[220px] text-sm font-medium text-white">
//                     {prompt}
//                   </p>

//                 </div>

//                 <div className="flex gap-2">

//                   <Button
//                     size="icon"
//                     variant="secondary"
//                     className="rounded-xl"
//                     onClick={() =>
//                       window.open(image, "_blank")
//                     }
//                   >
//                     <Expand className="h-4 w-4" />
//                   </Button>

//                   <Button
//                     size="icon"
//                     className="rounded-xl"
//                     onClick={() =>
//                       downloadImage(image, index)
//                     }
//                   >
//                     <Download className="h-4 w-4" />
//                   </Button>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       )}

//     </div>
//   );
// }

// export default ImageGrid;