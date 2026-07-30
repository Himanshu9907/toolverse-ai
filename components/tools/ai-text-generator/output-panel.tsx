// // "use client";

// // import {
// //   Copy,
// //   Download,
// //   FileText,
// // } from "lucide-react";

// // import type {
// //   AIGeneratorOutput,
// // } from "@/types/ai";

// // import {
// //   Button,
// // } from "@/components/ui/button";

// // import {
// //   Card,
// //   CardContent,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";

// // interface OutputPanelProps {

// //   output: AIGeneratorOutput;

// //   loading: boolean;

// //   onCopy: () => void;

// //   onDownload: () => void;

// // }

// // export function OutputPanel({

// //   output,

// //   loading,

// //   onCopy,

// //   onDownload,

// // }: OutputPanelProps) {

// //   const hasContent =
// //     output.text.trim().length > 0;

// //   return (

// //     <Card className="h-full">

// //       <CardHeader className="flex flex-row items-center justify-between">

// //         <CardTitle>

// //           Generated Text

// //         </CardTitle>

// //         <div className="flex gap-2">

// //           <Button

// //             variant="outline"

// //             size="icon"

// //             disabled={
// //               !hasContent ||
// //               loading
// //             }

// //             onClick={onCopy}

// //           >

// //             <Copy className="h-4 w-4" />

// //           </Button>

// //           <Button

// //             variant="outline"

// //             size="icon"

// //             disabled={
// //               !hasContent ||
// //               loading
// //             }

// //             onClick={onDownload}

// //           >

// //             <Download className="h-4 w-4" />

// //           </Button>

// //         </div>

// //       </CardHeader>

// //       <CardContent className="space-y-6">

// //         <div className="min-h-[350px] rounded-lg border bg-muted/30 p-4">

// //           {loading ? (

// //             <div className="flex h-full items-center justify-center">

// //               <p className="text-muted-foreground">

// //                 Generating...

// //               </p>

// //             </div>

// //           ) : hasContent ? (

// //             <pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7">

// //               {output.text}

// //             </pre>

// //           ) : (

// //             <div className="flex h-full flex-col items-center justify-center text-center">

// //               <FileText className="mb-4 h-12 w-12 text-muted-foreground" />

// //               <p className="text-muted-foreground">

// //                 Your generated content will appear here.

// //               </p>

// //             </div>

// //           )}

// //         </div>

// //         {/* Statistics */}

// //         <div className="grid grid-cols-3 gap-4">

// //           <div className="rounded-lg border p-4 text-center">

// //             <p className="text-xs text-muted-foreground">

// //               Words

// //             </p>

// //             <p className="mt-2 text-xl font-bold">

// //               {output.words}

// //             </p>

// //           </div>

// //           <div className="rounded-lg border p-4 text-center">

// //             <p className="text-xs text-muted-foreground">

// //               Characters

// //             </p>

// //             <p className="mt-2 text-xl font-bold">

// //               {output.characters}

// //             </p>

// //           </div>

// //           <div className="rounded-lg border p-4 text-center">

// //             <p className="text-xs text-muted-foreground">

// //               Reading Time

// //             </p>

// //             <p className="mt-2 text-xl font-bold">

// //               {output.readingTime} min

// //             </p>

// //           </div>

// //         </div>

// //       </CardContent>

// //     </Card>

// //   );

// // }

// "use client";

// import {
//   Copy,
//   Download,
//  FileText,
//   Sparkles,
//   Clock3,
//   Type,
//   Hash,
// } from "lucide-react";

// import type { AIGeneratorOutput } from "@/types/ai";

// import { Button } from "@/components/ui/button";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// interface OutputPanelProps {
//   output: AIGeneratorOutput;
//   loading: boolean;
//   onCopy: () => void;
//   onDownload: () => void;
// }

// export function OutputPanel({
//   output,
//   loading,
//   onCopy,
//   onDownload,
// }: OutputPanelProps) {
//   const hasContent = output.text.trim().length > 0;

//   return (
//     <Card className="rounded-2xl border border-white/10 bg-zinc-900/60 shadow-xl backdrop-blur-xl">

//       <CardHeader className="flex flex-row items-center justify-between">

//         <div>

//           <CardTitle className="flex items-center gap-2 text-2xl font-bold">

//             <Sparkles className="h-5 w-5 text-violet-400" />

//             Generated Result

//           </CardTitle>

//           <p className="mt-1 text-sm text-muted-foreground">

//             AI generated content will appear here.

//           </p>

//         </div>

//         <div className="flex gap-2">

//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-xl"
//             disabled={!hasContent || loading}
//             onClick={onCopy}
//           >
//             <Copy className="h-4 w-4" />
//           </Button>

//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-xl"
//             disabled={!hasContent || loading}
//             onClick={onDownload}
//           >
//             <Download className="h-4 w-4" />
//           </Button>

//         </div>

//       </CardHeader>

//       <CardContent className="space-y-6">

//         <div className="min-h-[480px] rounded-2xl border border-white/10 bg-zinc-950/70 p-6">

//           {loading ? (

//             <div className="flex h-[420px] flex-col items-center justify-center">

//               <div className="mb-5 h-10 w-10 animate-spin rounded-full border-4 border-violet-600 border-t-transparent" />

//               <p className="text-lg font-medium">

//                 Generating content...

//               </p>

//               <p className="mt-2 text-sm text-muted-foreground">

//                 KRATIQ AI is thinking...

