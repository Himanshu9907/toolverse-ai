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

import { GraduationCap, Plus, Trash2 } from "lucide-react";

interface EducationProps {
  resume: ResumeData;
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export function Education({
  resume,
  setResume,
}: EducationProps) {

  const addEducation = () => {
    setResume((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: "",
          college: "",
          year: "",
        },
      ],
    }));
  };

  const removeEducation = (index: number) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const updateEducation = (
    index: number,
    field: "degree" | "college" | "year",
    value: string
  ) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.map((item, i) =>
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

          <GraduationCap className="h-5 w-5 text-primary" />

          Education

        </CardTitle>

        <Button
          size="sm"
          onClick={addEducation}
        >
          <Plus className="mr-2 h-4 w-4" />

          Add

        </Button>

      </CardHeader>

      <CardContent className="space-y-5">

        {resume.education.length === 0 && (

          <div className="rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">

            No education added yet.

          </div>

        )}

        {resume.education.map((edu, index) => (

          <div
            key={index}
            className="space-y-4 rounded-xl border p-5"
          >

            <div className="flex items-center justify-between">

              <h3 className="font-semibold">

                Education #{index + 1}

              </h3>

              <Button
                size="icon"
                variant="destructive"
                onClick={() =>
                  removeEducation(index)
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>

            </div>

            <Input
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) =>
                updateEducation(
                  index,
                  "degree",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="College / University"
              value={edu.college}
              onChange={(e) =>
                updateEducation(
                  index,
                  "college",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Passing Year"
              value={edu.year}
              onChange={(e) =>
                updateEducation(
                  index,
                  "year",
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

export default Education;