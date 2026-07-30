// "use client";

// import { useState } from "react";

// export interface AIImageGeneratorInput {
//   prompt: string;
//   negativePrompt: string;
//   style: string;
//   aspectRatio: string;
//   count: number;
// }

// const RANDOM_PROMPTS = [
//   "A futuristic cyberpunk city at sunset",
//   "An astronaut riding a horse on Mars",
//   "A luxury black sports car in neon rain",
//   "Ultra realistic lion king wearing golden armor",
//   "Fantasy castle floating in the sky",
//   "A magical forest with glowing mushrooms",
//   "Samurai standing in heavy rain cinematic",
//   "Cute panda drinking coffee in Tokyo",
//   "Minimal luxury bedroom interior design",
//   "A dragon flying above snowy mountains",
// ];

// export function useAIImageGenerator() {
//   const [loading, setLoading] = useState(false);

//   const [images, setImages] = useState<string[]>([]);

//   const [input, setInput] =
//     useState<AIImageGeneratorInput>({
//       prompt: "",
//       negativePrompt: "",
//       style: "Realistic",
//       aspectRatio: "1:1",
//       count: 1,
//     });

//   const updateInput = (
//     values: Partial<AIImageGeneratorInput>
//   ) => {
//     setInput((prev) => ({
//       ...prev,
//       ...values,
//     }));
//   };

//   const randomPrompt = () => {
//     const prompt =
//       RANDOM_PROMPTS[
//         Math.floor(
//           Math.random() * RANDOM_PROMPTS.length
//         )
//       ];

//     setInput((prev) => ({
//       ...prev,
//       prompt,
//     }));
//   };
//     const generate = async () => {
//     if (!input.prompt.trim()) return;

//     setLoading(true);

//     try {
//     //   const response = await fetch("/api/image", {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify(input),
//     //   });

//     //   if (!response.ok) {
//     //     throw new Error("Failed to generate images");
//     //   }

//     const response = await fetch("/api/image", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(input),
// });

// console.log("STATUS:", response.status);

// const data = await response.json();

// console.log("API RESPONSE:", data);

// if (!response.ok) {
//   throw new Error(data.error || "Generation failed");
// }

// console.log("API RESPONSE", data);

// setImages(data.images ?? []);

//     //   const data = await response.json();

//     //   setImages(data.images || []);

// //     const data = await response.json();

// // console.log("API RESPONSE =>", data);

// // setImages(data.images || []);
// // const data = await response.json();

// console.log("API RESPONSE =>", data);

// console.log("IMAGES =>", data.images);

// setImages(data.images ?? []);
//     } catch (error) {
//       console.error(error);

//       alert("Image generation failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const regenerate = () => {
//     generate();
//   };

//   const clear = () => {
//     setImages([]);

//     setInput({
//       prompt: "",
//       negativePrompt: "",
//       style: "Realistic",
//       aspectRatio: "1:1",
//       count: 1,
//     });
//   };
//     const download = async () => {
//     if (images.length === 0) return;

//     for (let i = 0; i < images.length; i++) {
//       try {
//         const response = await fetch(images[i]);

//         const blob = await response.blob();

//         const blobUrl = URL.createObjectURL(blob);

//         const link = document.createElement("a");

//         link.href = blobUrl;
//         link.download = `kratiq-ai-${i + 1}.png`;

//         document.body.appendChild(link);

//         link.click();

//         document.body.removeChild(link);

//         URL.revokeObjectURL(blobUrl);
//       } catch (error) {
//         console.error("Download failed:", error);
//       }
//     }
//   };

//   return {
//     loading,
//     input,
//     images,

//     updateInput,

//     generate,
//     regenerate,

//     clear,

//     download,

//     randomPrompt,
//   };
// }

// export default useAIImageGenerator;


"use client";

import { useState } from "react";

export interface AIImageGeneratorInput {
  prompt: string;
  negativePrompt: string;
  style: string;
  aspectRatio: string;
  count: number;
}

const RANDOM_PROMPTS = [
  "A futuristic cyberpunk city at sunset",
  "An astronaut riding a horse on Mars",
  "A luxury black sports car in neon rain",
  "Ultra realistic lion king wearing golden armor",
  "Fantasy castle floating in the sky",
  "A magical forest with glowing mushrooms",
  "Samurai standing in heavy rain cinematic",
  "Cute panda drinking coffee in Tokyo",
  "Minimal luxury bedroom interior design",
  "A dragon flying above snowy mountains",
];

export function useAIImageGenerator() {
  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState<string[]>([]);

  const [input, setInput] =
    useState<AIImageGeneratorInput>({
      prompt: "",
      negativePrompt: "",
      style: "Realistic",
      aspectRatio: "1:1",
      count: 1,
    });

  const updateInput = (
    values: Partial<AIImageGeneratorInput>
  ) => {
    setInput((prev) => ({
      ...prev,
      ...values,
    }));
  };

  const randomPrompt = () => {
    const prompt =
      RANDOM_PROMPTS[
        Math.floor(
          Math.random() * RANDOM_PROMPTS.length
        )
      ];

    setInput((prev) => ({
      ...prev,
      prompt,
    }));
  };

  const generate = async () => {
    if (!input.prompt.trim()) return;

    setLoading(true);

    try {
      console.log("INPUT =>", input);

      const response = await fetch("/api/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      console.log("STATUS =>", response.status);

      const data = await response.json();

      console.log("API RESPONSE =>", data);

      if (!response.ok) {
        throw new Error(
          data.error || "Image generation failed"
        );
      }

      setImages(data.images ?? []);
    } catch (error) {
      console.error(error);

      alert("Image generation failed.");
    } finally {
      setLoading(false);
    }
  };

  const regenerate = () => {
    generate();
  };

  const clear = () => {
    setImages([]);

    setInput({
      prompt: "",
      negativePrompt: "",
      style: "Realistic",
      aspectRatio: "1:1",
      count: 1,
    });
  };

  const download = async () => {
    if (images.length === 0) return;

    for (let i = 0; i < images.length; i++) {
      try {
        const response = await fetch(images[i]);

        const blob = await response.blob();

        const url = URL.createObjectURL(blob);

        const link =
          document.createElement("a");

        link.href = url;
        link.download = `kratiq-ai-${i + 1}.png`;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return {
    loading,
    input,
    images,

    updateInput,

    generate,
    regenerate,

    clear,

    download,

    randomPrompt,
  };
}

export default useAIImageGenerator;