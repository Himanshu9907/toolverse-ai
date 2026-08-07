// "use client";

// import Image from "next/image";

// export default function PreviewPanel({ converter }: any) {

//   return (

//     <div className="rounded-xl border p-6">

//       <h2 className="text-xl font-semibold mb-4">

//         Preview

//       </h2>

//       <div
//         className="relative h-72 rounded-lg
//         bg-muted overflow-hidden
//         flex items-center justify-center"
//       >

//         {converter.preview ? (

//           <Image
//             src={converter.preview}
//             alt="preview"
//             fill
//             className="object-contain"
//           />

//         ) : (

//           <p className="text-muted-foreground">

//             No Image Selected

//           </p>

//         )}

//       </div>

//     </div>

//   );
// }

"use client";

import Image from "next/image";

export default function PreviewPanel({ converter }: any) {

  return (

    <div className="rounded-2xl border bg-card p-6 shadow-sm">

      <h2 className="text-xl font-bold mb-5">

        Preview

      </h2>

      <div

        className="
        relative
        h-80
        rounded-xl
        bg-muted
        overflow-hidden"

      >

        {converter.preview ? (

          <Image

            src={converter.preview}

            alt="preview"

            fill

            className="object-contain"

          />

        ) : (

          <div className="flex items-center justify-center h-full">

            <p className="text-muted-foreground">

              Image Preview

            </p>

          </div>

        )}

      </div>

      {converter.file && (

        <div className="mt-5 space-y-2 text-sm">

          <div className="flex justify-between">

            <span>Name</span>

            <span>{converter.file.name}</span>

          </div>

          <div className="flex justify-between">

            <span>Size</span>

            <span>

              {(converter.file.size / 1024).toFixed(2)} KB

            </span>

          </div>

        </div>

      )}

    </div>

  );

}