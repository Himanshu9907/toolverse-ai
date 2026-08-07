// "use client";

// import { ImageIcon } from "lucide-react";

// export default function Gallery() {
//   return (
//     <div className="rounded-2xl border bg-card p-6 shadow-sm">

//       <div className="mb-6">

//         <h2 className="text-xl font-semibold">

//           Extracted Images

//         </h2>

//         <p className="text-sm text-muted-foreground">

//           Images extracted from your PDF will appear here.

//         </p>

//       </div>

//       <div
//         className="
//         grid
//         gap-5
//         sm:grid-cols-2
//         lg:grid-cols-4
//         "
//       >

//         {Array.from({ length: 8 }).map((_, index) => (

//           <div
//             key={index}
//             className="
//             flex
//             h-48
//             flex-col
//             items-center
//             justify-center
//             rounded-xl
//             border
//             bg-muted
//             "
//           >

//             <ImageIcon className="mb-3 h-10 w-10 text-muted-foreground" />

//             <p className="text-sm text-muted-foreground">

//               Image {index + 1}

//             </p>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// }

// "use client";

// interface GalleryProps {
//   extractor: any;
// }

// export default function Gallery({ extractor }: GalleryProps) {

//   // if (extractor.images.length === 0) {
//   if (!extractor || !extractor.images || extractor.images.length === 0) {
//     return (
//       <div className="rounded-2xl border bg-card p-6 shadow-sm">

//         <div className="mb-6">

//           <h2 className="text-xl font-semibold">
//             Extracted Images
//           </h2>

//           <p className="text-sm text-muted-foreground">
//             Upload a PDF to extract images.
//           </p>

//         </div>

//         <div className="h-60 flex items-center justify-center text-muted-foreground">
//           No images extracted yet.
//         </div>

//       </div>
//     );
//   }

//   return (

//     <div className="rounded-2xl border bg-card p-6 shadow-sm">

//       <div className="mb-6">

//         <h2 className="text-xl font-semibold">

//           Extracted Images

//         </h2>

//         <p className="text-sm text-muted-foreground">

//           {extractor.images.length} images found from {extractor.pages} pages.

//         </p>

//       </div>

//       <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

//         {extractor.images.map((img: any) => (

//           <div
//             key={img.image}
//             className="overflow-hidden rounded-xl border bg-background"
//           >

//             <img
//               // src={`http://127.0.0.1:8000/uploads/${img.image}`}
//               src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${img.image}`}
//               alt={img.image}
//               className="h-48 w-full object-cover"
//             />

//             <div className="p-3">

//               <p className="text-sm font-medium">

//                 Page {img.page}

//               </p>

//               <p className="text-xs text-muted-foreground uppercase">

//                 {img.format}

//               </p>

//               <a
//                 href={`http://127.0.0.1:8000/uploads/${img.image}`}
//                 download
//                 className="mt-3 inline-block text-sm text-primary hover:underline"
//               >
//                 Download
//               </a>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>

//   );

// }

// "use client";

// import {
//   Download,
//   ImageIcon,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";

// interface GalleryProps {
//   extractor: any;
// }

// export default function Gallery({
//   extractor,
// }: GalleryProps) {

//   if (
//     !extractor.images ||
//     extractor.images.length === 0
//   ) {

//     return (

//       <div className="rounded-2xl border bg-card p-6 shadow-sm">

//         <div className="mb-6">

//           <h2 className="text-xl font-semibold">

//             Extracted Images

//           </h2>

//           <p className="text-sm text-muted-foreground">

//             Upload a PDF and click Extract Images.

//           </p>

//         </div>

//         <div className="flex h-72 flex-col items-center justify-center rounded-xl border border-dashed">

//           <ImageIcon className="mb-4 h-14 w-14 text-muted-foreground" />

//           <p className="text-muted-foreground">

//             No Images Extracted

//           </p>

//         </div>

//       </div>

//     );

//   }

//   return (

