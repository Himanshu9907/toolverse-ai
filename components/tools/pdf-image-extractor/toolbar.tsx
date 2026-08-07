// "use client";

// import { Button } from "@/components/ui/button";
// import { Download, ImageIcon, Trash2 } from "lucide-react";

// interface ToolbarProps {
//   extractor: any;
// }

// export default function Toolbar({
//   extractor,
// }: ToolbarProps) {
//   return (
//     <div className="rounded-2xl border bg-card p-6 shadow-sm">

//       <div className="flex flex-wrap items-center justify-between gap-4">

//         <div>

//           <h2 className="text-lg font-semibold">

//             Extraction

//           </h2>

//           <p className="text-sm text-muted-foreground">

//             Extract images from your uploaded PDF.

//           </p>

//         </div>

//         <div className="flex gap-3">

//           {/* <Button
//             disabled={!extractor.pdfInfo.file}
//           >
//             <ImageIcon className="mr-2 h-4 w-4" />
//             Extract Images
//           </Button> */}

//           <Button
//   disabled={
//     !extractor.pdfInfo.file || extractor.loading
//   }
//   onClick={extractor.extractImages}
// >
//   <ImageIcon className="mr-2 h-4 w-4" />

//   {extractor.loading
//     ? "Extracting..."
//     : "Extract Images"}

// </Button>

//           <Button
//             variant="outline"
//             disabled
//           >
//             <Download className="mr-2 h-4 w-4" />
//             Download ZIP
//           </Button>

//           <Button
//             variant="destructive"
//             onClick={extractor.clearPDF}
//             disabled={!extractor.pdfInfo.file}
//           >
//             <Trash2 className="mr-2 h-4 w-4" />
//             Clear
//           </Button>

//         </div>

//       </div>

//     </div>
//   );
// }

"use client";

import {
  Download,
  ImageIcon,
  Loader2,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface ToolbarProps {
  extractor: any;
}

export default function Toolbar({
  extractor,
}: ToolbarProps) {

  return (

    <div className="rounded-2xl border bg-card p-6 shadow-sm">

      <div className="flex flex-wrap items-center justify-between gap-4">

        <div>

          <h2 className="text-lg font-semibold">

            Actions

          </h2>

          <p className="text-sm text-muted-foreground">

            Extract, download and manage your PDF images.

          </p>

        </div>

        <div className="flex flex-wrap gap-3">

          {/* Extract */}

          <Button

            onClick={extractor.extractImages}

            disabled={
              !extractor.pdfInfo.file ||
              extractor.loading
            }

          >

            {

              extractor.loading ? (

                <>

                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />

                  Extracting...

                </>

              ) : (

                <>

                  <ImageIcon className="mr-2 h-4 w-4" />

                  Extract Images

                </>

              )

            }

          </Button>

          {/* Download ZIP */}

          {/* <Button

            variant="outline"

            disabled={
              extractor.images.length === 0
            }

            onClick={() => {

              alert(
                "ZIP Download will be implemented in Part 7 🚀"
              );

            }}

          >

            <Download className="mr-2 h-4 w-4" />

            Download ZIP

          </Button> */}

          <Button

  variant="outline"

  disabled={

    extractor.images.length === 0

  }

  onClick={extractor.downloadZip}

>

  <Download className="mr-2 h-4 w-4" />

  Download ZIP

</Button>

          {/* Clear */}

          <Button

            variant="destructive"

            disabled={
              !extractor.pdfInfo.file &&
              extractor.images.length === 0
            }

            onClick={extractor.clearPDF}

          >

            <Trash2 className="mr-2 h-4 w-4" />

            Clear

          </Button>

        </div>

      </div>

    </div>

  );

}