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
  FolderGit2,
  Plus,
  Trash2,
} from "lucide-react";

interface ProjectsProps {
  resume: ResumeData;
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export function Projects({
  resume,
  setResume,
}: ProjectsProps) {

  const addProject = () => {
    setResume((prev) => ({
      ...prev,

      projects: [
        ...prev.projects,

        {
          title: "",
          description: "",
          technologies: "",
          github: "",
          live: "",
        },
      ],
    }));
  };

  const removeProject = (index: number) => {
    setResume((prev) => ({
      ...prev,

      projects: prev.projects.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const updateProject = (
    index: number,
    field: string,
    value: string
  ) => {
    setResume((prev) => ({
      ...prev,

      projects: prev.projects.map((item: any, i) =>
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

          <FolderGit2 className="h-5 w-5 text-primary" />

          Projects

        </CardTitle>

        <Button
          size="sm"
          onClick={addProject}
        >
          <Plus className="mr-2 h-4 w-4" />

          Add

        </Button>

      </CardHeader>

      <CardContent className="space-y-5">

        {resume.projects.length === 0 && (

          <div className="rounded-xl border border-dashed p-6 text-center text-sm text-muted-foreground">

            No projects added yet.

          </div>

        )}

        {resume.projects.map((project: any, index) => (

          <div
            key={index}
            className="space-y-4 rounded-xl border p-5"
          >

            <div className="flex items-center justify-between">

              <h3 className="font-semibold">

                Project #{index + 1}

              </h3>

              <Button
                size="icon"
                variant="destructive"
                onClick={() =>
                  removeProject(index)
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>

            </div>

            <Input
              placeholder="Project Name"
              value={project.title}
              onChange={(e) =>
                updateProject(
                  index,
                  "title",
                  e.target.value
                )
              }
            />

            <Textarea
              rows={4}
              placeholder="Project Description"
              value={project.description}
              onChange={(e) =>
                updateProject(
                  index,
                  "description",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Technologies Used (React, Next.js, Node.js...)"
              value={project.technologies}
              onChange={(e) =>
                updateProject(
                  index,
                  "technologies",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="GitHub Repository"
              value={project.github}
              onChange={(e) =>
                updateProject(
                  index,
                  "github",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Live Demo URL"
              value={project.live}
              onChange={(e) =>
                updateProject(
                  index,
                  "live",
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

export default Projects;