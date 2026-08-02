"use client";

import type {
  ResumeData,
  Certification,
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
  Award,
  Plus,
  Trash2,
} from "lucide-react";

interface Props {
  resume: ResumeData;
  setResume: React.Dispatch<
    React.SetStateAction<ResumeData>
  >;
}

export function CertificationsSection({
  resume,
  setResume,
}: Props) {

  const addCertification = () => {
    setResume((prev) => ({
      ...prev,

      certifications: [
        ...prev.certifications,

        {
          title: "",
          issuer: "",
          year: "",
        },
      ],
    }));
  };

  const updateCertification = (
    index: number,
    field: keyof Certification,
    value: string
  ) => {
    const updated = [...resume.certifications];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setResume((prev) => ({
      ...prev,
      certifications: updated,
    }));
  };

  const removeCertification = (index: number) => {
    setResume((prev) => ({
      ...prev,

      certifications: prev.certifications.filter(
        (_, i) => i !== index
      ),
    }));
  };

  return (
    <Card className="rounded-2xl">

      <CardHeader className="flex flex-row items-center justify-between">

        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          Certifications
        </CardTitle>

        <Button
          size="sm"
          onClick={addCertification}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add
        </Button>

      </CardHeader>

      <CardContent className="space-y-6">

        {resume.certifications.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No certifications added.
          </p>
        )}

        {resume.certifications.map((item, index) => (

          <div
            key={index}
            className="rounded-xl border p-5 space-y-4"
          >

            <div className="flex items-center justify-between">

              <h4 className="font-semibold">
                Certificate {index + 1}
              </h4>

              <Button
                size="icon"
                variant="destructive"
                onClick={() =>
                  removeCertification(index)
                }
              >
                <Trash2 className="h-4 w-4" />
              </Button>

            </div>

            <Input
              placeholder="Certificate Name"
              value={item.title}
              onChange={(e) =>
                updateCertification(
                  index,
                  "title",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Issuer (Google, AWS, Coursera...)"
              value={item.issuer}
              onChange={(e) =>
                updateCertification(
                  index,
                  "issuer",
                  e.target.value
                )
              }
            />

            <Input
              placeholder="Year"
              value={item.year}
              onChange={(e) =>
                updateCertification(
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

export default CertificationsSection;