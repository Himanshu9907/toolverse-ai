"use client";

import type { ResumeData } from "@/types/resume";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import {
  Heart,
  Plus,
  Trash2,
} from "lucide-react";

interface Props {
  resume: ResumeData;
  setResume: React.Dispatch<
    React.SetStateAction<ResumeData>
  >;
}

export function InterestsSection({
  resume,
  setResume,
}: Props) {

  const addInterest = () => {
    setResume((prev) => ({
      ...prev,
      interests: [
        ...prev.interests,
        "",
      ],
    }));
  };

  const updateInterest = (
    index: number,
    value: string
  ) => {

    const updated = [...resume.interests];

    updated[index] = value;

    setResume((prev) => ({
      ...prev,
      interests: updated,
    }));
  };

  const removeInterest = (index: number) => {

    setResume((prev) => ({
      ...prev,
      interests: prev.interests.filter(
        (_, i) => i !== index
      ),
    }));
  };

  return (
    <Card className="rounded-2xl">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-primary" />
          Interests
        </CardTitle>

        <Button
          size="sm"
          onClick={addInterest}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add
        </Button>

      </CardHeader>

      <CardContent className="space-y-5">

        {resume.interests.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No interests added.
          </p>
        )}

        {resume.interests.map((interest, index) => (

          <div
            key={index}
            className="flex gap-3"
          >

            <Input
              placeholder="Photography"
              value={interest}
              onChange={(e) =>
                updateInterest(
                  index,
                  e.target.value
                )
              }
            />

            <Button
              size="icon"
              variant="destructive"
              onClick={() =>
                removeInterest(index)
              }
            >
              <Trash2 className="h-4 w-4" />
            </Button>

          </div>

        ))}

      </CardContent>

    </Card>
  );
}

export default InterestsSection;