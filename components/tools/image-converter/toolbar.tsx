// "use client";

// import { Button } from "@/components/ui/button";

// export default function Toolbar({ converter }: any) {

//   return (

//     <div className="mt-8 flex gap-4 justify-end">

//       <Button

//         variant="outline"

//         onClick={converter.reset}

//       >

//         Reset

//       </Button>

//       <Button disabled={!converter.file}>

//         Convert

//       </Button>

//       <Button disabled>

//         Download

//       </Button>

//     </div>

//   );
// }

// "use client";

// import { Button } from "@/components/ui/button";

// export default function Toolbar({ converter }: any) {

//   function download() {

//     if (!converter.converted) return;

//     const url = URL.createObjectURL(converter.converted);

//     const a = document.createElement("a");

//     a.href = url;

//     a.download = `converted.${converter.format}`;

//     a.click();

//   }

//   return (

//     <div className="mt-8 flex items-center gap-4 justify-between flex-wrap">

//       <div className="flex gap-3">

//         <select

//           value={converter.format}

//           onChange={(e) =>
//             converter.setFormat(e.target.value)
//           }

//           className="border rounded-md px-3 py-2"

//         >

//           <option value="png">PNG</option>

//           <option value="jpeg">JPG</option>

//           <option value="webp">WEBP</option>

//         </select>

//         <input

//           type="range"

//           min={10}

//           max={100}

//           value={converter.quality}

//           onChange={(e) =>
//             converter.setQuality(
//               Number(e.target.value)
//             )
//           }

//         />

//       </div>

//       <div className="flex gap-3">

//         <Button
//           variant="outline"
//           onClick={converter.reset}
//         >
//           Reset
//         </Button>

//         <Button
//           onClick={converter.convert}
//           disabled={!converter.file}
//         >
//           Convert
//         </Button>

//         <Button

//           onClick={download}

//           disabled={!converter.converted}

//         >

//           Download

//         </Button>

//       </div>

//     </div>

//   );

// }

"use client";

import { Button } from "@/components/ui/button";

export default function Toolbar({ converter }: any) {

  function download() {

    if (!converter.converted) return;

    const url = URL.createObjectURL(converter.converted);

    const a = document.createElement("a");

    a.href = url;

    a.download = `converted.${converter.format}`;

    a.click();

  }

  return (

    <div

      className="
      mt-8
      rounded-xl
      border
      p-5
      flex
      flex-wrap
      justify-between
      gap-6"

    >

      <div className="space-y-3">

        <label className="font-medium">

          Convert To

        </label>

        {/* <select

          value={converter.format}

          onChange={(e) =>
            converter.setFormat(e.target.value)
          }

          className="border rounded-lg px-3 py-2"

        >

          <option value="png">

            PNG

          </option>

          <option value="jpeg">

            JPG

          </option>

          <option value="webp">

            WEBP

          </option>

        </select> */}

        <select
  value={converter.format}
  onChange={(e) => converter.setFormat(e.target.value)}
  className="
    h-11
    rounded-lg
    border
    border-border
    bg-background
    text-foreground
    px-4
    outline-none
    focus:ring-2
    focus:ring-primary
  "
>
  <option className="bg-background text-foreground" value="png">
    PNG
  </option>

  <option className="bg-background text-foreground" value="jpeg">
    JPG
  </option>

  <option className="bg-background text-foreground" value="webp">
    WEBP
  </option>
</select>

      </div>

      <div className="space-y-3">

        <label className="font-medium">

          Quality

        </label>

        <input

          type="range"

          min={10}

          max={100}

          value={converter.quality}

          onChange={(e) =>
            converter.setQuality(Number(e.target.value))
          }

        />

        <p>

          {converter.quality}%

        </p>

      </div>

      <div className="flex items-end gap-3">

        <Button

          variant="outline"

          onClick={converter.reset}

        >

          Reset

        </Button>

        <Button

          onClick={converter.convert}

          disabled={!converter.file}

        >

          Convert

        </Button>

        <Button

          onClick={download}

          disabled={!converter.converted}

        >

          Download

        </Button>

      </div>

    </div>

  );

}