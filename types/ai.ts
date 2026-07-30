/* =========================================================
   Tone
========================================================= */

export type AITone =
  | "professional"
  | "casual"
  | "friendly"
  | "formal"
  | "creative"
  | "marketing"
  | "persuasive"
  | "funny";

/* =========================================================
   Length
========================================================= */

export type AILength =
  | "short"
  | "medium"
  | "long";

/* =========================================================
   Language
========================================================= */

export type AILanguage =
  | "english"
  | "hindi"
  | "hinglish";

/* =========================================================
   Templates
========================================================= */

export type AITemplate =
  | "general"
  | "blog-intro"
  | "blog-outline"
  | "product-description"
  | "instagram-caption"
  | "youtube-description"
  | "email"
  | "cover-letter"
  | "resume-summary"
  | "facebook-post"
  | "linkedin-post"
  | "tweet";

/* =========================================================
   Generator Input
========================================================= */

export interface AIGeneratorInput {

  prompt: string;

  template: AITemplate;

  tone: AITone;

  length: AILength;

  language: AILanguage;

}

/* =========================================================
   Generator Output
========================================================= */

export interface AIGeneratorOutput {

  text: string;

  words: number;

  characters: number;

  readingTime: number;

}

/* =========================================================
   Generator State
========================================================= */

export interface AIGeneratorState {

  loading: boolean;

  input: AIGeneratorInput;

  output: AIGeneratorOutput;

}

/* =========================================================
   History
========================================================= */

export interface AIHistoryItem {

  id: string;

  prompt: string;

  result: string;

  createdAt: Date;

}

export type HumanizerLevel =
  | "low"
  | "medium"
  | "high"
  | "maximum";

export type WritingStyle =
  | "professional"
  | "casual"
  | "academic"
  | "creative";

export interface AIHumanizerInput {
  text: string;
  level: HumanizerLevel;
  style: WritingStyle;
  language: "english" | "hindi" | "hinglish";
  aiSafe: boolean;
}