// "use client";

// import type { ResumeData } from "@/types/resume";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Input } from "@/components/ui/input";

// import { Textarea } from "@/components/ui/textarea";

// import {
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
//   FileText,
// } from "lucide-react";

// import {
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";

// interface PersonalInfoProps {
//   resume: ResumeData;
//   setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
// }

// export function PersonalInfo({
//   resume,
//   setResume,
// }: PersonalInfoProps) {
//   const updateField = (
//     field: keyof ResumeData["personal"],
//     value: string
//   ) => {
//     setResume((prev) => ({
//       ...prev,

//       personal: {
//         ...prev.personal,

//         [field]: value,
//       },
//     }));
//   };

//   return (
//     <Card className="rounded-2xl">

//       <CardHeader>

//         <CardTitle className="flex items-center gap-2">

//           <User className="h-5 w-5 text-primary" />

//           Personal Information

//         </CardTitle>

//       </CardHeader>

//       <CardContent className="space-y-5">

//         <div className="grid gap-5 md:grid-cols-2">

//           <div className="space-y-2">

//             <label className="text-sm font-medium">
//               Full Name
//             </label>

//             <Input
//               placeholder="John Doe"
//               value={resume.personal.fullName}
//               onChange={(e) =>
//                 updateField("fullName", e.target.value)
//               }
//             />

//           </div>

//           <div className="space-y-2">

//             <label className="text-sm font-medium flex items-center gap-2">

//               <Mail className="h-4 w-4" />

//               Email

//             </label>

//             <Input
//               placeholder="john@example.com"
//               value={resume.personal.email}
//               onChange={(e) =>
//                 updateField("email", e.target.value)
//               }
//             />

//           </div>

//           <div className="space-y-2">

//             <label className="text-sm font-medium flex items-center gap-2">

//               <Phone className="h-4 w-4" />

//               Phone

//             </label>

//             <Input
//               placeholder="+91 9876543210"
//               value={resume.personal.phone}
//               onChange={(e) =>
//                 updateField("phone", e.target.value)
//               }
//             />

//           </div>

//           <div className="space-y-2">

//             <label className="text-sm font-medium flex items-center gap-2">

//               <MapPin className="h-4 w-4" />

//               Location

//             </label>

//             <Input
//               placeholder="Jabalpur, India"
//               value={resume.personal.location}
//               onChange={(e) =>
//                 updateField("location", e.target.value)
//               }
//             />

//           </div>

//           <div className="space-y-2">

//             <label className="text-sm font-medium flex items-center gap-2">

//               <FaLinkedin className="h-4 w-4" />

//               LinkedIn

//             </label>

//             <Input
//               placeholder="https://linkedin.com/in/..."
//               value={resume.personal.linkedin}
//               onChange={(e) =>
//                 updateField("linkedin", e.target.value)
//               }
//             />

//           </div>

//           <div className="space-y-2">

//             <label className="text-sm font-medium flex items-center gap-2">

//               <FaGithub className="h-4 w-4" />

//               GitHub

//             </label>

//             <Input
//               placeholder="https://github.com/..."
//               value={resume.personal.github}
//               onChange={(e) =>
//                 updateField("github", e.target.value)
//               }
//             />

//           </div>

//         </div>

//         <div className="space-y-2">

//           <label className="text-sm font-medium flex items-center gap-2">

//             <Globe className="h-4 w-4" />

//             Portfolio Website

//           </label>

//           <Input
//             placeholder="https://yourwebsite.com"
//             value={resume.personal.website}
//             onChange={(e) =>
//               updateField("website", e.target.value)
//             }
//           />

//         </div>

//         <div className="space-y-2">

//           <label className="text-sm font-medium flex items-center gap-2">

//             <FileText className="h-4 w-4" />

//             Professional Summary

//           </label>

//           <Textarea
//             rows={6}
//             placeholder="Write a short professional summary or generate one using AI..."
//             value={resume.personal.summary}
//             onChange={(e) =>
//               updateField("summary", e.target.value)
//             }
//           />

//         </div>

//       </CardContent>

//     </Card>
//   );
// }

// export default PersonalInfo;

// "use client";

// import type { ResumeData } from "@/types/resume";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// import {
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
//   FileText,
//   Briefcase,
//   Image,
// } from "lucide-react";

// import {
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";

// interface PersonalInfoProps {
//   resume: ResumeData;
//   setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
// }

