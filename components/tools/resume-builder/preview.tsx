// "use client";

// import type { ResumeData } from "@/types/resume";

// import {
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
// } from "lucide-react";

// interface PreviewProps {
//   resume: ResumeData;
// }

// export function Preview({
//   resume,
// }: PreviewProps) {
//   return (
//     <div
//       id="resume-preview"
//       className="rounded-2xl border bg-white p-10 text-black shadow-xl"
//     >
//       {/* Header */}

//       <div className="border-b pb-6">

//         <h1 className="text-4xl font-bold">

//           {resume.personal.fullName || "Your Name"}

//         </h1>

//         <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-600">

//           {resume.personal.email && (
//             <div className="flex items-center gap-2">
//               <Mail size={15} />
//               {resume.personal.email}
//             </div>
//           )}

//           {resume.personal.phone && (
//             <div className="flex items-center gap-2">
//               <Phone size={15} />
//               {resume.personal.phone}
//             </div>
//           )}

//           {resume.personal.location && (
//             <div className="flex items-center gap-2">
//               <MapPin size={15} />
//               {resume.personal.location}
//             </div>
//           )}

//           {resume.personal.linkedin && (
//             <div className="flex items-center gap-2">
//               <span className="font-semibold">GitHub</span>
//               {resume.personal.linkedin}
//             </div>
//           )}

//           {resume.personal.github && (
//             <div className="flex items-center gap-2">
//               <span className="font-semibold">LinkedIn</span>
//               {resume.personal.github}
//             </div>
//           )}

//           {resume.personal.website && (
//             <div className="flex items-center gap-2">
//               <Globe size={15} />
//               {resume.personal.website}
//             </div>
//           )}

//         </div>

//       </div>

//       {/* Summary */}

//       {resume.personal.summary && (

//         <section className="mt-8">

//           <h2 className="mb-2 border-b pb-2 text-xl font-semibold">

//             Professional Summary

//           </h2>

//           <p className="leading-7 text-gray-700">

//             {resume.personal.summary}

//           </p>

//         </section>

//       )}

//       {/* Skills */}

//       {resume.skills.length > 0 && (

//         <section className="mt-8">

//           <h2 className="mb-2 border-b pb-2 text-xl font-semibold">

//             Skills

//           </h2>

//           <div className="flex flex-wrap gap-2">

//             {resume.skills.map((skill, index) => (

//               <span
//                 key={index}
//                 className="rounded bg-gray-200 px-3 py-1 text-sm"
//               >
//                 {skill}
//               </span>

//             ))}

//           </div>

//         </section>

//       )}

//       {/* Experience */}

//       {resume.experience.length > 0 && (

//         <section className="mt-8">

//           <h2 className="mb-2 border-b pb-2 text-xl font-semibold">

//             Experience

//           </h2>

//           <div className="space-y-6">

//             {resume.experience.map((exp, index) => (

//               <div key={index}>

//                 <div className="flex items-center justify-between">

//                   <h3 className="font-bold">

//                     {exp.role}

//                   </h3>

//                   <span className="text-sm text-gray-500">

//                     {exp.duration}

//                   </span>

//                 </div>

//                 <p className="font-medium text-primary">

//                   {exp.company}

//                 </p>

//                 <p className="mt-2 text-gray-700">

//                   {exp.description}

//                 </p>

//               </div>

//             ))}

//           </div>

//         </section>

//       )}

//       {/* Education */}

//       {resume.education.length > 0 && (

//         <section className="mt-8">

//           <h2 className="mb-2 border-b pb-2 text-xl font-semibold">

//             Education

//           </h2>

//           <div className="space-y-5">

//             {resume.education.map((edu, index) => (

//               <div key={index}>

//                 <h3 className="font-bold">

//                   {edu.degree}

//                 </h3>

//                 <p>

//                   {edu.college}

//                 </p>

//                 <span className="text-sm text-gray-500">

//                   {edu.year}

//                 </span>

//               </div>

//             ))}

//           </div>

//         </section>

//       )}

//       {/* Projects */}

//       {resume.projects.length > 0 && (

//         <section className="mt-8">

//           <h2 className="mb-2 border-b pb-2 text-xl font-semibold">

//             Projects

//           </h2>

//           <div className="space-y-6">

//             {resume.projects.map((project, index) => (

//               <div key={index}>

//                 <h3 className="font-bold">

//                   {project.title}

//                 </h3>

//                 <p className="mt-2">

//                   {project.description}

//                 </p>

//                 {project.technologies && (

//                   <p className="mt-2 text-sm text-gray-500">

