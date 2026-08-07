// "use client";

// import UploadPanel from "./upload-panel";
// import PreviewPanel from "./preview-panel";
// import Toolbar from "./toolbar";
// import Gallery from "./gallery";

// export default function PDFImageExtractor() {
//   return (
//     <div className="space-y-8">

//       {/* Upload + Preview */}

//       <div className="grid gap-8 lg:grid-cols-2">

//         <UploadPanel />

//         <PreviewPanel />

//       </div>

//       {/* Toolbar */}

//       <Toolbar />

//       {/* Gallery */}

//       <Gallery />

//     </div>
//   );
// }

// "use client";


// import { usePdfImageExtractor } from "@/hooks/use-pdf-image-extractor";
// import UploadPanel from "./upload-panel";
// import PreviewPanel from "./preview-panel";
// import Toolbar from "./toolbar";
// import Gallery from "./gallery";

// export default function PDFImageExtractor() {

  
//   const extractor = usePdfImageExtractor();

//   return (

//     <div className="space-y-8">

//       <div className="grid lg:grid-cols-2 gap-8">

//         <UploadPanel extractor={extractor} />

//         <PreviewPanel extractor={extractor} />

//       </div>

//       <Toolbar extractor={extractor} />

//       <Gallery />

//     </div>

//   );

// }



// "use client";

// import { usePdfImageExtractor } from "@/hooks/use-pdf-image-extractor";

// import UploadPanel from "./upload-panel";
// import PreviewPanel from "./preview-panel";
// import Toolbar from "./toolbar";
// import Gallery from "./gallery";

// export default function PDFImageExtractor() {

//   const extractor = usePdfImageExtractor();

//   return (

//     <div className="space-y-8">

//       <div className="grid lg:grid-cols-2 gap-8">

//         <UploadPanel extractor={extractor} />

//         <PreviewPanel extractor={extractor} />

//       </div>

//       <Toolbar extractor={extractor} />

//       <Gallery extractor={extractor} />

//     </div>

//   );

// }

"use client";

import { usePdfImageExtractor } from "@/hooks/use-pdf-image-extractor";

import UploadPanel from "./upload-panel";
import PreviewPanel from "./preview-panel";
import Toolbar from "./toolbar";
import Gallery from "./gallery";

export default function PDFImageExtractor() {

  const extractor = usePdfImageExtractor();

  return (

    <section className="space-y-8">

      {/* Top Section */}

      <div className="grid gap-8 lg:grid-cols-2">

        <UploadPanel
          extractor={extractor}
        />

        <PreviewPanel
          extractor={extractor}
        />

      </div>

      {/* Toolbar */}

      <Toolbar
        extractor={extractor}
      />

      {/* Gallery */}

      <Gallery
        extractor={extractor}
      />

    </section>

  );

}