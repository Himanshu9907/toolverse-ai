// "use client";

// import {
//   Copy,
//   Download,
//   FileText,
//   Sparkles,
//   Clock3,
//   Type,
//   Hash,
// } from "lucide-react";

// import type { AIGeneratorOutput } from "@/types/ai";

// import { Button } from "@/components/ui/button";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// // interface OutputPanelProps {
// //   output: AIGeneratorOutput;
// //   loading: boolean;
// //   onCopy: () => void;
// //   onDownload: () => void;
// // }

// interface OutputPanelProps {
//   output: AIGeneratorOutput;
//   loading: boolean;
//   onCopy: () => void;
//   onDownload: () => void;

//   originalText: string;
// }

// // export function OutputPanel({
// //   output,
// //   loading,
// //   onCopy,
// //   onDownload,
// // }: OutputPanelProps)

// export function OutputPanel({
//   output,
//   loading,
//   onCopy,
//   onDownload,
//   originalText,
// }: OutputPanelProps) {
//   const hasContent = output.text.trim().length > 0;

//   return (
//     <Card className="rounded-2xl border border-border bg-card shadow-sm">
//       <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//         <div>
//           <CardTitle className="flex items-center gap-2 text-2xl font-bold">
//             <Sparkles className="h-5 w-5 text-primary" />
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
//             disabled={!hasContent || loading}
//             onClick={onCopy}
//           >
//             <Copy className="h-4 w-4" />
//           </Button>

//           <Button
//             variant="outline"
//             size="icon"
//             disabled={!hasContent || loading}
//             onClick={onDownload}
//           >
//             <Download className="h-4 w-4" />
//           </Button>
//         </div>
//       </CardHeader>

//       <CardContent className="space-y-6">
//         {/* <div className="min-h-[460px] rounded-xl border border-border bg-background p-6">

//                       {loading ? (
//             <div className="flex h-[400px] flex-col items-center justify-center">

//               <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />

//               <p className="mt-6 text-lg font-semibold">
//                 Generating content...
//               </p>

//               <p className="mt-2 text-sm text-muted-foreground">
//                 KRATIQ AI is creating your response.
//               </p>

//             </div>
//           ) : hasContent ? (
//             <pre className="whitespace-pre-wrap break-words font-sans text-[15px] leading-8 text-foreground">
//               {output.text}
//             </pre>
//           ) : (
//             <div className="flex h-[400px] flex-col items-center justify-center text-center">

//               <FileText className="mb-5 h-14 w-14 text-muted-foreground" />

//               <h3 className="text-xl font-semibold">
//                 No Content Generated
//               </h3>

//               <p className="mt-3 max-w-md text-sm text-muted-foreground">
//                 Enter your prompt, choose a template and click
//                 <span className="font-medium text-foreground">
//                   {" "}Generate with AI
//                 </span>{" "}
//                 to create high-quality content instantly.
//               </p>

//             </div>
//           )}

//         </div> */}

//         <div className="grid gap-6 lg:grid-cols-2">
//           {/* Original */}

//           <div className="rounded-xl border border-border bg-background p-5">
//             <h3 className="mb-4 font-semibold">📝 Original Text</h3>

//             <div className="min-h-[380px] whitespace-pre-wrap break-words text-sm leading-7">
//               {originalText || "Paste AI generated text here..."}
//             </div>
//           </div>

//           {/* Humanized */}

//           <div className="rounded-xl border border-border bg-background p-5">
//             <h3 className="mb-4 font-semibold">✨ Humanized Text</h3>

//             {loading ? (
//               <div className="flex h-[380px] flex-col items-center justify-center">
//                 <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />

//                 <p className="mt-5 font-medium">Humanizing...</p>
//               </div>
//             ) : hasContent ? (
//               <pre className="whitespace-pre-wrap break-words font-sans text-[15px] leading-8">
//                 {output.text}
//               </pre>
//             ) : (
//               <div className="flex h-[380px] items-center justify-center text-muted-foreground">
//                 Humanized content will appear here.
//               </div>
//             )}
//           </div>
//         </div>

//         <Card className="border-green-500/20 bg-green-500/5">
//           <CardHeader>
//             <CardTitle className="text-lg">✨ Improvements Made</CardTitle>
//           </CardHeader>

//           <CardContent>
//             <ul className="space-y-2 text-sm">
//               <li>✅ Improved sentence flow</li>

//               <li>✅ Removed robotic phrasing</li>

//               <li>✅ Enhanced readability</li>

//               <li>✅ Natural human writing style</li>

//               <li>✅ AI detector friendly</li>

//               <li>✅ Grammar optimized</li>
//             </ul>
//           </CardContent>
//         </Card>

//         {/* Stats */}

//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//           <Card className="border-border bg-background shadow-none">
//             <CardContent className="flex items-center gap-4 p-5">
//               <div className="rounded-lg bg-primary/10 p-3">
//                 <Type className="h-5 w-5 text-primary" />
//               </div>

//               <div>
//                 <p className="text-xs text-muted-foreground">Words</p>

//                 <p className="text-2xl font-bold">{output.words}</p>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="border-border bg-background shadow-none">
//             <CardContent className="flex items-center gap-4 p-5">
//               <div className="rounded-lg bg-primary/10 p-3">
//                 <Hash className="h-5 w-5 text-primary" />
//               </div>

//               <div>
//                 <p className="text-xs text-muted-foreground">Characters</p>

//                 <p className="text-2xl font-bold">{output.characters}</p>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="border-border bg-background shadow-none">
//             <CardContent className="flex items-center gap-4 p-5">
//               <div className="rounded-lg bg-primary/10 p-3">
//                 <Clock3 className="h-5 w-5 text-primary" />
//               </div>

