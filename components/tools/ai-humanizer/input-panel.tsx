"use client";

import { Sparkles, Wand2, Languages, RotateCcw } from "lucide-react";

import type { AIHumanizerInput } from "@/hooks/use-ai-humanizer";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

interface InputPanelProps {
  input: AIHumanizerInput;
  loading: boolean;
  onChange: (
    values: Partial<AIHumanizerInput>
  ) => void;
  onHumanize: () => void;
  onClear: () => void;
}

// const levels = [
//   "Basic",
//   "Natural",
//   "Advanced",
// ];

const levels = [
  "low",
  "medium",
  "high",
  "maximum",
];

const styles = [
  "Professional",
  "Casual",
  "Friendly",
  "Academic",
  "Marketing",
];

const languages = [
  "English",
  "Hindi",
  "Hinglish",
];



export function InputPanel({
  input,
  loading,
  onChange,
  onHumanize,
  onClear,
}: InputPanelProps) {
  return (
    <Card className="rounded-2xl border border-border bg-card shadow-sm">

      <CardHeader>

        <CardTitle className="flex items-center gap-2 text-2xl font-bold">

          <Sparkles className="h-5 w-5 text-primary" />

          AI Humanizer

        </CardTitle>

        <p className="text-sm text-muted-foreground">

          Transform AI-generated text into natural,
          human-like writing while preserving the
          original meaning.

        </p>

      </CardHeader>

      <CardContent className="space-y-7">

        {/* Text */}

        <div className="space-y-2">

          <label className="text-sm font-semibold text-foreground">
            AI Generated Text
          </label>

          <Textarea
            rows={12}
            placeholder="Paste AI generated text here..."
            value={input.text}
            onChange={(e) =>
              onChange({
                text: e.target.value,
              })
            }
            className="resize-none rounded-xl bg-background"
          />

          <div className="flex items-center justify-between text-xs text-muted-foreground">

            <span>
              {input.text.length} characters
            </span>

            <span>
              {input.text
                .trim()
                .split(/\s+/)
                .filter(Boolean).length} words
            </span>

          </div>

        </div>

        {/* Humanization Level */}

        <div className="space-y-2">

          <label className="flex items-center gap-2 text-sm font-semibold text-foreground">

            <Wand2 className="h-4 w-4 text-primary" />

            Humanization Level

          </label>

          <select
            className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-ring"
            value={input.level}
            onChange={(e) =>
              onChange({
                level: e.target.value,
              })
            }
          >
            {levels.map((item) => (
            //   <option key={item} value={item}>
            //     {item}
            //   </option>
            <option key={item} value={item}>
  {item.charAt(0).toUpperCase() + item.slice(1)}
</option>
            ))}
          </select>

        </div>

        {/* Writing Style */}

        <div className="space-y-2">

          <label className="flex items-center gap-2 text-sm font-semibold text-foreground">

            <Sparkles className="h-4 w-4 text-primary" />

            Writing Style

          </label>

          <select
            className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-ring"
            value={input.style}
            onChange={(e) =>
              onChange({
                style: e.target.value,
              })
            }
          >
            {styles.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        {/* Language */}

        <div className="space-y-2">

          <label className="flex items-center gap-2 text-sm font-semibold text-foreground">

            <Languages className="h-4 w-4 text-primary" />

            Language

          </label>

          <select
            className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:ring-2 focus:ring-ring"
            value={input.language}
            onChange={(e) =>
              onChange({
                language: e.target.value,
              })
            }
          >
            {languages.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

        <div className="flex items-center justify-between rounded-xl border border-border p-4">

  <div>

    <p className="font-medium">
      AI Detector Friendly
    </p>

    <p className="text-sm text-muted-foreground">
      Make the output sound more natural.
    </p>

  </div>

  <Switch

    checked={input.aiSafe}

    onCheckedChange={(checked)=>

      onChange({
        aiSafe: checked,
      })

    }

  />

</div>

        {/* Buttons */}

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">

          <Button
            className="h-12 flex-1 rounded-xl"
            disabled={loading}
            onClick={onHumanize}
          >

            {loading ? (
              <>
                <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Humanizing...
              </>
            ) : (
              "✨ Humanize Text"
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