//                     <strong>Tech:</strong> {project.technologies}

//                   </p>

//                 )}

//                 {project.github && (

//                   <p className="text-sm text-blue-600">

//                     {project.github}

//                   </p>

//                 )}

//                 {project.live && (

//                   <p className="text-sm text-blue-600">

//                     {project.live}

//                   </p>

//                 )}

//               </div>

//             ))}

//           </div>

//         </section>

//       )}

//     </div>
//   );
// }

// export default Preview;


// "use client";

// import type { ResumeData } from "@/types/resume";

// import {
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
// } from "lucide-react";

// interface PreviewProps {
//   resume: ResumeData;
// }

// export function Preview({ resume }: PreviewProps) {
// "use client";

// import { forwardRef } from "react";
// import type { ResumeData } from "@/types/resume";

// interface PreviewProps {
//   resume: ResumeData;
// }

// export const Preview = forwardRef<HTMLDivElement, PreviewProps>(
//   ({ resume }, ref) => {
//   return (
//     <div
//       id="resume-preview"
//       className="rounded-2xl border border-gray-300 bg-white p-10 text-black shadow-xl"
//       style={{
//         background: "#ffffff",
//         color: "#000000",
//       }}
//     >
//       {/* Header */}

//       <div className="border-b border-gray-300 pb-6">

//         <h1 className="text-4xl font-bold">
//           {resume.personal.fullName || "Your Name"}
//         </h1>

//         <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-700">

//           {resume.personal.email && (
//             <div className="flex items-center gap-2">
//               <Mail size={15} />
//               {resume.personal.email}
//             </div>
//           )}

//           {resume.personal.phone && (
//             <div className="flex items-center gap-2">
//               <Phone size={15} />
//               {resume.personal.phone}
//             </div>
//           )}

//           {resume.personal.location && (
//             <div className="flex items-center gap-2">
//               <MapPin size={15} />
//               {resume.personal.location}
//             </div>
//           )}

//           {resume.personal.linkedin && (
//             <div className="flex items-center gap-2">
//               <strong>LinkedIn:</strong>
//               {resume.personal.linkedin}
//             </div>
//           )}

//           {resume.personal.github && (
//             <div className="flex items-center gap-2">
//               <strong>GitHub:</strong>
//               {resume.personal.github}
//             </div>
//           )}

//           {resume.personal.website && (
//             <div className="flex items-center gap-2">
//               <Globe size={15} />
//               {resume.personal.website}
//             </div>
//           )}

//         </div>

//       </div>

//       {/* Summary */}

//       {resume.personal.summary && (
//         <section className="mt-8">

//           <h2 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold">
//             Professional Summary
//           </h2>

//           <p className="leading-7 text-gray-700">
//             {resume.personal.summary}
//           </p>

//         </section>
//       )}

//       {/* Skills */}

//       {resume.skills.length > 0 && (
//         <section className="mt-8">

//           <h2 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold">
//             Skills
//           </h2>

//           <div className="flex flex-wrap gap-2">

//             {resume.skills.map((skill, index) => (
//               <span
//                 key={index}
//                 className="rounded bg-gray-200 px-3 py-1 text-sm"
//               >
//                 {skill}
//               </span>
//             ))}

//           </div>

//         </section>
//       )}

//       {/* Experience */}

//       {resume.experience.length > 0 && (
//         <section className="mt-8">

//           <h2 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold">
//             Experience
//           </h2>

//           <div className="space-y-6">

//             {resume.experience.map((exp, index) => (
//               <div key={index}>

//                 <div className="flex items-center justify-between">

//                   <h3 className="font-bold">
//                     {exp.role}
//                   </h3>

//                   <span className="text-sm text-gray-500">
//                     {exp.duration}
//                   </span>

//                 </div>

//                 <p className="font-semibold text-black">
//                   {exp.company}
//                 </p>

//                 <p className="mt-2 text-gray-700">
//                   {exp.description}
//                 </p>

//               </div>
//             ))}

//           </div>

//         </section>
//       )}

//       {/* Education */}

//       {resume.education.length > 0 && (
//         <section className="mt-8">

//           <h2 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold">
//             Education
//           </h2>

//           <div className="space-y-5">

//             {resume.education.map((edu, index) => (
//               <div key={index}>

//                 <h3 className="font-bold">
//                   {edu.degree}
//                 </h3>

//                 <p>{edu.college}</p>

//                 <span className="text-sm text-gray-500">
//                   {edu.year}
//                 </span>

//               </div>
//             ))}

//           </div>

//         </section>
//       )}