// export function PersonalInfo({
//   resume,
//   setResume,
// }: PersonalInfoProps) {

//   const updateField = (
//     field: keyof ResumeData["personal"],
//     value: string
//   ) => {
//     setResume((prev) => ({
//       ...prev,
//       personal: {
//         ...prev.personal,
//         [field]: value,
//       },
//     }));
//   };

//   return (
//     <Card className="rounded-2xl">

//       <CardHeader>
//         <CardTitle className="flex items-center gap-2">
//           <User className="h-5 w-5 text-primary" />
//           Personal Information
//         </CardTitle>
//       </CardHeader>

//       <CardContent className="space-y-5">

//         <div className="grid gap-5 md:grid-cols-2">

//           {/* Full Name */}

//           <div className="space-y-2">
//             <label className="text-sm font-medium">
//               Full Name
//             </label>

//             <Input
//               placeholder="John Doe"
//               value={resume.personal.fullName}
//               onChange={(e) =>
//                 updateField("fullName", e.target.value)
//               }
//             />
//           </div>

//           {/* Job Title */}

//           <div className="space-y-2">
//             <label className="flex items-center gap-2 text-sm font-medium">
//               <Briefcase className="h-4 w-4" />
//               Job Title
//             </label>

//             <Input
//               placeholder="Frontend Developer"
//               value={resume.personal.jobTitle}
//               onChange={(e) =>
//                 updateField("jobTitle", e.target.value)
//               }
//             />
//           </div>

//           {/* Email */}

//           <div className="space-y-2">
//             <label className="flex items-center gap-2 text-sm font-medium">
//               <Mail className="h-4 w-4" />
//               Email
//             </label>

//             <Input
//               placeholder="john@example.com"
//               value={resume.personal.email}
//               onChange={(e) =>
//                 updateField("email", e.target.value)
//               }
//             />
//           </div>

//           {/* Phone */}

//           <div className="space-y-2">
//             <label className="flex items-center gap-2 text-sm font-medium">
//               <Phone className="h-4 w-4" />
//               Phone
//             </label>

//             <Input
//               placeholder="+91 9876543210"
//               value={resume.personal.phone}
//               onChange={(e) =>
//                 updateField("phone", e.target.value)
//               }
//             />
//           </div>

//           {/* Location */}

//           <div className="space-y-2">
//             <label className="flex items-center gap-2 text-sm font-medium">
//               <MapPin className="h-4 w-4" />
//               Location
//             </label>

//             <Input
//               placeholder="Jabalpur, India"
//               value={resume.personal.location}
//               onChange={(e) =>
//                 updateField("location", e.target.value)
//               }
//             />
//           </div>

//           {/* LinkedIn */}

//           <div className="space-y-2">
//             <label className="flex items-center gap-2 text-sm font-medium">
//               <FaLinkedin />
//               LinkedIn
//             </label>

//             <Input
//               placeholder="https://linkedin.com/in/..."
//               value={resume.personal.linkedin}
//               onChange={(e) =>
//                 updateField("linkedin", e.target.value)
//               }
//             />
//           </div>

//           {/* GitHub */}

//           <div className="space-y-2">
//             <label className="flex items-center gap-2 text-sm font-medium">
//               <FaGithub />
//               GitHub
//             </label>

//             <Input
//               placeholder="https://github.com/..."
//               value={resume.personal.github}
//               onChange={(e) =>
//                 updateField("github", e.target.value)
//               }
//             />
//           </div>

//         </div>

//         {/* Website */}

//         <div className="space-y-2">
//           <label className="flex items-center gap-2 text-sm font-medium">
//             <Globe className="h-4 w-4" />
//             Portfolio Website
//           </label>

//           <Input
//             placeholder="https://yourwebsite.com"
//             value={resume.personal.website}
//             onChange={(e) =>
//               updateField("website", e.target.value)
//             }
//           />
//         </div>

//         {/* Photo */}

//         <div className="space-y-2">
//           <label className="flex items-center gap-2 text-sm font-medium">
//             <Image className="h-4 w-4" />
//             Profile Photo URL
//           </label>

//           <Input
//             placeholder="https://..."
//             value={resume.personal.photo ?? ""}
//             onChange={(e) =>
//               updateField("photo", e.target.value)
//             }
//           />
//         </div>

//         {/* Summary */}

