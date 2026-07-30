// "use client";

// import type {
//   AIGeneratorInput,
//   AITemplate,
//   AITone,
//   AILength,
//   AILanguage,
// } from "@/types/ai";

// import {
//   Button,
// } from "@/components/ui/button";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import {
//   Textarea,
// } from "@/components/ui/textarea";

// // import {
// //   Label,
// // } from "@/components/ui/label";

// interface InputPanelProps {

//   input: AIGeneratorInput;

//   loading: boolean;

//   onChange: (
//     values: Partial<AIGeneratorInput>
//   ) => void;

//   onGenerate: () => void;

//   onClear: () => void;

// }

// const templates: {
//   value: AITemplate;
//   label: string;
// }[] = [

//   { value: "general", label: "General" },

//   { value: "blog-intro", label: "Blog Intro" },

//   { value: "blog-outline", label: "Blog Outline" },

//   {
//     value: "product-description",
//     label: "Product Description",
//   },

//   {
//     value: "instagram-caption",
//     label: "Instagram Caption",
//   },

//   {
//     value: "youtube-description",
//     label: "YouTube Description",
//   },

//   { value: "email", label: "Email" },

//   {
//     value: "cover-letter",
//     label: "Cover Letter",
//   },

//   {
//     value: "resume-summary",
//     label: "Resume Summary",
//   },

//   {
//     value: "facebook-post",
//     label: "Facebook Post",
//   },

//   {
//     value: "linkedin-post",
//     label: "LinkedIn Post",
//   },

//   { value: "tweet", label: "Tweet" },

// ];

// const tones: {
//   value: AITone;
//   label: string;
// }[] = [

//   { value: "professional", label: "Professional" },

//   { value: "casual", label: "Casual" },

//   { value: "friendly", label: "Friendly" },

//   { value: "formal", label: "Formal" },

//   { value: "creative", label: "Creative" },

//   { value: "marketing", label: "Marketing" },

//   { value: "persuasive", label: "Persuasive" },

//   { value: "funny", label: "Funny" },

// ];

// const lengths: {
//   value: AILength;
//   label: string;
// }[] = [

//   { value: "short", label: "Short" },

//   { value: "medium", label: "Medium" },

//   { value: "long", label: "Long" },

// ];

// const languages: {
//   value: AILanguage;
//   label: string;
// }[] = [

//   { value: "english", label: "English" },

//   { value: "hindi", label: "Hindi" },

//   { value: "hinglish", label: "Hinglish" },

// ];

// export function InputPanel({

//   input,

//   loading,

//   onChange,

//   onGenerate,

//   onClear,

// }: InputPanelProps) {

//   return (

//     // <Card>
//     <Card className="rounded-2xl border border-white/10 bg-zinc-900/60 shadow-xl backdrop-blur-xl">

//       <CardHeader>

//         {/* <CardTitle>

//           AI Text Generator

//         </CardTitle> */}

//       <CardTitle className="text-2xl font-bold">
//   ✨ AI Text Generator
// </CardTitle>

// <p className="text-sm text-muted-foreground">
//   Create blogs, emails, captions, product descriptions and more.
// </p>

//       </CardHeader>

//       {/* <CardContent className="space-y-6"> */}
//       <CardContent className="space-y-7">

//         {/* Prompt */}

//         <div className="space-y-2">

//           <label className="text-sm font-semibold text-zinc-200">
//   Prompt
// </label>

//           <Textarea

//             // rows={8}
//               rows={10}
//   className="resize-none rounded-xl border-white/10 focus-visible:ring-2 focus-visible:ring-violet-500"

//             placeholder="Describe what you want AI to generate..."

//             value={input.prompt}

//             onChange={(e) =>

//               onChange({

//                 prompt: e.target.value,

//               })

//             }

//           />

//         </div>

//         {/* Template */}

//         <div className="space-y-2">

//          <label className="text-sm font-medium">
//   Template
// </label>

//           <select

//             // className="w-full rounded-md border bg-background p-2"

//             className="h-11 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 transition focus:border-violet-500 focus:outline-none"

//             value={input.template}

//             onChange={(e) =>

//               onChange({

//                 template:
//                   e.target.value as AITemplate,

//               })

//             }

//           >

//             {templates.map((item) => (

//               <option

//                 key={item.value}

//                 value={item.value}

//               >

//                 {item.label}

//               </option>

//             ))}

//           </select>

//         </div>

//         {/* Tone */}

//         <div className="space-y-2">

//          <label className="text-sm font-medium">
//   Tone
// </label>

//           <select

//             className="w-full rounded-md border bg-background p-2"

//             value={input.tone}

//             onChange={(e) =>

//               onChange({

//                 tone:
//                   e.target.value as AITone,

//               })

//             }

//           >

//             {tones.map((item) => (

//               <option

//                 key={item.value}

//                 value={item.value}

//               >

//                 {item.label}

//               </option>

//             ))}

//           </select>

//         </div>

//         {/* Length */}

//         <div className="space-y-2">

//           <label className="text-sm font-medium">
//   Length
// </label>

//           <select

//             className="w-full rounded-md border bg-background p-2"

//             value={input.length}

//             onChange={(e) =>

//               onChange({

//                 length:
//                   e.target.value as AILength,

//               })

//             }

//           >

//             {lengths.map((item) => (

//               <option

//                 key={item.value}

//                 value={item.value}

//               >

//                 {item.label}

//               </option>

//             ))}

//           </select>

//         </div>

//         {/* Language */}

//         <div className="space-y-2">

//           <label className="text-sm font-medium">
//   Language
// </label>

//           <select

//             className="w-full rounded-md border bg-background p-2"

//             value={input.language}

//             onChange={(e) =>

//               onChange({

