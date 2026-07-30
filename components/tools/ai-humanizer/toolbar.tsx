// "use client";

// import {
//   Copy,
//   Download,
//  RotateCcw,
//   RefreshCw,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";

// interface ToolbarProps {

//   loading: boolean;

//   disabled?: boolean;

//   onCopy: () => void;

//   onDownload: () => void;

//   onClear: () => void;

//   onRegenerate: () => void;

// }

// export function Toolbar({

//   loading,

//   disabled = false,

//   onCopy,

//   onDownload,

//   onClear,

//   onRegenerate,

// }: ToolbarProps) {

//   return (

//     <div className="flex flex-wrap gap-3">

//       <Button

//         variant="outline"

//         onClick={onCopy}

//         disabled={disabled || loading}

//       >

//         <Copy className="mr-2 h-4 w-4" />

//         Copy

//       </Button>

//       <Button

//         variant="outline"

//         onClick={onDownload}

//         disabled={disabled || loading}

//       >

//         <Download className="mr-2 h-4 w-4" />

//         Download

//       </Button>

//       <Button

//         variant="outline"

//         onClick={onRegenerate}

//         disabled={loading}

//       >

//         <RefreshCw
//           className={`mr-2 h-4 w-4 ${
//             loading ? "animate-spin" : ""
//           }`}
//         />

//         Regenerate

//       </Button>

//       <Button

//         variant="destructive"

//         onClick={onClear}

//         disabled={loading}

//       >

//         <RotateCcw className="mr-2 h-4 w-4" />

//         Clear

//       </Button>

//     </div>

//   );

// }

"use client";

import {
  Copy,
  Download,
  RotateCcw,
  RefreshCw,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface ToolbarProps {
  loading: boolean;

  disabled?: boolean;

  onCopy: () => void;

  onDownload: () => void;

  onClear: () => void;

  onRegenerate: () => void;
}

export function Toolbar({
  loading,
  disabled = false,
  onCopy,
  onDownload,
  onClear,
  onRegenerate,
}: ToolbarProps) {
  return (
    <div className="flex flex-wrap gap-3">

      <Button
        variant="outline"
        className="rounded-xl"
        onClick={onCopy}
        disabled={disabled || loading}
      >
        <Copy className="mr-2 h-4 w-4" />
        Copy
      </Button>

      <Button
        variant="outline"
        className="rounded-xl"
        onClick={onDownload}
        disabled={disabled || loading}
      >
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>

      <Button
        className="rounded-xl bg-violet-600 text-white hover:bg-violet-700"
        onClick={onRegenerate}
        disabled={loading}
      >
        {loading ? (
          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Sparkles className="mr-2 h-4 w-4" />
        )}

        {loading ? "Humanizing..." : "Humanize Again"}
      </Button>

      <Button
        variant="destructive"
        className="rounded-xl"
        onClick={onClear}
        disabled={loading}
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        Clear
      </Button>

    </div>
  );
}