//         <div className="space-y-2">
//           <label className="flex items-center gap-2 text-sm font-medium">
//             <FileText className="h-4 w-4" />
//             Professional Summary
//           </label>

//           <Textarea
//             rows={6}
//             placeholder="Write a professional summary..."
//             value={resume.personal.summary}
//             onChange={(e) =>
//               updateField("summary", e.target.value)
//             }
//           />
//         </div>

//       </CardContent>

//     </Card>
//   );
// }

// export default PersonalInfo;

"use client";

import type { ResumeData } from "@/types/resume";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  FileText,
  Briefcase,
  Image as ImageIcon,
  Upload,
  X,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

interface PersonalInfoProps {
  resume: ResumeData;
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export function PersonalInfo({ resume, setResume }: PersonalInfoProps) {
  const updateField = (field: keyof ResumeData["personal"], value: string) => {
    setResume((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      updateField("photo", reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    updateField("photo", "");
  };

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5 text-primary" />
          Personal Information
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Photo Upload */}

        <div className="space-y-3">
          <label className="flex items-center gap-2 text-sm font-medium">
            <ImageIcon className="h-4 w-4" />
            Profile Photo
          </label>

          <div className="flex items-center gap-4">
            <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-dashed border-slate-300 bg-slate-100 flex items-center justify-center">
              {resume.personal.photo ? (
                <img
                  src={resume.personal.photo}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-3xl font-bold text-slate-500">
                  {resume.personal.fullName
                    ? resume.personal.fullName.charAt(0)
                    : "U"}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />

                <Button
                  type="button"
                  variant="outline"
                  className="gap-2"
                  asChild
                >
                  <span>
                    <Upload className="h-4 w-4" />
                    Upload Photo
                  </span>
                </Button>
              </label>

              {resume.personal.photo && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="gap-1 text-red-600 hover:text-red-700"
                  onClick={removePhoto}
                >
                  <X className="h-4 w-4" />
                  Remove
                </Button>
              )}

              <p className="text-xs text-muted-foreground">
                JPG, PNG or WEBP. Recommended: 400×400px.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Full Name */}

          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>

            <Input
              placeholder="John Doe"
              value={resume.personal.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
            />
          </div>

          {/* Job Title */}

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Briefcase className="h-4 w-4" />
              Job Title
            </label>

            <Input
              placeholder="Frontend Developer"
              value={resume.personal.jobTitle}
              onChange={(e) => updateField("jobTitle", e.target.value)}
            />
          </div>

          {/* Experiene or fresher checkbox */}

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={resume.isFresher}
              onChange={(e) =>
                setResume((prev) => ({
                  ...prev,
                  isFresher: e.target.checked,
                }))
              }
            />

            <label>I am a Fresher</label>
          </div>

          {/* Email */}

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Mail className="h-4 w-4" />
              Email
            </label>

            <Input
              placeholder="john@example.com"
              value={resume.personal.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </div>

          {/* Phone */}

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              Phone
            </label>

            <Input
              placeholder="+91 9876543210"
              value={resume.personal.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </div>

          {/* Location */}

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="h-4 w-4" />
              Location
            </label>

            <Input
              placeholder="Jabalpur, India"
              value={resume.personal.location}
              onChange={(e) => updateField("location", e.target.value)}
            />
          </div>

          {/* LinkedIn */}

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <FaLinkedin />
              LinkedIn
            </label>

            <Input
              placeholder="https://linkedin.com/in/..."
              value={resume.personal.linkedin}
              onChange={(e) => updateField("linkedin", e.target.value)}
            />
          </div>

          {/* GitHub */}

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <FaGithub />
              GitHub
            </label>

            <Input
              placeholder="https://github.com/..."
              value={resume.personal.github}
              onChange={(e) => updateField("github", e.target.value)}
            />
          </div>
        </div>

        {/* Website */}

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium">
            <Globe className="h-4 w-4" />
            Portfolio Website
          </label>

          <Input
            placeholder="https://yourwebsite.com"
            value={resume.personal.website}
            onChange={(e) => updateField("website", e.target.value)}
          />
        </div>

        {/* Summary */}

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium">
            <FileText className="h-4 w-4" />
            Professional Summary
          </label>

          <Textarea
            rows={6}
            placeholder="Write a professional summary..."
            value={resume.personal.summary}
            onChange={(e) => updateField("summary", e.target.value)}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default PersonalInfo;
