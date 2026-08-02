"use client";

import type {
  ResumeData,
  Reference,
} from "@/types/resume";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Users,
  Plus,
  Trash2,
} from "lucide-react";

interface Props {
  resume: ResumeData;
  setResume: React.Dispatch<
    React.SetStateAction<ResumeData>
  >;
}

export function ReferencesSection({
  resume,
  setResume,
}: Props) {

  const addReference = () => {
    setResume((prev) => ({
      ...prev,

      references: [
        ...prev.references,

        {
          name: "",
          designation: "",
          company: "",
          phone: "",
          email: "",
        },
      ],
    }));
  };

  const updateReference = (
    index: number,
    field: keyof Reference,
    value: string
  ) => {

    const updated = [...resume.references];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setResume((prev) => ({
      ...prev,
      references: updated,
    }));
  };

  const removeReference = (index: number) => {
    setResume((prev) => ({
      ...prev,

      references: prev.references.filter(
        (_, i) => i !== index
      ),
    }));
  };

  return (
    <Card className="rounded-2xl">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          References
        </CardTitle>

        <Button
          size="sm"
          onClick={addReference}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add
        </Button>

      </CardHeader>

      <CardContent className="space-y-6">

        {resume.references.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No references added.
          </p>
        )}

        {resume.references.map((item, index) => (

          <div
            key={index}
            className="space-y-4 rounded-xl border p-5"
          >

            <div className="flex items-center justify-between">

              <h4 className="font-semibold">
                Reference {index + 1}
              </h4>

              <Button
                size="icon"
                variant="destructive"
                onClick={() =>
                  removeReference(index)
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>

            </div>

            <Input
              placeholder="Full Name"
              value={item.name}
              onChange={(e) =>
                updateReference(
                  index,
                  "name",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Designation"
              value={item.designation}
              onChange={(e) =>
                updateReference(
                  index,
                  "designation",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Company"
              value={item.company}
              onChange={(e) =>
                updateReference(
                  index,
                  "company",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Phone"
              value={item.phone}
              onChange={(e) =>
                updateReference(
                  index,
                  "phone",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Email"
              value={item.email}
              onChange={(e) =>
                updateReference(
                  index,
                  "email",
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

export default ReferencesSection;