//     <div className="rounded-2xl border bg-card p-6 shadow-sm">

//       <div className="mb-6 flex items-center justify-between">

//         <div>

//           <h2 className="text-xl font-semibold">

//             Extracted Images

//           </h2>

//           <p className="text-sm text-muted-foreground">

//             {extractor.images.length} Images extracted from{" "}

//             {extractor.pdfInfo.totalPages}

//             {" "}pages.

//           </p>

//         </div>

//       </div>

//       <div

//         className="
//         grid
//         gap-6
//         sm:grid-cols-2
//         lg:grid-cols-3
//         xl:grid-cols-4
//         "

//       >

//         {extractor.images.map(

//           (img: any) => (

//             <div

//               key={img.image}

//               className="
//               overflow-hidden
//               rounded-xl
//               border
//               bg-background
//               "

//             >

//               <img

//                 src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${img.image}`}

//                 alt={img.image}

//                 className="
//                 h-52
//                 w-full
//                 object-cover
//                 "

//               />

//               <div className="space-y-3 p-4">

//                 <div>

//                   <p className="font-semibold">

//                     Page {img.page}

//                   </p>

//                   <p className="text-xs uppercase text-muted-foreground">

//                     {img.format}

//                   </p>

//                 </div>

//                 <Button

//                   asChild

//                   className="w-full"

//                 >

//                   <a

//                     href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${img.image}`}

//                     target="_blank"

//                     rel="noopener noreferrer"

//                     download={img.image}

//                   >

//                     <Download className="mr-2 h-4 w-4" />

//                     Download

//                   </a>

//                 </Button>

//               </div>

//             </div>

//           )

//         )}

//       </div>

//     </div>

//   );

// }


"use client";

import {
  Download,
  ImageIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface GalleryProps {
  extractor: any;
}

export default function Gallery({
  extractor,
}: GalleryProps) {

  const downloadImage = async (filename: string) => {

    try {

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/pdf/download/${filename}`
      );

      if (!res.ok) {
        throw new Error("Download failed");
      }

      const blob = await res.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");

      a.href = url;

      a.download = filename;

      document.body.appendChild(a);

      a.click();

      a.remove();

      window.URL.revokeObjectURL(url);

    } catch (err) {

      console.error(err);

      alert("Download Failed");

    }

  };

  if (
    !extractor.images ||
    extractor.images.length === 0
  ) {

    return (

      <div className="rounded-2xl border bg-card p-6 shadow-sm">

        <div className="mb-6">

          <h2 className="text-xl font-semibold">
            Extracted Images
          </h2>

          <p className="text-sm text-muted-foreground">
            Upload a PDF and click Extract Images.
          </p>

        </div>

        <div className="flex h-72 flex-col items-center justify-center rounded-xl border border-dashed">

          <ImageIcon className="mb-4 h-14 w-14 text-muted-foreground" />

          <p className="text-muted-foreground">
            No Images Extracted
          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="rounded-2xl border bg-card p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-xl font-semibold">
            Extracted Images
          </h2>

          <p className="text-sm text-muted-foreground">
            {extractor.images.length} Images extracted from{" "}
            {extractor.pdfInfo.totalPages} pages.
          </p>

        </div>

      </div>

      <div
        className="
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        "
      >

        {extractor.images.map((img: any) => (

          <div
            key={img.image}
            className="
            overflow-hidden
            rounded-xl
            border
            bg-background
            "
          >

            <img
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${img.image}`}
              alt={img.image}
              className="
              h-52
              w-full
              object-cover
              "
            />

            <div className="space-y-3 p-4">

              <div>

                <p className="font-semibold">
                  Page {img.page}
                </p>

                <p className="text-xs uppercase text-muted-foreground">
                  {img.format}
                </p>

              </div>

              <Button
                className="w-full"
                onClick={() => downloadImage(img.image)}
              >

                <Download className="mr-2 h-4 w-4" />

                Download

              </Button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}