import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      prompt,
      negativePrompt = "",
      style = "Realistic",
      aspectRatio = "1:1",
      count = 1,
    } = body;

    if (!prompt?.trim()) {
      return NextResponse.json(
        {
          success: false,
          error: "Prompt is required.",
        },
        {
          status: 400,
        }
      );
    }

    // Better prompt
    const enhancedPrompt = [
      prompt.trim(),
      style !== "Realistic" ? style : "",
      negativePrompt
        ? `without ${negativePrompt}`
        : "",
    ]
      .filter(Boolean)
      .join(", ");

    const encodedPrompt = encodeURIComponent(
      enhancedPrompt
    );

    // Aspect Ratio
    let width = 1024;
    let height = 1024;

    switch (aspectRatio) {
      case "16:9":
        width = 1280;
        height = 720;
        break;

      case "9:16":
        width = 720;
        height = 1280;
        break;

      case "4:3":
        width = 1024;
        height = 768;
        break;

      case "3:4":
        width = 768;
        height = 1024;
        break;

      default:
        width = 1024;
        height = 1024;
    }

    const images: string[] = [];

    for (let i = 0; i < Number(count); i++) {
      const seed = Math.floor(
        Math.random() * 2147483647
      );

      const imageUrl =
        `https://image.pollinations.ai/prompt/${encodedPrompt}` +
        `?model=flux` +
        `&width=${width}` +
        `&height=${height}` +
        `&seed=${seed}` +
        `&nologo=true`;

      images.push(imageUrl);

      console.log("Generated:", imageUrl);
    }

    return NextResponse.json({
      success: true,
      images,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Image generation failed.",
      },
      {
        status: 500,
      }
    );
  }
}