// "use client";

// import { PersonalInfo } from "./personal-info";
// import { Education } from "./education";
// import { Experience } from "./experience";
// import { Skills } from "./skills";
// import { Projects } from "./projects";
// import { Preview } from "./preview";
// import { Toolbar } from "./toolbar";

// import { useResumeBuilder } from "@/hooks/use-resume-builder";

// export function ResumeBuilder() {
//   const {
//     resume,
//     setResume,

//     downloadPDF,
//     generateSummary,
//     clearResume,
//   } = useResumeBuilder();

//   return (
//     <div className="space-y-8">

//       {/* Header */}

//       <div className="space-y-2">

//         <h1 className="text-4xl font-bold tracking-tight">
//           AI Resume Builder
//         </h1>

//         <p className="text-muted-foreground">
//           Create professional ATS-friendly resumes with AI.
//         </p>

//       </div>

//       {/* Toolbar */}

//       <Toolbar
//         onDownload={downloadPDF}
//         onGenerateSummary={generateSummary}
//         onClear={clearResume}
//       />

//       {/* Main Layout */}

//       <div className="grid gap-8 xl:grid-cols-2">

//         {/* Left */}

//         <div className="space-y-6">

//           <PersonalInfo
//             resume={resume}
//             setResume={setResume}
//           />

//           <Education
//             resume={resume}
//             setResume={setResume}
//           />

//           <Experience
//             resume={resume}
//             setResume={setResume}
//           />

//           <Skills
//             resume={resume}
//             setResume={setResume}
//           />

//           <Projects
//             resume={resume}
//             setResume={setResume}
//           />

//         </div>

//         {/* Right */}

//         <div className="sticky top-6">

//           <Preview
//             resume={resume}
//           />

//         </div>

//       </div>

//     </div>
//   );
// }

// export default ResumeBuilder;

// "use client";

// import { useRef } from "react";
// import { useReactToPrint } from "react-to-print";

// import { PersonalInfo } from "./personal-info";
// import { Education } from "./education";
// import { Experience } from "./experience";
// import { Skills } from "./skills";
// import { Projects } from "./projects";
// import { Preview } from "./preview";
// import { Toolbar } from "./toolbar";

// import { useResumeBuilder } from "@/hooks/use-resume-builder";

// export function ResumeBuilder() {
//   const {
//     resume,
//     setResume,
//     generateSummary,
//     clearResume,
//   } = useResumeBuilder();

//   // Preview Ref
//   const previewRef = useRef<HTMLDivElement>(null);

//   // Print / Save PDF
//   const handlePrint = useReactToPrint({
//     contentRef: previewRef,
//     documentTitle: `${resume.personal.fullName || "Resume"}`,
//   });

//   return (
//     <div className="space-y-8">
//       {/* Header */}

//       <div className="space-y-2">
//         <h1 className="text-4xl font-bold tracking-tight">
//           AI Resume Builder
//         </h1>

//         <p className="text-muted-foreground">
//           Create professional ATS-friendly resumes with AI.
//         </p>
//       </div>

//       {/* Toolbar */}

//       <Toolbar
//         onPrint={handlePrint}
//         onGenerateSummary={generateSummary}
//         onClear={clearResume}
//       />

//       {/* Layout */}

//       <div className="grid gap-8 xl:grid-cols-2">
//         {/* Left */}

//         <div className="space-y-6">
//           <PersonalInfo
//             resume={resume}
//             setResume={setResume}
//           />

//           <Education
//             resume={resume}
//             setResume={setResume}
//           />

//           <Experience
//             resume={resume}
//             setResume={setResume}
//           />

//           <Skills
//             resume={resume}
//             setResume={setResume}
//           />

//           <Projects
//             resume={resume}
//             setResume={setResume}
//           />
//         </div>

//         {/* Right */}

//         <div className="sticky top-6">
//           <Preview
//             ref={previewRef}
//             resume={resume}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResumeBuilder;

// "use client";

