"use client";

import { useState } from "react";

import type { ResumeData } from "@/types/resume";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import {
  Brain,
  X,
} from "lucide-react";

interface SkillsProps {
  resume: ResumeData;
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export function Skills({
  resume,
  setResume,
}: SkillsProps) {

  const [skill, setSkill] = useState("");

  const addSkill = () => {

    if (!skill.trim()) return;

    if (resume.skills.includes(skill.trim())) {
      setSkill("");
      return;
    }

    setResume((prev) => ({
      ...prev,

      skills: [
        ...prev.skills,
        skill.trim(),
      ],
    }));

    setSkill("");
  };

  const removeSkill = (
    index: number
  ) => {
    setResume((prev) => ({
      ...prev,

      skills: prev.skills.filter(
        (_, i) => i !== index
      ),
    }));
  };

  return (
    <Card className="rounded-2xl">

      <CardHeader>

        <CardTitle className="flex items-center gap-2">

          <Brain className="h-5 w-5 text-primary" />

          Skills

        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-5">

        <div className="flex gap-3">

          <Input
            placeholder="Type a skill..."
            value={skill}
            onChange={(e) =>
              setSkill(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();

                addSkill();
              }
            }}
          />

          <Button
            onClick={addSkill}
          >
            Add
          </Button>

        </div>

        {resume.skills.length === 0 ? (

          <div className="rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">

            No skills added yet.

          </div>

        ) : (

          <div className="flex flex-wrap gap-3">

            {resume.skills.map(
              (item, index) => (

                <Badge
                  key={index}
                  className="flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                >

                  {item}

                  <button
                    onClick={() =>
                      removeSkill(index)
                    }
                  >

                    <X className="h-3 w-3" />

                  </button>

                </Badge>

              )
            )}

          </div>

        )}

      </CardContent>

    </Card>
  );
}

export default Skills;