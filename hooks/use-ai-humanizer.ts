"use client";

import { useCallback, useState } from "react";

export interface AIHumanizerInput {
  text: string;
  style: string;
  level: string;
  language: string;
   aiSafe: boolean;
}

export interface AIHumanizerOutput {
  text: string;
  words: number;
  characters: number;
  readingTime: number;
}

const DEFAULT_INPUT: AIHumanizerInput = {
  text: "",
  style: "Professional",
  level: "Natural",
  language: "English",
  aiSafe: true,
};

const EMPTY_OUTPUT: AIHumanizerOutput = {
  text: "",
  words: 0,
  characters: 0,
  readingTime: 0,
};

export function useAIHumanizer() {
  const [loading, setLoading] = useState(false);

  const [input, setInput] =
    useState<AIHumanizerInput>(DEFAULT_INPUT);

  const [output, setOutput] =
    useState<AIHumanizerOutput>(EMPTY_OUTPUT);

  const updateInput = useCallback(
    (values: Partial<AIHumanizerInput>) => {
      setInput((prev) => ({
        ...prev,
        ...values,
      }));
    },
    []
  );

  const humanize = useCallback(async () => {
    if (!input.text.trim()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/ai-humanizer", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(input),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Humanization failed"
        );
      }

      const text = data.text ?? "";

      const words = text
        .trim()
        .split(/\s+/)
        .filter(Boolean).length;

      setOutput({
        text,
        words,
        characters: text.length,
        readingTime: Math.max(
          1,
          Math.ceil(words / 200)
        ),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [input]);

  const clear = useCallback(() => {
    setInput(DEFAULT_INPUT);
    setOutput(EMPTY_OUTPUT);
  }, []);

  const copy = useCallback(async () => {
    if (!output.text) return;

    await navigator.clipboard.writeText(
      output.text
    );
  }, [output.text]);

  const download = useCallback(() => {
    if (!output.text) return;

    const blob = new Blob(
      [output.text],
      {
        type: "text/plain",
      }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "kratiq-humanized.txt";

    a.click();

    URL.revokeObjectURL(url);
  }, [output.text]);

  return {
    loading,
    input,
    output,
    updateInput,
    humanize,
    clear,
    copy,
    download,
  };
}