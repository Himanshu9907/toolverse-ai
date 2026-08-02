// "use client";

// import {
//   Sparkles,
//   Download,
//   Trash2,
//   Palette,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";

// interface ToolbarProps {
//   onGenerateSummary: () => void;
//   onDownload: () => void;
//   onClear: () => void;
// }

// export function Toolbar({
//   onGenerateSummary,
//   onDownload,
//   onClear,
// }: ToolbarProps) {
//   return (
//     <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border bg-card p-5 shadow-sm">

//       {/* Left */}

//       <div>

//         <h2 className="text-xl font-bold">

//           Resume Builder

//         </h2>

//         <p className="text-sm text-muted-foreground">

//           Build an ATS-friendly professional resume.

//         </p>

//       </div>

//       {/* Right */}

//       <div className="flex flex-wrap gap-3">

//         <Button
//           variant="outline"
//           className="gap-2 rounded-xl"
//           disabled
//         >
//           <Palette className="h-4 w-4" />

//           Template

//         </Button>

//         <Button
//           variant="secondary"
//           className="gap-2 rounded-xl"
//           onClick={onGenerateSummary}
//         >
//           <Sparkles className="h-4 w-4" />

//           AI Summary

//         </Button>

//         <Button
//           variant="default"
//           className="gap-2 rounded-xl"
//           onClick={onDownload}
//         >
//           <Download className="h-4 w-4" />

//           Download PDF

//         </Button>

//         <Button
//           variant="destructive"
//           className="gap-2 rounded-xl"
//           onClick={onClear}
//         >
//           <Trash2 className="h-4 w-4" />

//           Clear

//         </Button>

//       </div>

//     </div>
//   );
// }

// export default Toolbar;

"use client";

import {
  Sparkles,
  Download,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ToolbarProps {
  template: "modern" | "professional" | "minimal";

  onTemplateChange: (
    template: "modern" | "professional" | "minimal"
  ) => void;

  onPrint: () => void;

  onGenerateSummary: () => void;

  onClear: () => void;
}

export function Toolbar({
  template,
  onTemplateChange,
  onPrint,
  onGenerateSummary,
  onClear,
}: ToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border bg-card p-8 shadow-sm">
      {/* Left */}

      <div>
        <h2 className="text-2xl font-bold">
          Resume Builder
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Build an ATS-friendly professional resume.
        </p>
      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center gap-3">

        {/* Template */}

        <Select
          value={template}
          onValueChange={(value) =>
            onTemplateChange(
              value as
                | "modern"
                | "professional"
                | "minimal"
            )
          }
        >
          <SelectTrigger className="w-[190px] rounded-xl">
            <SelectValue placeholder="Select Template" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="modern">
              Modern
            </SelectItem>

            <SelectItem value="professional">
              Professional
            </SelectItem>

            <SelectItem value="minimal">
              Minimal
            </SelectItem>
          </SelectContent>
        </Select>

        {/* AI */}

        <Button
          variant="secondary"
          className="gap-2 rounded-xl"
          onClick={onGenerateSummary}
        >
          <Sparkles className="h-4 w-4" />
          AI Summary
        </Button>

        {/* Download */}

        <Button
          variant="default"
          className="gap-2 rounded-xl"
          onClick={onPrint}
        >
          <Download className="h-4 w-4" />
          Download PDF
        </Button>

        {/* Clear */}

        <Button
          variant="destructive"
          className="gap-2 rounded-xl"
          onClick={onClear}
        >
          <Trash2 className="h-4 w-4" />
          Clear
        </Button>

      </div>
    </div>
  );
}

export default Toolbar;