//       {/* Projects */}

//       {resume.projects.length > 0 && (
//         <section className="mt-8">

//           <h2 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold">
//             Projects
//           </h2>

//           <div className="space-y-6">

//             {resume.projects.map((project, index) => (
//               <div key={index}>

//                 <h3 className="font-bold">
//                   {project.title}
//                 </h3>

//                 <p className="mt-2 text-gray-700">
//                   {project.description}
//                 </p>

//                 {project.technologies && (
//                   <p className="mt-2 text-sm text-gray-500">
//                     <strong>Technologies:</strong>{" "}
//                     {project.technologies}
//                   </p>
//                 )}

//                 {project.github && (
//                   <p className="mt-2 text-sm text-blue-600 break-all">
//                     GitHub: {project.github}
//                   </p>
//                 )}

//                 {project.live && (
//                   <p className="text-sm text-blue-600 break-all">
//                     Live: {project.live}
//                   </p>
//                 )}

//               </div>
//             ))}

//           </div>

//         </section>
//       )}

//     </div>
//   );
// }

// // export default Preview;
// Preview.displayName = "Preview";

// "use client";

// import { forwardRef } from "react";

// import type { ResumeData } from "@/types/resume";

// import {
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
// } from "lucide-react";

// interface PreviewProps {
//   resume: ResumeData;
// }

// export const Preview = forwardRef<HTMLDivElement, PreviewProps>(
//   ({ resume }, ref) => {
//     return (
//       <div
//         ref={ref}
//         id="resume-preview"
//         className="rounded-2xl border border-gray-300 bg-white p-10 text-black shadow-xl"
//         style={{
//           background: "#ffffff",
//           color: "#000000",
//         }}
//       >
//         {/* Header */}

//         <div className="border-b border-gray-300 pb-6">
//           <h1 className="text-4xl font-bold">
//             {resume.personal.fullName || "Your Name"}
//           </h1>

//           <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-700">
//             {resume.personal.email && (
//               <div className="flex items-center gap-2">
//                 <Mail size={15} />
//                 {resume.personal.email}
//               </div>
//             )}

//             {resume.personal.phone && (
//               <div className="flex items-center gap-2">
//                 <Phone size={15} />
//                 {resume.personal.phone}
//               </div>
//             )}

//             {resume.personal.location && (
//               <div className="flex items-center gap-2">
//                 <MapPin size={15} />
//                 {resume.personal.location}
//               </div>
//             )}

//             {resume.personal.linkedin && (
//               <div className="flex items-center gap-2">
//                 <strong>LinkedIn:</strong>
//                 {resume.personal.linkedin}
//               </div>
//             )}

//             {resume.personal.github && (
//               <div className="flex items-center gap-2">
//                 <strong>GitHub:</strong>
//                 {resume.personal.github}
//               </div>
//             )}

//             {resume.personal.website && (
//               <div className="flex items-center gap-2">
//                 <Globe size={15} />
//                 {resume.personal.website}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Summary */}

//         {resume.personal.summary && (
//           <section className="mt-8">
//             <h2 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold">
//               Professional Summary
//             </h2>

//             <p className="leading-7 text-gray-700">
//               {resume.personal.summary}
//             </p>
//           </section>
//         )}

//         {/* Skills */}

//         {resume.skills.length > 0 && (
//           <section className="mt-8">
//             <h2 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold">
//               Skills
//             </h2>

//             <div className="flex flex-wrap gap-2">
//               {resume.skills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="rounded bg-gray-200 px-3 py-1 text-sm"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Experience */}

//         {resume.experience.length > 0 && (
//           <section className="mt-8">
//             <h2 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold">
//               Experience
//             </h2>

//             <div className="space-y-6">
//               {resume.experience.map((exp, index) => (
//                 <div key={index}>
//                   <div className="flex items-center justify-between">
//                     <h3 className="font-bold">
//                       {exp.role}
//                     </h3>

//                     <span className="text-sm text-gray-500">
//                       {exp.duration}
//                     </span>
//                   </div>

//                   <p className="font-semibold text-black">
//                     {exp.company}
//                   </p>

//                   <p className="mt-2 text-gray-700">
//                     {exp.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Education */}

//         {resume.education.length > 0 && (
//           <section className="mt-8">
//             <h2 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold">
//               Education
//             </h2>

//             <div className="space-y-5">
//               {resume.education.map((edu, index) => (
//                 <div key={index}>
//                   <h3 className="font-bold">
//                     {edu.degree}
//                   </h3>

//                   <p>{edu.college}</p>

