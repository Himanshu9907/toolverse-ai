"use client";

import type { ResumeData } from "@/types/resume";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import {
  Briefcase,
  Plus,
  Trash2,
} from "lucide-react";

interface ExperienceProps {
  resume: ResumeData;
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export function Experience({
  resume,
  setResume,
}: ExperienceProps) {

  const addExperience = () => {
    setResume((prev) => ({
      ...prev,

      experience: [
        ...prev.experience,

        {
          company: "",
          role: "",
          duration: "",
          description: "",
        },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    setResume((prev) => ({
      ...prev,

      experience: prev.experience.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const updateExperience = (
    index: number,
    field: keyof ResumeData["experience"][number],
    value: string
  ) => {
    setResume((prev) => ({
      ...prev,

      experience: prev.experience.map((item, i) =>
        i === index
          ? {
              ...item,
              [field]: value,
            }
          : item
      ),
    }));
  };

  return (
    <Card className="rounded-2xl">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle className="flex items-center gap-2">

          <Briefcase className="h-5 w-5 text-primary" />

          Work Experience

        </CardTitle>

        <Button
          size="sm"
          onClick={addExperience}
        >
          <Plus className="mr-2 h-4 w-4" />

          Add

        </Button>

      </CardHeader>

      <CardContent className="space-y-5">

        {resume.experience.length === 0 && (

          <div className="rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">

            No experience added yet.

          </div>

        )}

        {resume.experience.map((exp, index) => (

          <div
            key={index}
            className="space-y-4 rounded-xl border p-5"
          >

            <div className="flex items-center justify-between">

              <h3 className="font-semibold">

                Experience #{index + 1}

              </h3>

              <Button
                size="icon"
                variant="destructive"
                onClick={() =>
                  removeExperience(index)
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>

            </div>

            <Input
              placeholder="Company Name"
              value={exp.company}
              onChange={(e) =>
                updateExperience(
                  index,
                  "company",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Job Title"
              value={exp.role}
              onChange={(e) =>
                updateExperience(
                  index,
                  "role",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Duration (Jan 2024 - Present)"
              value={exp.duration}
              onChange={(e) =>
                updateExperience(
                  index,
                  "duration",
                  e.target.value
                )
              }
            />

            <Textarea
              rows={5}
              placeholder="Describe your responsibilities and achievements..."
              value={exp.description}
              onChange={(e) =>
                updateExperience(
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

export default Experience;