"use client";

import type {
  ResumeData,
  Internship,
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
  Briefcase,
  Plus,
  Trash2,
} from "lucide-react";

interface Props {
  resume: ResumeData;
  setResume: React.Dispatch<
    React.SetStateAction<ResumeData>
  >;
}

export function InternshipSection({
  resume,
  setResume,
}: Props) {

  const addInternship = () => {
    setResume((prev) => ({
      ...prev,

      internships: [
        ...prev.internships,

        {
          company: "",
          role: "",
          duration: "",
          description: "",
        },
      ],
    }));
  };

  const updateInternship = (
    index: number,
    field: keyof Internship,
    value: string
  ) => {
    const updated = [...resume.internships];

    updated[index] = {
      ...updated[index],

      [field]: value,
    };

    setResume((prev) => ({
      ...prev,

      internships: updated,
    }));
  };

  const removeInternship = (index: number) => {
    setResume((prev) => ({
      ...prev,

      internships: prev.internships.filter(
        (_, i) => i !== index
      ),
    }));
  };

  return (
    <Card className="rounded-2xl">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-primary" />
          Internship
        </CardTitle>

        <Button
          size="sm"
          onClick={addInternship}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add
        </Button>

      </CardHeader>

      <CardContent className="space-y-6">

        {resume.internships.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No internship added.
          </p>
        )}

        {resume.internships.map((item, index) => (

          <div
            key={index}
            className="rounded-xl border p-5 space-y-4"
          >

            <div className="flex items-center justify-between">

              <h4 className="font-semibold">
                Internship {index + 1}
              </h4>

              <Button
                size="icon"
                variant="destructive"
                onClick={() =>
                  removeInternship(index)
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>

            </div>

            <Input
              placeholder="Company"
              value={item.company}
              onChange={(e) =>
                updateInternship(
                  index,
                  "company",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Role"
              value={item.role}
              onChange={(e) =>
                updateInternship(
                  index,
                  "role",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Duration"
              value={item.duration}
              onChange={(e) =>
                updateInternship(
                  index,
                  "duration",
                  e.target.value
                )
              }
            />

            <Textarea
              rows={4}
              placeholder="Describe your internship..."
              value={item.description}
              onChange={(e) =>
                updateInternship(
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

export default InternshipSection;