//                   <span className="text-sm text-gray-500">
//                     {edu.year}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* Projects */}

//         {resume.projects.length > 0 && (
//           <section className="mt-8">
//             <h2 className="mb-3 border-b border-gray-300 pb-2 text-xl font-semibold">
//               Projects
//             </h2>

//             <div className="space-y-6">
//               {resume.projects.map((project, index) => (
//                 <div key={index}>
//                   <h3 className="font-bold">
//                     {project.title}
//                   </h3>

//                   <p className="mt-2 text-gray-700">
//                     {project.description}
//                   </p>

//                   {project.technologies && (
//                     <p className="mt-2 text-sm text-gray-500">
//                       <strong>Technologies:</strong>{" "}
//                       {project.technologies}
//                     </p>
//                   )}

//                   {project.github && (
//                     <p className="mt-2 break-all text-sm text-blue-600">
//                       GitHub: {project.github}
//                     </p>
//                   )}

//                   {project.live && (
//                     <p className="break-all text-sm text-blue-600">
//                       Live: {project.live}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     );
//   }
// );

// Preview.displayName = "Preview";

// export default Preview;


// "use client";

// import { forwardRef } from "react";

// import type { ResumeData } from "@/types/resume";

// import {
//   ModernTemplate,
//   ProfessionalTemplate,
//   MinimalTemplate,
// } from "./templates";

// interface PreviewProps {
//   resume: ResumeData;
// }

// export const Preview = forwardRef<HTMLDivElement, PreviewProps>(
//   ({ resume }, ref) => {
//     switch (resume.template) {
//       case "professional":
//         return (
//           <div ref={ref} id="resume-preview">
//             <ProfessionalTemplate resume={resume} />
//           </div>
//         );

//       case "minimal":
//         return (
//           <div ref={ref} id="resume-preview">
//             <MinimalTemplate resume={resume} />
//           </div>
//         );

//       case "modern":
//       default:
//         return (
//           <div ref={ref} id="resume-preview">
//             <ModernTemplate resume={resume} />
//           </div>
//         );
//     }
//   }
// );

// Preview.displayName = "Preview";

// export default Preview;

// "use client";

// import { forwardRef } from "react";

// import type { ResumeData } from "@/types/resume";

// import {
//   ModernTemplate,
//   ProfessionalTemplate,
//   MinimalTemplate,
// } from "./templates";

// interface PreviewProps {
//   resume: ResumeData;
// }

// export const Preview = forwardRef<HTMLDivElement, PreviewProps>(
//   ({ resume }, ref) => {
//     return (
//       <div
//         ref={ref}
//         id="resume-preview"
//         className="
//           mx-auto
//           bg-white
//           shadow-2xl
//           overflow-hidden

//           w-full
//           max-w-[794px]

//           min-h-[1123px]

//           scale-100
//           origin-top

//           xl:w-[794px]
//         "
//       >
//         {resume.template === "professional" && (
//           <ProfessionalTemplate resume={resume} />
//         )}

//         {resume.template === "minimal" && (
//           <MinimalTemplate resume={resume} />
//         )}

//         {(resume.template === "modern" ||
//           !resume.template) && (
//           <ModernTemplate resume={resume} />
//         )}
//       </div>
//     );
//   }
// );

// Preview.displayName = "Preview";

// export default Preview;


"use client";

import { forwardRef } from "react";
import type { ResumeData } from "@/types/resume";

import {
  ModernTemplate,
  ProfessionalTemplate,
  MinimalTemplate,
} from "./templates";

interface PreviewProps {
  resume: ResumeData;
}

export const Preview = forwardRef<HTMLDivElement, PreviewProps>(
  ({ resume }, ref) => {
    return (
      <div className="w-full flex justify-center overflow-hidden">

        {/* Preview Wrapper */}

        <div
          className="
            origin-top
            scale-[0.65]

            sm:scale-[0.75]

            md:scale-[0.85]

            lg:scale-[0.95]

            xl:scale-100
          "
        >
          <div
            ref={ref}
            id="resume-preview"
            className="
              bg-white
              shadow-2xl
              w-[794px]
              min-h-[1123px]
            "
          >
            {resume.template === "professional" && (
              <ProfessionalTemplate resume={resume} />
            )}

            {resume.template === "minimal" && (
              <MinimalTemplate resume={resume} />
            )}

            {(resume.template === "modern" ||
              !resume.template) && (
              <ModernTemplate resume={resume} />
            )}
          </div>
        </div>
      </div>
    );
  }
);

Preview.displayName = "Preview";

export default Preview;