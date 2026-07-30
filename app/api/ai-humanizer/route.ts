import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY!,
});

export async function POST(req: Request) {
  try {
//     const {
//       text,
//       style = "Professional",
//       level = "Natural",
//       language = "English",
//     } = await req.json();


const {
  text,
  style = "Professional",
  level = "Natural",
  language = "English",
  aiSafe = true,
} = await req.json();

    if (!text?.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Text is required.",
        },
        {
          status: 400,
        }
      );
    }

//     const prompt = `
// You are KRATIQ AI Humanizer.

// Your task is to rewrite AI-generated content so it sounds completely natural and human-written.

// Rules:

// - Preserve the original meaning.
// - Do not add new facts.
// - Do not remove important information.
// - Improve readability.
// - Use varied sentence lengths.
// - Remove robotic wording.
// - Make it engaging and natural.
// - Return ONLY the rewritten text.

// Humanization Level:
// ${level}

// Writing Style:
// ${style}

// Language:
// ${language}

// Text:

// ${text}
// `;

const fullPrompt = `
You are KRATIQ AI Humanizer.

Your task is to rewrite AI-generated text so that it sounds completely natural and human-written.

Rules:
- Preserve the exact meaning.
- Never remove important information.
- Remove robotic wording.
- Improve readability.
- Use natural sentence flow.
- Vary sentence length.
- Avoid repetitive structures.
- Keep grammar perfect.
- Keep formatting unless necessary.
- Never mention AI.
- Never explain what you changed.

Humanization Level:
${level}

Writing Style:
${style}

Language:
${language}

AI Detector Friendly:
${aiSafe ? "YES" : "NO"}

Original Text:

${text}

Return ONLY the rewritten text.
`;

    const completion = await client.chat.completions.create({
      model: "nvidia/nemotron-3-ultra-550b-a55b:free",
      messages: [
        {
          role: "user",
          content: fullPrompt,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      text: completion.choices[0]?.message?.content ?? "",
    });

  } catch (error: any) {
    console.error("❌ Humanizer Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ?? "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}