// import { useRef } from "react";

// import { PersonalInfo } from "./personal-info";
// import { Education } from "./education";
// import { Experience } from "./experience";
// import { Skills } from "./skills";
// import { Projects } from "./projects";
// import { Preview } from "./preview";
// import { Toolbar } from "./toolbar";
// import jsPDF from "jspdf";
// import { toPng } from "html-to-image";

// import { useResumeBuilder } from "@/hooks/use-resume-builder";

// export function ResumeBuilder() {
//   const {
//     resume,
//     setResume,

//      downloadPDF,

//     generateSummary,

//     clearResume,
//   } = useResumeBuilder();

//   const previewRef = useRef<HTMLDivElement>(null);

//   return (
//     <div className="space-y-8">

//       {/* Header */}

//       <div className="space-y-2">

//         <h1 className="text-4xl font-bold tracking-tight">
//           AI Resume Builder
//         </h1>

//         <p className="text-muted-foreground">
//           Create professional ATS-friendly resumes with AI.
//         </p>

//       </div>

//       {/* Toolbar */}

//       <Toolbar
//         template={resume.template}
//         onTemplateChange={(template) =>
//           setResume((prev) => ({
//             ...prev,
//             template,
//           }))
//         }
//         onPrint={ downloadPDF}
//         onGenerateSummary={generateSummary}
//         onClear={clearResume}
//       />

//       {/* Main Layout */}

//       <div className="grid gap-8 xl:grid-cols-2">

//         {/* Left */}

//         <div className="space-y-6">

//           <PersonalInfo
//             resume={resume}
//             setResume={setResume}
//           />

//           <Education
//             resume={resume}
//             setResume={setResume}
//           />

//           <Experience
//             resume={resume}
//             setResume={setResume}
//           />

//           <Skills
//             resume={resume}
//             setResume={setResume}
//           />

//           <Projects
//             resume={resume}
//             setResume={setResume}
//           />

//         </div>

//         {/* Right */}

//         <div className="sticky top-6">

//           <Preview
//             ref={previewRef}
//             resume={resume}
//           />

//         </div>

//       </div>

//     </div>
//   );
// }

// export default ResumeBuilder;

// "use client";

// import { useRef } from "react";

// import jsPDF from "jspdf";
// import { toPng } from "html-to-image";

// import { PersonalInfo } from "./personal-info";
// import { Education } from "./education";
// import { Experience } from "./experience";
// import { Skills } from "./skills";
// import { Projects } from "./projects";
// import { Preview } from "./preview";
// import { Toolbar } from "./toolbar";
// import { InternshipSection } from "./internship";
// import { AchievementsSection } from "./achievements";
// import { CertificationsSection } from "./certifications";
// import { ReferencesSection } from "./references";
// import { InterestsSection } from "./interests";


// import { useResumeBuilder } from "@/hooks/use-resume-builder";

// export function ResumeBuilder() {
//   const {
//     resume,
//     setResume,
//     generateSummary,
//     clearResume,
//   } = useResumeBuilder();

//   const previewRef = useRef<HTMLDivElement>(null);

//   const downloadPDF = async () => {
//     if (!previewRef.current) return;

//     try {
//       const dataUrl = await toPng(previewRef.current, {
//         cacheBust: true,
//         pixelRatio: 2,
//         backgroundColor: "#ffffff",
//       });

//       const pdf = new jsPDF({
//         orientation: "portrait",
//         unit: "mm",
//         format: "a4",
//       });

//       const img = new Image();

//       img.src = dataUrl;

//       img.onload = () => {
//         const pdfWidth = 210;
//         const pdfHeight = 297;

//         const ratio = img.width / img.height;

//         let width = pdfWidth;
//         let height = width / ratio;

//         if (height > pdfHeight) {
//           height = pdfHeight;
//           width = height * ratio;
//         }

//         pdf.addImage(
//           dataUrl,
//           "PNG",
//           (pdfWidth - width) / 2,
//           0,
//           width,
//           height
//         );

