import type {
  AITemplate,
  AITone,
  AILanguage,
  AILength,
} from "@/types/ai";

export interface PromptTemplate {

  title: string;

  instruction: string;

}

export const PROMPT_TEMPLATES: Record<
  AITemplate,
  PromptTemplate
> = {

  general: {
    title: "General",
    instruction:
      "Write high-quality content based on the user's request.",
  },

  "blog-intro": {
    title: "Blog Introduction",
    instruction:
      "Write an engaging blog introduction.",
  },

  "blog-outline": {
    title: "Blog Outline",
    instruction:
      "Create a detailed SEO-friendly blog outline.",
  },

  "product-description": {
    title: "Product Description",
    instruction:
      "Write a persuasive product description.",
  },

  "instagram-caption": {
    title: "Instagram Caption",
    instruction:
      "Write an engaging Instagram caption with emojis.",
  },

  "youtube-description": {
    title: "YouTube Description",
    instruction:
      "Write an SEO-friendly YouTube description.",
  },

  email: {
    title: "Email",
    instruction:
      "Write a professional email.",
  },

  "cover-letter": {
    title: "Cover Letter",
    instruction:
      "Write a professional cover letter.",
  },

  "resume-summary": {
    title: "Resume Summary",
    instruction:
      "Write a professional resume summary.",
  },

  "facebook-post": {
    title: "Facebook Post",
    instruction:
      "Write an engaging Facebook post.",
  },

  "linkedin-post": {
    title: "LinkedIn Post",
    instruction:
      "Write a professional LinkedIn post.",
  },

  tweet: {
    title: "Tweet",
    instruction:
      "Write a short engaging tweet.",
  },

};

/* ============================================
   Tone Labels
============================================ */

export const TONE_LABELS: Record<
  AITone,
  string
> = {

  professional: "Professional",

  casual: "Casual",

  friendly: "Friendly",

  formal: "Formal",

  creative: "Creative",

  marketing: "Marketing",

  persuasive: "Persuasive",

  funny: "Funny",

};

/* ============================================
   Length Labels
============================================ */

export const LENGTH_LABELS: Record<
  AILength,
  string
> = {

  short: "Short",

  medium: "Medium",

  long: "Long",

};

/* ============================================
   Language Labels
============================================ */

export const LANGUAGE_LABELS: Record<
  AILanguage,
  string
> = {

  english: "English",

  hindi: "Hindi",

  hinglish: "Hinglish",

};