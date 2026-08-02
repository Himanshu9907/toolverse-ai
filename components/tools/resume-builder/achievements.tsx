"use client";

import type {
  ResumeData,
  Achievement,
} from "@/types/resume";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Trophy,
  Plus,
  Trash2,
} from "lucide-react";

interface Props {
  resume: ResumeData;
  setResume: React.Dispatch<
    React.SetStateAction<ResumeData>
  >;
}

export function AchievementsSection({
  resume,
  setResume,
}: Props) {

  const addAchievement = () => {
    setResume((prev) => ({
      ...prev,

      achievements: [
        ...prev.achievements,

        {
          title: "",
          description: "",
        },
      ],
    }));
  };

  const updateAchievement = (
    index: number,
    field: keyof Achievement,
    value: string
  ) => {
    const updated = [...resume.achievements];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setResume((prev) => ({
      ...prev,
      achievements: updated,
    }));
  };

  const removeAchievement = (index: number) => {
    setResume((prev) => ({
      ...prev,

      achievements: prev.achievements.filter(
        (_, i) => i !== index
      ),
    }));
  };

  return (
    <Card className="rounded-2xl">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Achievements
        </CardTitle>

        <Button
          size="sm"
          onClick={addAchievement}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add
        </Button>

      </CardHeader>

      <CardContent className="space-y-6">

        {resume.achievements.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No achievements added.
          </p>
        )}

        {resume.achievements.map((item, index) => (

          <div
            key={index}
            className="rounded-xl border p-5 space-y-4"
          >

            <div className="flex items-center justify-between">

              <h4 className="font-semibold">
                Achievement {index + 1}
              </h4>

              <Button
                size="icon"
                variant="destructive"
                onClick={() =>
                  removeAchievement(index)
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>

            </div>

            <Input
              placeholder="Achievement Title"
              value={item.title}
              onChange={(e) =>
                updateAchievement(
                  index,
                  "title",
                  e.target.value
                )
              }
            />

            <Textarea
              rows={4}
              placeholder="Describe your achievement..."
              value={item.description}
              onChange={(e) =>
                updateAchievement(
                  index,
                  "description",
                  e.target.value
                )
              }
            />

          </div>

        ))}

      </CardContent>

    </Card>
  );
}

export default AchievementsSection;