//         pdf.save(
//           `${resume.personal.fullName || "Resume"}.pdf`
//         );
//       };
//     } catch (err) {
//       console.error(err);
//       alert("Unable to generate PDF.");
//     }
//   };

//   return (
//     <div className="space-y-8">

//       {/* Header */}

//       <div className="space-y-2">
//         <h1 className="text-4xl font-bold tracking-tight">
//           AI Resume Builder
//         </h1>

//         <p className="text-muted-foreground">
//           Create professional ATS-friendly resumes with AI.
//         </p>
//       </div>

//       {/* Toolbar */}

//       <Toolbar
//         template={resume.template}
//         onTemplateChange={(template) =>
//           setResume((prev) => ({
//             ...prev,
//             template,
//           }))
//         }
//         onPrint={downloadPDF}
//         onGenerateSummary={generateSummary}
//         onClear={clearResume}
//       />

//       {/* Main */}

//       {/* <div className="grid gap-8 xl:grid-cols-2"> */}
//       {/* <div className="flex gap-8 items-start"> */}
//       <div className="flex flex-col gap-8 xl:flex-row xl:items-start">

//         {/* Form */}

//         {/* <div className="space-y-6"> */}
// {/* <div className="w-[420px] shrink-0 space-y-6"> */}
// <div className="w-full xl:w-[420px] xl:shrink-0 space-y-6">
//           <PersonalInfo
//             resume={resume}
//             setResume={setResume}
//           />

//           <Education
//             resume={resume}
//             setResume={setResume}
//           />

//           {/* <Experience
//             resume={resume}
//             setResume={setResume}
//           /> */}

//           {!resume.isFresher && (
//   <Experience
//     resume={resume}
//     setResume={setResume}
//   />

  
// )}

// <InternshipSection
//   resume={resume}
//   setResume={setResume}
// />

//           <Skills
//             resume={resume}
//             setResume={setResume}
//           />

//           <Projects
//             resume={resume}
//             setResume={setResume}
//           />
//         </div>

//         <AchievementsSection
//   resume={resume}
//   setResume={setResume}
// />

// <CertificationsSection
//   resume={resume}
//   setResume={setResume}
// />

// <ReferencesSection
//   resume={resume}
//   setResume={setResume}
// />

// <InterestsSection
//   resume={resume}
//   setResume={setResume}
// />

//         {/* Preview */}

//         {/* <div className="sticky top-6">
//           <Preview
//             ref={previewRef}
//             resume={resume}
//           />
//         </div> */}

//         <div className="flex-1 xl:sticky xl:top-6">

//   <div className="flex justify-center">

//     <Preview
//       ref={previewRef}
//       resume={resume}
//     />

//   </div>

// </div>

//       </div>

//     </div>
//   );
// }

// export default ResumeBuilder;

// "use client";

// import { useRef } from "react";
// import jsPDF from "jspdf";
// import { toPng } from "html-to-image";

// import { PersonalInfo } from "./personal-info";
// import { Education } from "./education";
// import { Experience } from "./experience";
// import { InternshipSection } from "./internship";
// import { Skills } from "./skills";
// import { Projects } from "./projects";
// import { AchievementsSection } from "./achievements";
// import { CertificationsSection } from "./certifications";
// import { ReferencesSection } from "./references";
// import { InterestsSection } from "./interests";

// import { Preview } from "./preview";
// import { Toolbar } from "./toolbar";

// import { useResumeBuilder } from "@/hooks/use-resume-builder";

// export function ResumeBuilder() {
//   const {
//     resume,
//     setResume,
//     generateSummary,
//     clearResume,
//   } = useResumeBuilder();

//   const previewRef = useRef<HTMLDivElement>(null);

//   const downloadPDF = async () => {
//     if (!previewRef.current) return;

//     try {
//       const dataUrl = await toPng(previewRef.current, {
//         cacheBust: true,
//         pixelRatio: 2,
//         backgroundColor: "#ffffff",
//       });

