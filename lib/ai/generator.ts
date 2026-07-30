import type {
  AIGeneratorInput,
  AIGeneratorOutput,
} from "@/types/ai";

import {
  PROMPT_TEMPLATES,
  TONE_LABELS,
  LENGTH_LABELS,
  LANGUAGE_LABELS,
} from "./prompts";

/* ============================================
   Word Count
============================================ */

function countWords(
  text: string
) {

  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

}

/* ============================================
   Reading Time
============================================ */

function readingTime(
  words: number
) {

  return Math.max(
    1,
    Math.ceil(words / 200)
  );

}

/* ============================================
   Generate Dummy Content
============================================ */

export async function generateText(

  input: AIGeneratorInput

): Promise<AIGeneratorOutput> {

  const template =
    PROMPT_TEMPLATES[
      input.template
    ];

  const text = `
${template.title}

${template.instruction}

Prompt:
${input.prompt}

Tone:
${TONE_LABELS[input.tone]}

Length:
${LENGTH_LABELS[input.length]}

Language:
${LANGUAGE_LABELS[input.language]}

--------------------------------------------------

This is a placeholder response.

Later this function will generate
real AI content using OpenAI,
Gemini, Claude or OpenRouter.

KRATIQ AI Generator
`;

  const words =
    countWords(text);

  return {

    text,

    words,

    characters:
      text.length,

    readingTime:
      readingTime(words),

  };

}