//               </p>

//             </div>

//           ) : hasContent ? (

//             <pre className="whitespace-pre-wrap break-words font-sans text-[15px] leading-8 text-zinc-200">

//               {output.text}

//             </pre>

//           ) : (

//             <div className="flex h-[420px] flex-col items-center justify-center text-center">

//               <FileText className="mb-5 h-16 w-16 text-violet-500" />

//               <h3 className="text-xl font-semibold">

//                 No Content Yet

//               </h3>

//               <p className="mt-3 max-w-sm text-muted-foreground">

//                 Enter your prompt and click Generate.
//                 KRATIQ AI will instantly create high-quality content.

//               </p>

//             </div>

//           )}

//         </div>

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

//           <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">

//             <div className="flex items-center gap-3">

//               <Type className="h-5 w-5 text-violet-400" />

//               <span className="text-sm text-muted-foreground">

//                 Words

//               </span>

//             </div>

//             <p className="mt-4 text-3xl font-bold">

//               {output.words}

//             </p>

//           </div>

//           <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">

//             <div className="flex items-center gap-3">

//               <Hash className="h-5 w-5 text-violet-400" />

//               <span className="text-sm text-muted-foreground">

//                 Characters

//               </span>

//             </div>

//             <p className="mt-4 text-3xl font-bold">

//               {output.characters}

//             </p>

//           </div>

//           <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5">

//             <div className="flex items-center gap-3">

//               <Clock3 className="h-5 w-5 text-violet-400" />

//               <span className="text-sm text-muted-foreground">

//                 Reading Time

//               </span>

//             </div>

//             <p className="mt-4 text-3xl font-bold">

//               {output.readingTime} min

//             </p>

//           </div>

//         </div>

//       </CardContent>

//     </Card>
//   );
// }

"use client";

import {
  Copy,
  Download,
  FileText,
  Sparkles,
  Clock3,
  Type,
  Hash,
} from "lucide-react";

import type { AIGeneratorOutput } from "@/types/ai";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface OutputPanelProps {
  output: AIGeneratorOutput;
  loading: boolean;
  onCopy: () => void;
  onDownload: () => void;
}

export function OutputPanel({
  output,
  loading,
  onCopy,
  onDownload,
}: OutputPanelProps) {
  const hasContent = output.text.trim().length > 0;

  return (
    <Card className="rounded-2xl border border-border bg-card shadow-sm">

      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <CardTitle className="flex items-center gap-2 text-2xl font-bold">

            <Sparkles className="h-5 w-5 text-primary" />

            Generated Result

          </CardTitle>

          <p className="mt-1 text-sm text-muted-foreground">

            AI generated content will appear here.

          </p>

        </div>

        <div className="flex gap-2">

          <Button
            variant="outline"
            size="icon"
            disabled={!hasContent || loading}
            onClick={onCopy}
          >
            <Copy className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            disabled={!hasContent || loading}
            onClick={onDownload}
          >
            <Download className="h-4 w-4" />
          </Button>

        </div>

      </CardHeader>

      <CardContent className="space-y-6">

        <div className="min-h-[460px] rounded-xl border border-border bg-background p-6">

                      {loading ? (
            <div className="flex h-[400px] flex-col items-center justify-center">

              <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />

              <p className="mt-6 text-lg font-semibold">
                Generating content...
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                KRATIQ AI is creating your response.
              </p>

            </div>
          ) : hasContent ? (
            <pre className="whitespace-pre-wrap break-words font-sans text-[15px] leading-8 text-foreground">
              {output.text}
            </pre>
          ) : (
            <div className="flex h-[400px] flex-col items-center justify-center text-center">

              <FileText className="mb-5 h-14 w-14 text-muted-foreground" />

              <h3 className="text-xl font-semibold">
                No Content Generated
              </h3>

              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                Enter your prompt, choose a template and click
                <span className="font-medium text-foreground">
                  {" "}Generate with AI
                </span>{" "}
                to create high-quality content instantly.
              </p>

            </div>
          )}

        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          <Card className="border-border bg-background shadow-none">

            <CardContent className="flex items-center gap-4 p-5">

              <div className="rounded-lg bg-primary/10 p-3">
                <Type className="h-5 w-5 text-primary" />
              </div>

              <div>

                <p className="text-xs text-muted-foreground">
                  Words
                </p>

                <p className="text-2xl font-bold">
                  {output.words}
                </p>

              </div>

            </CardContent>

          </Card>

          <Card className="border-border bg-background shadow-none">

            <CardContent className="flex items-center gap-4 p-5">

              <div className="rounded-lg bg-primary/10 p-3">
                <Hash className="h-5 w-5 text-primary" />
              </div>

              <div>

                <p className="text-xs text-muted-foreground">
                  Characters
                </p>

                <p className="text-2xl font-bold">
                  {output.characters}
                </p>

              </div>

            </CardContent>

          </Card>

          <Card className="border-border bg-background shadow-none">

            <CardContent className="flex items-center gap-4 p-5">

              <div className="rounded-lg bg-primary/10 p-3">
                <Clock3 className="h-5 w-5 text-primary" />
              </div>

              <div>

                <p className="text-xs text-muted-foreground">
                  Reading Time
                </p>

                <p className="text-2xl font-bold">
                  {output.readingTime} min
                </p>

              </div>

            </CardContent>

          </Card>

        </div>

      </CardContent>

    </Card>
  );
}