//       const pdf = new jsPDF({
//         orientation: "portrait",
//         unit: "mm",
//         format: "a4",
//       });

//       const img = new Image();
//       img.src = dataUrl;

//       img.onload = () => {
//         const pdfWidth = 210;
//         const pdfHeight = 297;

//         const ratio = img.width / img.height;

//         let width = pdfWidth;
//         let height = width / ratio;

//         if (height > pdfHeight) {
//           height = pdfHeight;
//           width = height * ratio;
//         }

//         pdf.addImage(
//           dataUrl,
//           "PNG",
//           (pdfWidth - width) / 2,
//           0,
//           width,
//           height
//         );

//         pdf.save(
//           `${resume.personal.fullName || "Resume"}.pdf`
//         );
//       };
//     } catch (error) {
//       console.error(error);
//       alert("Unable to generate PDF.");
//     }
//   };

//   return (
//     <div className="space-y-8">

//       {/* HEADER */}

//       <div className="space-y-2">

//         <h1 className="text-4xl font-bold tracking-tight">
//           AI Resume Builder
//         </h1>

//         <p className="text-muted-foreground">
//           Create professional ATS-friendly resumes using AI.
//         </p>

//       </div>

//       {/* TOOLBAR */}

//       <Toolbar
//         template={resume.template}
//         onTemplateChange={(template) =>
//           setResume((prev) => ({
//             ...prev,
//             template,
//           }))
//         }
//         onPrint={downloadPDF}
//         onGenerateSummary={generateSummary}
//         onClear={clearResume}
//       />

//       {/* MAIN LAYOUT */}

//       {/* <div className="flex flex-col gap-8 xl:flex-row items-start"> */}
//       <div className="flex flex-col xl:flex-row gap-8 xl:overflow-hidden">

//         {/* ============================= */}
//         {/* FORM */}
//         {/* ============================= */}

//         <div className="w-full xl:w-[420px] xl:shrink-0 space-y-6">
//                     <PersonalInfo
//             resume={resume}
//             setResume={setResume}
//           />

//           <Education
//             resume={resume}
//             setResume={setResume}
//           />

//           {/* Show experience only if NOT fresher */}
//           {!resume.isFresher && (
//             <Experience
//               resume={resume}
//               setResume={setResume}
//             />
//           )}

//           {/* Internship (Optional) */}
//           <InternshipSection
//             resume={resume}
//             setResume={setResume}
//           />

//           <Skills
//             resume={resume}
//             setResume={setResume}
//           />

//           <Projects
//             resume={resume}
//             setResume={setResume}
//           />

//           <AchievementsSection
//             resume={resume}
//             setResume={setResume}
//           />

//           <CertificationsSection
//             resume={resume}
//             setResume={setResume}
//           />

//           <ReferencesSection
//             resume={resume}
//             setResume={setResume}
//           />

//           <InterestsSection
//             resume={resume}
//             setResume={setResume}
//           />

//         </div>

//         {/* ============================= */}
//         {/* PREVIEW */}
//         {/* ============================= */}

//         <div className="flex-1 w-full xl:sticky xl:top-6">

//           <div className="flex justify-center">
//                         <Preview
//               ref={previewRef}
//               resume={resume}
//             />
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default ResumeBuilder;

"use client";

import { useRef } from "react";

import jsPDF from "jspdf";
import { toPng } from "html-to-image";

import { PersonalInfo } from "./personal-info";
import { Education } from "./education";
import { Experience } from "./experience";
import { InternshipSection } from "./internship";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { AchievementsSection } from "./achievements";
import { CertificationsSection } from "./certifications";
import { ReferencesSection } from "./references";
import { InterestsSection } from "./interests";
import { Toolbar } from "./toolbar";
import { Preview } from "./preview";

import { useResumeBuilder } from "@/hooks/use-resume-builder";

