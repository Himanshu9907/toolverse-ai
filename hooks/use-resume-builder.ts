// "use client";

// import { useState } from "react";
// // import html2pdf from "html2pdf.js";

// import type { ResumeData } from "@/types/resume";

// const INITIAL_RESUME: ResumeData = {
//   personal: {
//     fullName: "",
//     email: "",
//     phone: "",
//     location: "",
//     linkedin: "",
//     github: "",
//     website: "",
//     summary: "",
//   },

//   education: [],

//   experience: [],

//   skills: [],

//   projects: [],
// };

// export function useResumeBuilder() {
//   const [resume, setResume] =
//     useState<ResumeData>(INITIAL_RESUME);

//   // ======================
//   // CLEAR
//   // ======================

//   const clearResume = () => {
//     setResume(INITIAL_RESUME);
//   };

//   // ======================
//   // AI SUMMARY
//   // ======================

//   const generateSummary = async () => {
//     try {
//       const response = await fetch("/api/resume", {
//         method: "POST",

//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify(resume),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.error || "Summary generation failed"
//         );
//       }

//       setResume((prev) => ({
//         ...prev,

//         personal: {
//           ...prev.personal,

//           summary: data.summary,
//         },
//       }));
//     } catch (error) {
//       console.error(error);

//       alert("Unable to generate AI summary.");
//     }
//   };

//   // ======================
//   // DOWNLOAD PDF
//   // ======================

  

// const downloadPDF = async () => {
//   const element = document.getElementById("resume-preview");

//   if (!element) return;

//   const html2pdf = (await import("html2pdf.js")).default;

//   const options = {
//     margin: 0.5,

//     filename: `${resume.personal.fullName || "Resume"}.pdf`,

//     image: {
//       type: "jpeg" as const,
//       quality: 1,
//     },

//     html2canvas: {
//       scale: 2,
//       useCORS: true,
//     },

//     jsPDF: {
//       unit: "in" as const,
//       format: "a4" as const,
//       orientation: "portrait" as const,
//     },
//   };

//   await html2pdf()
//     .set(options)
//     .from(element)
//     .save();
// };

//   return {
//     resume,

//     setResume,

//     clearResume,

//     generateSummary,

//     downloadPDF,
//   };
// }

// export default useResumeBuilder;

"use client";

import { useState } from "react";

import type { ResumeData } from "@/types/resume";

// const INITIAL_RESUME: ResumeData = {
// template: "modern",
// isFresher: false,

//  personal: {
//   fullName: "",
//   jobTitle: "",

//   email: "",
//   phone: "",
//   location: "",

//   linkedin: "",
//   github: "",
//   website: "",

//   summary: "",

//   photo: "",
// },

//   education: [],

//   experience: [],

//   skills: [],

//   projects: [],
// };

const INITIAL_RESUME: ResumeData = {
  template: "modern",

  careerStatus: "fresher",

  isFresher: true,

  personal: {
    fullName: "",
    jobTitle: "",

    email: "",
    phone: "",
    location: "",

    linkedin: "",
    github: "",
    website: "",

    summary: "",

    photo: "",
  },

  education: [],

  experience: [],

  internships: [],

  skills: [],

  languages: [],

  certifications: [],

  achievements: [],

  references: [],

  interests: [],

  projects: [],
};

export function useResumeBuilder() {
  const [resume, setResume] =
    useState<ResumeData>(INITIAL_RESUME);

  // ======================
  // CLEAR
  // ======================

  // const clearResume = () => {
  //   setResume(INITIAL_RESUME);
  // };

  const clearResume = () => {
  setResume(structuredClone(INITIAL_RESUME));
};

  // ======================
  // AI SUMMARY
  // ======================

  const generateSummary = async () => {
    try {
      const response = await fetch("/api/resume", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(resume),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Summary generation failed"
        );
      }

      setResume((prev) => ({
        ...prev,

        personal: {
          ...prev.personal,

          summary: data.summary,
        },
      }));
    } catch (error) {
      console.error(error);

      alert("Unable to generate AI summary.");
    }
  };

  return {
    resume,
    setResume,
    clearResume,
    generateSummary,
  };
}

export default useResumeBuilder;