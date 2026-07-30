"use client";

import {
  Sparkles,
  Wand2,
  ImageIcon,
  Shuffle,
  RotateCcw,
} from "lucide-react";

import type { AIImageGeneratorInput } from "@/hooks/use-ai-image-generator";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface InputPanelProps {
  input: AIImageGeneratorInput;
  loading: boolean;

  onChange: (
    values: Partial<AIImageGeneratorInput>
  ) => void;

  onGenerate: () => void;

  onClear: () => void;

  onRandomPrompt: () => void;
}

const styles = [
  "Realistic",
  "Anime",
  "Cartoon",
  "3D Render",
  "Oil Painting",
  "Watercolor",
  "Fantasy",
  "Cyberpunk",
  "Pixel Art",
  "Minimal",
];

const aspectRatios = [
  {
    label: "Square",
    value: "1:1",
  },
  {
    label: "Portrait",
    value: "2:3",
  },
  {
    label: "Landscape",
    value: "16:9",
  },
];

const imageCounts = [1, 2, 3, 4];

export function InputPanel({
  input,
  loading,
  onChange,
  onGenerate,
  onClear,
  onRandomPrompt,
}: InputPanelProps) {
  return (
    <Card className="rounded-2xl border border-border bg-card shadow-sm">

      <CardHeader>

        <CardTitle className="flex items-center gap-2 text-2xl font-bold">

          <Sparkles className="h-5 w-5 text-primary" />

          AI Image Generator

        </CardTitle>

        <p className="text-sm text-muted-foreground">

          Generate beautiful AI images from simple text prompts.

        </p>

      </CardHeader>

      <CardContent className="space-y-7">

        {/* Prompt */}

        <div className="space-y-2">

          <label className="text-sm font-semibold">

            Prompt

          </label>

          <Textarea
            rows={8}
            placeholder="Describe the image you want to create..."
            value={input.prompt}
            onChange={(e) =>
              onChange({
                prompt: e.target.value,
              })
            }
            className="resize-none rounded-xl"
          />

          <div className="flex items-center justify-between text-xs text-muted-foreground">

            <span>

              {input.prompt.length} characters

            </span>

            <Button
              variant="ghost"
              size="sm"
              onClick={onRandomPrompt}
              className="h-8 gap-2"
            >

              <Shuffle className="h-4 w-4" />

              Random Prompt

            </Button>

          </div>

        </div>

        {/* Negative Prompt */}

        <div className="space-y-2">

          <label className="text-sm font-semibold">

            Negative Prompt

          </label>

          <Textarea
            rows={3}
            placeholder="Things you don't want in the image..."
            value={input.negativePrompt}
            onChange={(e) =>
              onChange({
                negativePrompt: e.target.value,
              })
            }
            className="resize-none rounded-xl"
          />

        </div>
                {/* Style */}

        <div className="space-y-2">

          <label className="flex items-center gap-2 text-sm font-semibold">

            <Wand2 className="h-4 w-4 text-primary" />

            Image Style

          </label>

          <select
            className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
            value={input.style}
            onChange={(e) =>
              onChange({
                style: e.target.value,
              })
            }
          >

            {styles.map((style) => (

              <option
                key={style}
                value={style}
              >

                {style}

              </option>

            ))}

          </select>

        </div>

        {/* Aspect Ratio */}

        <div className="space-y-2">

          <label className="flex items-center gap-2 text-sm font-semibold">

            <ImageIcon className="h-4 w-4 text-primary" />

            Aspect Ratio

          </label>

          <select
            className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
            value={input.aspectRatio}
            onChange={(e) =>
              onChange({
                aspectRatio: e.target.value,
              })
            }
          >

            {aspectRatios.map((ratio) => (

              <option
                key={ratio.value}
                value={ratio.value}
              >

                {ratio.label}

              </option>

            ))}

          </select>

        </div>

        {/* Number of Images */}

        {/* <div className="space-y-2">

          <label className="text-sm font-semibold">

            Number of Images

          </label>

          <select
            className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
            value={input.count}
            onChange={(e) =>
              onChange({
                count: Number(e.target.value),
              })
            }
          >

            {imageCounts.map((count) => (

              <option
                key={count}
                value={count}
              >

                {count}

              </option>

            ))}

          </select>

        </div> */}

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
              <>
                ✨ Generate Images
              </>
            )}

          </Button>

          <Button
            variant="outline"
            className="h-12 rounded-xl"
            onClick={onClear}
          >

            <RotateCcw className="mr-2 h-4 w-4" />

            Clear

          </Button>

        </div>

      </CardContent>

    </Card>

  );

}

export default InputPanel;