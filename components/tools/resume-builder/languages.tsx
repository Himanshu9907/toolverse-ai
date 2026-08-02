"use client";

import type { ResumeData, Language } from "@/types/resume";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  Languages,
  Plus,
  Trash2,
} from "lucide-react";

interface Props {
  resume: ResumeData;
  setResume: React.Dispatch<
    React.SetStateAction<ResumeData>
  >;
}

const LEVELS = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Native",
] as const;

export function LanguagesSection({
  resume,
  setResume,
}: Props) {

  const addLanguage = () => {
    setResume((prev) => ({
      ...prev,

      languages: [
        ...prev.languages,

        {
          name: "",
          level: "Intermediate",
        },
      ],
    }));
  };

  const updateLanguage = (
    index: number,
    field: keyof Language,
    value: string
  ) => {
    const updated = [...resume.languages];

    updated[index] = {
      ...updated[index],

      [field]: value,
    };

    setResume((prev) => ({
      ...prev,

      languages: updated,
    }));
  };

  const removeLanguage = (index: number) => {
    setResume((prev) => ({
      ...prev,

      languages: prev.languages.filter(
        (_, i) => i !== index
      ),
    }));
  };

  return (
    <Card className="rounded-2xl">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle className="flex items-center gap-2">

          <Languages className="h-5 w-5 text-primary" />

          Languages

        </CardTitle>

        <Button
          size="sm"
          onClick={addLanguage}
        >
          <Plus className="mr-2 h-4 w-4" />

          Add

        </Button>

      </CardHeader>

      <CardContent className="space-y-5">

        {resume.languages.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No languages added.
          </p>
        )}

        {resume.languages.map((lang, index) => (

          <div
            key={index}
            className="rounded-xl border p-4 space-y-4"
          >

            <div className="flex justify-between items-center">

              <h4 className="font-semibold">
                Language {index + 1}
              </h4>

              <Button
                size="icon"
                variant="destructive"
                onClick={() =>
                  removeLanguage(index)
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>

            </div>

            <Input
              placeholder="English"
              value={lang.name}
              onChange={(e) =>
                updateLanguage(
                  index,
                  "name",
                  e.target.value
                )
              }
            />

            <Select
              value={lang.level}
              onValueChange={(value) =>
                updateLanguage(
                  index,
                  "level",
                  value
                )
              }
            >

              <SelectTrigger>

                <SelectValue />

              </SelectTrigger>

              <SelectContent>

                {LEVELS.map((level) => (

                  <SelectItem
                    key={level}
                    value={level}
                  >
                    {level}
                  </SelectItem>

                ))}

              </SelectContent>

            </Select>

          </div>

        ))}

      </CardContent>

    </Card>
  );
}

export default LanguagesSection;