export function ResumeBuilder() {
  const {
    resume,
    setResume,
    generateSummary,
    clearResume,
  } = useResumeBuilder();

  const previewRef = useRef<HTMLDivElement>(null);

  // ===========================
  // DOWNLOAD PDF
  // ===========================

  // const downloadPDF = async () => {
  const downloadPDF = async () => {
  // alert("Download Clicked");
    if (!previewRef.current) return;

    try {
      console.log(previewRef.current);
      const dataUrl = await toPng(previewRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
      });

      // console.log(dataUrl);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      pdf.addImage(
        dataUrl,
        "PNG",
        0,
        0,
        210,
        297
      );

      pdf.save(
        `${resume.personal.fullName || "Resume"}.pdf`
      );

    } catch (error) {
      console.error(error);
      alert("Unable to generate PDF.");
    }
  };

  return (
    <div className="space-y-8">

      {/* ======================= */}
      {/* HEADER */}
      {/* ======================= */}

      <div className="space-y-2">

        <h1 className="text-4xl font-bold tracking-tight">
          AI Resume Builder
        </h1>

        <p className="text-muted-foreground">
          Create ATS-friendly professional resumes with AI.
        </p>

      </div>

      {/* ======================= */}
      {/* TOOLBAR */}
      {/* ======================= */}

      <Toolbar
        template={resume.template}
        onTemplateChange={(template) =>
          setResume((prev) => ({
            ...prev,
            template,
          }))
        }
        onPrint={downloadPDF}
        onGenerateSummary={generateSummary}
        onClear={clearResume}
      />

      {/* ======================= */}
      {/* MAIN LAYOUT */}
      {/* ======================= */}

      <div
        className="
          flex
          flex-col
          xl:flex-row
          gap-8
          items-start
        "
      >
                {/* ======================= */}
        {/* LEFT PANEL */}
        {/* ======================= */}

        {/* <div
          className="
            w-full
            xl:w-[420px]
            xl:shrink-0
            space-y-6
          "
        > */}
        <div className="w-full xl:w-[360px] xl:shrink-0 space-y-6">

          <PersonalInfo
            resume={resume}
            setResume={setResume}
          />

          <Education
            resume={resume}
            setResume={setResume}
          />

          {/* Experience (Hide for Freshers) */}

          {!resume.isFresher && (
            <Experience
              resume={resume}
              setResume={setResume}
            />
          )}

          {/* Internship */}

          <InternshipSection
            resume={resume}
            setResume={setResume}
          />

          {/* Skills */}

          <Skills
            resume={resume}
            setResume={setResume}
          />

          {/* Projects */}

          <Projects
            resume={resume}
            setResume={setResume}
          />

          {/* Certifications */}

          <CertificationsSection
            resume={resume}
            setResume={setResume}
          />

          {/* Achievements */}

          <AchievementsSection
            resume={resume}
            setResume={setResume}
          />

          {/* References */}

          <ReferencesSection
            resume={resume}
            setResume={setResume}
          />

          {/* Interests */}

          <InterestsSection
            resume={resume}
            setResume={setResume}
          />

        </div>
                {/* ======================= */}
        {/* RIGHT PREVIEW PANEL */}
        {/* ======================= */}

        <div
          className="
            w-full
            flex-1
            xl:sticky
            xl:top-6
          "
        >

          <div
            className="
              w-full
              overflow-x-auto
              pb-4
            "
          >

            <div
              className="
                flex
                justify-center
                min-w-[794px]
              "
            >

              <Preview
                ref={previewRef}
                resume={resume}
              />

            </div>

          </div>

        </div>
                {/* ======================= */}
        {/* RIGHT PANEL */}
        {/* ======================= */}

        {/* <div
          className="
            flex-1
            w-full
            xl:sticky
            xl:top-6
            flex
            justify-center
          "
        >
          <Preview
            ref={previewRef}
            resume={resume}
          />
        </div> */}

      </div>

    </div>
  );
}

export default ResumeBuilder;