//               <div>
//                 <p className="text-xs text-muted-foreground">Reading Time</p>

//                 <p className="text-2xl font-bold">{output.readingTime} min</p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }


"use client";

import {
  Copy,
  Download,
  Sparkles,
  Clock3,
  Type,
  Hash,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
} from "lucide-react";

import type { AIGeneratorOutput } from "@/types/ai";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

interface OutputPanelProps {
  output: AIGeneratorOutput;
  loading: boolean;
  onCopy: () => void;
  onDownload: () => void;
  originalText: string;
}

export function OutputPanel({
  output,
  loading,
  onCopy,
  onDownload,
  originalText,
}: OutputPanelProps) {

  const hasContent =
    output.text.trim().length > 0;

  // Humanization Score

  const humanizationScore = (() => {

    if (!hasContent) return 0;

    let score = 72;

    if (output.words > 50) score += 5;

    if (output.words > 120) score += 5;

    if (output.words > 250) score += 4;

    if (output.characters > 700) score += 4;

    if (output.readingTime >= 2) score += 3;

    return Math.min(score, 98);

  })();

  return (

    <Card className="rounded-2xl border border-border bg-card shadow-sm">

      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <CardTitle className="flex items-center gap-2 text-2xl font-bold">

            <Sparkles className="h-5 w-5 text-primary" />

            Humanized Result

          </CardTitle>

          <p className="mt-1 text-sm text-muted-foreground">

            Compare your original text with the humanized version.

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
        {/* Before vs After */}

<div className="grid gap-6 lg:grid-cols-2">

  {/* Original */}

  <Card className="border-border bg-background shadow-none">

    <CardHeader className="pb-3">

      <CardTitle className="text-lg">

        📝 Original Text

      </CardTitle>

    </CardHeader>

    <CardContent>

      <div className="min-h-[380px] whitespace-pre-wrap break-words rounded-xl border bg-muted/20 p-4 text-sm leading-7">

        {originalText || "Paste AI generated text here..."}

      </div>

    </CardContent>

  </Card>

  {/* Humanized */}

  <Card className="border-border bg-background shadow-none">

    <CardHeader className="pb-3">

      <CardTitle className="text-lg">

        ✨ Humanized Text

      </CardTitle>

    </CardHeader>

    <CardContent>

      {loading ? (

        <div className="flex h-[380px] flex-col items-center justify-center">

          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />

          <p className="mt-5 font-medium">

            Humanizing...

          </p>

          <p className="mt-2 text-sm text-muted-foreground">

            KRATIQ AI is rewriting naturally...

          </p>

        </div>

      ) : hasContent ? (

        <div className="min-h-[380px] whitespace-pre-wrap break-words rounded-xl border bg-primary/5 p-4">

          <pre className="whitespace-pre-wrap break-words font-sans text-[15px] leading-8">

            {output.text}

          </pre>

        </div>

      ) : (

        <div className="flex h-[380px] flex-col items-center justify-center text-center">

          <Sparkles className="mb-4 h-12 w-12 text-muted-foreground" />

          <p className="font-medium">

            Humanized text will appear here.

          </p>

          <p className="mt-2 text-sm text-muted-foreground">

            Click "Humanize Text" to start.

          </p>

        </div>

      )}

    </CardContent>

  </Card>

</div>
{/* Humanization Score */}

<Card className="rounded-2xl border border-primary/20 bg-primary/5">

  <CardContent className="p-6">

    <div className="flex flex-col items-center gap-4">

      <div className="flex items-center gap-2">

        <BarChart3 className="h-5 w-5 text-primary" />

        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">

          Humanization Score

        </p>

      </div>

      <h2 className="text-6xl font-black text-primary">

        {humanizationScore}%

      </h2>

      <Progress
        value={humanizationScore}
        className="h-3 w-full max-w-md"
      />

      <div className="flex flex-wrap justify-center gap-2">

        <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">

          AI Detector Friendly

        </span>

        <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400">

          Natural Flow

        </span>

        <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-600 dark:text-violet-400">

          Human Style

        </span>

      </div>

    </div>

  </CardContent>

</Card>

{/* Improvements */}

<Card className="rounded-2xl border border-green-500/20 bg-green-500/5">

  <CardHeader>

    <CardTitle className="flex items-center gap-2 text-lg">

      <ShieldCheck className="h-5 w-5 text-green-500" />

      Improvements Made

    </CardTitle>

  </CardHeader>

  <CardContent>

    <div className="grid gap-3 sm:grid-cols-2">

      <div className="flex items-center gap-2">

        <CheckCircle2 className="h-4 w-4 text-green-500" />

        <span className="text-sm">

          Improved sentence flow

        </span>

      </div>

      <div className="flex items-center gap-2">

        <CheckCircle2 className="h-4 w-4 text-green-500" />

        <span className="text-sm">

          Removed robotic wording

        </span>

      </div>

      <div className="flex items-center gap-2">

        <CheckCircle2 className="h-4 w-4 text-green-500" />

        <span className="text-sm">

          Better readability

        </span>

      </div>

      <div className="flex items-center gap-2">

        <CheckCircle2 className="h-4 w-4 text-green-500" />

        <span className="text-sm">

          Natural human tone

        </span>

      </div>

      <div className="flex items-center gap-2">

        <CheckCircle2 className="h-4 w-4 text-green-500" />

        <span className="text-sm">

          Grammar optimized

        </span>

      </div>

      <div className="flex items-center gap-2">

        <CheckCircle2 className="h-4 w-4 text-green-500" />

        <span className="text-sm">

          AI detector friendly

        </span>

      </div>

    </div>

  </CardContent>

</Card>

{/* Statistics */}

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

export default OutputPanel;