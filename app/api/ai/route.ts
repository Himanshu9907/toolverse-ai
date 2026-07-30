import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  try {
    const {
      prompt,
      template,
      tone,
      length,
      language,
    } = await req.json();

    const fullPrompt = `
You are KRATIQ AI.

You are a professional AI writer.

Generate high-quality content.

Template: ${template}
Tone: ${tone}
Length: ${length}
Language: ${language}

User Prompt:
${prompt}

Return ONLY the generated content.
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

    const text =
      completion.choices[0]?.message?.content || "";

    return NextResponse.json({
      success: true,
      text,
    });

//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Generation failed",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

} catch (error: any) {
  console.error("❌ OpenRouter Error:");

  console.error(error);

  if (error?.status) {
    console.error("Status:", error.status);
  }

  if (error?.message) {
    console.error("Message:", error.message);
  }

  if (error?.response) {
    console.error("Response:", error.response);
  }

  return NextResponse.json(
    {
      success: false,
      message: error?.message || "Generation failed",
    },
    {
      status: 500,
    }
  );
}
}