//                 language:
//                   e.target.value as AILanguage,

//               })

//             }

//           >

//             {languages.map((item) => (

//               <option

//                 key={item.value}

//                 value={item.value}

//               >

//                 {item.label}

//               </option>

//             ))}

//           </select>

//         </div>

//         {/* Buttons */}

//         <div className="flex gap-3">

//           <Button

//             // className="flex-1"

//             className="h-12 flex-1 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition-all"

//             disabled={loading}

//             onClick={onGenerate}

//           >

//             {/* {loading
//               ? "Generating..."
//               : "Generate"} */}

//               {loading ? "Generating..." : "✨ Generate with AI"}

//           </Button>

//           <Button

//             // variant="outline"

//             variant="outline"
//   className="h-12 rounded-xl"
 
//             onClick={onClear}

//           >

//             Clear

//           </Button>

//         </div>

//       </CardContent>

//     </Card>

//   );

// }

"use client";

import type {
  AIGeneratorInput,
  AITemplate,
  AITone,
  AILength,
  AILanguage,
} from "@/types/ai";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";

interface InputPanelProps {
  input: AIGeneratorInput;
  loading: boolean;
  onChange: (
    values: Partial<AIGeneratorInput>
  ) => void;
  onGenerate: () => void;
  onClear: () => void;
}

const templates: { value: AITemplate; label: string }[] = [
  { value: "general", label: "General" },
  { value: "blog-intro", label: "Blog Intro" },
  { value: "blog-outline", label: "Blog Outline" },
  {
    value: "product-description",
    label: "Product Description",
  },
  {
    value: "instagram-caption",
    label: "Instagram Caption",
  },
  {
    value: "youtube-description",
    label: "YouTube Description",
  },
  { value: "email", label: "Email" },
  {
    value: "cover-letter",
    label: "Cover Letter",
  },
  {
    value: "resume-summary",
    label: "Resume Summary",
  },
  {
    value: "facebook-post",
    label: "Facebook Post",
  },
  {
    value: "linkedin-post",
    label: "LinkedIn Post",
  },
  { value: "tweet", label: "Tweet" },
];

const tones: { value: AITone; label: string }[] = [
  { value: "professional", label: "Professional" },
  { value: "casual", label: "Casual" },
  { value: "friendly", label: "Friendly" },
  { value: "formal", label: "Formal" },
  { value: "creative", label: "Creative" },
  { value: "marketing", label: "Marketing" },
  { value: "persuasive", label: "Persuasive" },
  { value: "funny", label: "Funny" },
];

const lengths: { value: AILength; label: string }[] = [
  { value: "short", label: "Short" },
  { value: "medium", label: "Medium" },
  { value: "long", label: "Long" },
];

const languages: { value: AILanguage; label: string }[] = [
  { value: "english", label: "English" },
  { value: "hindi", label: "Hindi" },
  { value: "hinglish", label: "Hinglish" },
];

export function InputPanel({
  input,
  loading,
  onChange,
  onGenerate,
  onClear,
}: InputPanelProps) {
  return (
    <Card className="rounded-2xl border border-border bg-card shadow-sm">

      <CardHeader>

        <CardTitle className="text-2xl font-bold">
          ✨ AI Text Generator
        </CardTitle>

        <p className="text-sm text-muted-foreground">
          Create blogs, emails, captions, product descriptions
          and more using KRATIQ AI.
        </p>

      </CardHeader>

      <CardContent className="space-y-7">

        {/* Prompt */}

        <div className="space-y-2">

          <label className="text-sm font-semibold text-foreground">
            Prompt
          </label>

          <Textarea
            rows={10}
            placeholder="Describe what you want AI to generate..."
            value={input.prompt}
            onChange={(e) =>
              onChange({
                prompt: e.target.value,
              })
            }
            className="resize-none rounded-xl bg-background"
          />

        </div>

        {/* Template */}

        <div className="space-y-2">

          <label className="text-sm font-semibold text-foreground">
            Template
          </label>

          <select
            className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-ring"
            value={input.template}
            onChange={(e) =>
              onChange({
                template: e.target.value as AITemplate,
              })
            }
          >
            {templates.map((item) => (
              <option
                key={item.value}
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>

        </div>

        {/* Tone */}
                <div className="space-y-2">

          <label className="text-sm font-semibold text-foreground">
            Tone
          </label>

          <select
            className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-ring"
            value={input.tone}
            onChange={(e) =>
              onChange({
                tone: e.target.value as AITone,
              })
            }
          >
            {tones.map((item) => (
              <option
                key={item.value}
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>

        </div>

        {/* Length */}

        <div className="space-y-2">

          <label className="text-sm font-semibold text-foreground">
            Length
          </label>

          <select
            className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-ring"
            value={input.length}
            onChange={(e) =>
              onChange({
                length: e.target.value as AILength,
              })
            }
          >
            {lengths.map((item) => (
              <option
                key={item.value}
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>

        </div>

        {/* Language */}

        <div className="space-y-2">

          <label className="text-sm font-semibold text-foreground">
            Language
          </label>

          <select
            className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-ring"
            value={input.language}
            onChange={(e) =>
              onChange({
                language: e.target.value as AILanguage,
              })
            }
          >
            {languages.map((item) => (
              <option
                key={item.value}
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>

        </div>
                {/* Buttons */}

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">

          <Button
            className="h-12 flex-1 rounded-xl"
            disabled={loading}
            onClick={onGenerate}
          >
            {loading ? (
              <>
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Generating...
              </>
            ) : (
              "✨ Generate with AI"
            )}
          </Button>

          <Button
            variant="outline"
            className="h-12 rounded-xl"
            onClick={onClear}
          >
            Clear
          </Button>

        </div>

      </CardContent>

    </Card>
  );
}