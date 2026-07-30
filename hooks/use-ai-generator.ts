// "use client";

// import { useCallback, useState } from "react";

// import { generateText } from "@/lib/ai/generator";

// import type {
//   AIGeneratorInput,
//   AIGeneratorOutput,
//   AIGeneratorState,
// } from "@/types/ai";

// const DEFAULT_INPUT: AIGeneratorInput = {

//   prompt: "",

//   template: "general",

//   tone: "professional",

//   length: "medium",

//   language: "english",

// };

// const EMPTY_OUTPUT: AIGeneratorOutput = {

//   text: "",

//   words: 0,

//   characters: 0,

//   readingTime: 0,

// };

// export function useAIGenerator() {

//   const [state, setState] =
//     useState<AIGeneratorState>({

//       loading: false,

//       input: DEFAULT_INPUT,

//       output: EMPTY_OUTPUT,

//     });

//   /* ============================================
//      Update Input
//   ============================================ */

//   const updateInput = useCallback(

//     (
//       values: Partial<AIGeneratorInput>
//     ) => {

//       setState((prev) => ({

//         ...prev,

//         input: {

//           ...prev.input,

//           ...values,

//         },

//       }));

//     },

//     []

//   );

//   /* ============================================
//      Generate
//   ============================================ */

//   const generate = useCallback(async () => {

//     if (
//       !state.input.prompt.trim()
//     ) return;

//     setState((prev) => ({

//       ...prev,

//       loading: true,

//     }));

//     try {

//       const result =
//         await generateText(
//           state.input
//         );

//       setState((prev) => ({

//         ...prev,

//         loading: false,

//         output: result,

//       }));

//     } catch (error) {

//       console.error(error);

//       setState((prev) => ({

//         ...prev,

//         loading: false,

//       }));

//     }

//   }, [state.input]);

//   /* ============================================
//      Clear
//   ============================================ */

//   const clear = useCallback(() => {

//     setState({

//       loading: false,

//       input: DEFAULT_INPUT,

//       output: EMPTY_OUTPUT,

//     });

//   }, []);

//   /* ============================================
//      Copy
//   ============================================ */

//   const copy = useCallback(async () => {

//     if (!state.output.text)
//       return;

//     await navigator.clipboard.writeText(

//       state.output.text

//     );

//   }, [state.output.text]);

//   /* ============================================
//      Download TXT
//   ============================================ */

//   const download = useCallback(() => {

//     if (!state.output.text)
//       return;

//     const blob =
//       new Blob(

//         [state.output.text],

//         {
//           type: "text/plain",
//         }

//       );

//     const url =
//       URL.createObjectURL(blob);

//     const a =
//       document.createElement("a");

//     a.href = url;

//     a.download =
//       "kratiq-ai-text.txt";

//     a.click();

//     URL.revokeObjectURL(url);

//   }, [state.output.text]);

//   return {

//     loading:
//       state.loading,

//     input:
//       state.input,

//     output:
//       state.output,

//     updateInput,

//     generate,

//     clear,

//     copy,

//     download,

//   };

// }

"use client";

import { useCallback, useState } from "react";

import type {
  AIGeneratorInput,
  AIGeneratorOutput,
  AIGeneratorState,
} from "@/types/ai";

const DEFAULT_INPUT: AIGeneratorInput = {
  prompt: "",
  template: "general",
  tone: "professional",
  length: "medium",
  language: "english",
};

const EMPTY_OUTPUT: AIGeneratorOutput = {
  text: "",
  words: 0,
  characters: 0,
  readingTime: 0,
};

export function useAIGenerator() {

  const [state, setState] =
    useState<AIGeneratorState>({
      loading: false,
      input: DEFAULT_INPUT,
      output: EMPTY_OUTPUT,
    });

  /* ============================= */

  const updateInput = useCallback(

    (values: Partial<AIGeneratorInput>) => {

      setState((prev) => ({
        ...prev,
        input: {
          ...prev.input,
          ...values,
        },
      }));

    },

    []

  );

  /* ============================= */

  const generate = useCallback(async () => {

     console.log("🔥 NEW HOOK RUNNING");

    if (!state.input.prompt.trim()) return;

    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    try {

      const response = await fetch("/api/ai", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(state.input),

      });

      const data = await response.json();

      if (!response.ok) {

        throw new Error(
          data.message || "Generation failed"
        );

      }

      const text =
        data.text ?? "";

      const words =
        text
          .trim()
          .split(/\s+/)
          .filter(Boolean).length;

      setState((prev) => ({

        ...prev,

        loading: false,

        output: {

          text,

          words,

          characters: text.length,

          readingTime: Math.max(
            1,
            Math.ceil(words / 200)
          ),

        },

      }));

    } catch (error) {

      console.error(error);

      setState((prev) => ({

        ...prev,

        loading: false,

      }));

    }

  }, [state.input]);

  /* ============================= */

  const clear = useCallback(() => {

    setState({

      loading: false,

      input: DEFAULT_INPUT,

      output: EMPTY_OUTPUT,

    });

  }, []);

  /* ============================= */

  const copy = useCallback(async () => {

    if (!state.output.text) return;

    await navigator.clipboard.writeText(
      state.output.text
    );

  }, [state.output.text]);

  /* ============================= */

  const download = useCallback(() => {

    if (!state.output.text) return;

    const blob = new Blob(
      [state.output.text],
      {
        type: "text/plain",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      "kratiq-ai.txt";

    a.click();

    URL.revokeObjectURL(url);

  }, [state.output.text]);

  return {

    loading: state.loading,

    input: state.input,

    output: state.output,

    updateInput,

    generate,

    clear,

    copy,

    download,

  };

}