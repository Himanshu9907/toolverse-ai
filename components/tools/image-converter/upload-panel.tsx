// "use client";

// import { UploadCloud } from "lucide-react";

// export default function UploadPanel({ converter }: any) {

//   function onChange(
//     e: React.ChangeEvent<HTMLInputElement>
//   ) {

//     const file = e.target.files?.[0];

//     if (!file) return;

//     converter.handleFile(file);
//   }

//   return (

//     <div className="rounded-xl border p-6">

//       <h2 className="text-xl font-semibold mb-4">

//         Upload Image

//       </h2>

//       <label className="cursor-pointer">

//         <div
//           className="h-72 rounded-lg border-2 border-dashed
//           flex flex-col items-center justify-center
//           hover:border-primary transition"
//         >

//           <UploadCloud
//             className="w-14 h-14 mb-3 text-primary"
//           />

//           <p className="font-medium">

//             Click to upload

//           </p>

//           <p className="text-sm text-muted-foreground">

//             JPG PNG WEBP

//           </p>

//         </div>

//         <input

//           type="file"

//           accept="image/*"

//           className="hidden"

//           onChange={onChange}

//         />

//       </label>

//     </div>

//   );
// }

"use client";

import { UploadCloud } from "lucide-react";

export default function UploadPanel({ converter }: any) {

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {

    e.preventDefault();

    const file = e.dataTransfer.files[0];

    if (!file) return;

    converter.handleFile(file);

  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (!file) return;

    converter.handleFile(file);

  }

  return (

    <div className="rounded-2xl border bg-card p-6 shadow-sm">

      <h2 className="text-xl font-bold mb-5">

        Upload Image

      </h2>

      <label>

        <div

          onDrop={handleDrop}

          onDragOver={(e) => e.preventDefault()}

          className="
          h-80
          rounded-xl
          border-2
          border-dashed
          border-primary/30
          hover:border-primary
          transition
          flex
          flex-col
          items-center
          justify-center
          cursor-pointer"

        >

          <UploadCloud className="w-16 h-16 text-primary mb-4" />

          <p className="font-semibold text-lg">

            Drag & Drop

          </p>

          <p className="text-muted-foreground">

            or Click to Upload

          </p>

          <p className="text-xs mt-3 text-muted-foreground">

            JPG • PNG • WEBP

          </p>

        </div>

        <input

          type="file"

          accept="image/*"

          className="hidden"

          onChange={handleChange}

        />

      </label>

    </div>

  );

}