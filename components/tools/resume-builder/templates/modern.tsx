// "use client";

// import type { ResumeData } from "@/types/resume";

// interface Props {
//   resume: ResumeData;
// }

// export function ModernTemplate({ resume }: Props) {
//   return (
//     <div className="rounded-3xl bg-white p-10 shadow-xl">
//       <h1 className="text-5xl font-bold">
//         {resume.personal.fullName || "Your Name"}
//       </h1>

//       <p className="mt-2 text-gray-500">
//         {resume.personal.email}
//       </p>

//       <hr className="my-6" />

//       {resume.personal.summary && (
//         <>
//           <h2 className="text-xl font-semibold">
//             Professional Summary
//           </h2>

//           <p className="mt-2">
//             {resume.personal.summary}
//           </p>
//         </>
//       )}
//     </div>
//   );
// }

// "use client";

// import type { ResumeData } from "@/types/resume";

// import {
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
// } from "lucide-react";

// interface Props {
//   resume: ResumeData;
// }

// export function ModernTemplate({ resume }: Props) {
//   return (
//     <div className="mx-auto w-full max-w-[850px] rounded-2xl bg-white p-10 text-black shadow-xl">

//       {/* Header */}

//       <div className="border-b-4 border-blue-600 pb-6">

//         <h1 className="text-5xl font-extrabold tracking-tight">
//           {resume.personal.fullName || "Your Name"}
//         </h1>

//         <p className="mt-2 text-lg text-gray-600">
//           Frontend Developer
//         </p>

//         <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">

//           {resume.personal.email && (
//             <div className="flex items-center gap-2">
//               <Mail className="h-4 w-4 text-blue-600" />
//               {resume.personal.email}
//             </div>
//           )}

//           {resume.personal.phone && (
//             <div className="flex items-center gap-2">
//               <Phone className="h-4 w-4 text-blue-600" />
//               {resume.personal.phone}
//             </div>
//           )}

//           {resume.personal.location && (
//             <div className="flex items-center gap-2">
//               <MapPin className="h-4 w-4 text-blue-600" />
//               {resume.personal.location}
//             </div>
//           )}

//           {resume.personal.website && (
//             <div className="flex items-center gap-2">
//               <Globe className="h-4 w-4 text-blue-600" />
//               {resume.personal.website}
//             </div>
//           )}

//         </div>

//       </div>

//       {/* Summary */}

//       {resume.personal.summary && (
//         <section className="mt-8">

//           <h2 className="mb-3 text-xl font-bold uppercase tracking-wide text-blue-700">
//             Professional Summary
//           </h2>

//           <p className="leading-7 text-gray-700">
//             {resume.personal.summary}
//           </p>

//         </section>
//       )}

//       {/* Experience */}

//       {resume.experience.length > 0 && (
//         <section className="mt-8">

//           <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-blue-700">
//             Experience
//           </h2>

//           <div className="space-y-6">

//             {resume.experience.map((exp, index) => (
//               <div
//                 key={index}
//                 className="border-l-4 border-blue-500 pl-5"
//               >

//                 <div className="flex items-center justify-between">

//                   <h3 className="text-lg font-bold">
//                     {exp.role}
//                   </h3>

//                   <span className="text-sm text-gray-500">
//                     {exp.duration}
//                   </span>

//                 </div>

//                 <p className="font-semibold text-blue-600">
//                   {exp.company}
//                 </p>

//                 <p className="mt-2 leading-7 text-gray-700">
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

//           <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-blue-700">
//             Education
//           </h2>

//           <div className="space-y-5">

//             {resume.education.map((edu, index) => (
//               <div key={index}>

//                 <h3 className="font-bold">
//                   {edu.degree}
//                 </h3>

//                 <p className="text-gray-700">
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

//           <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-blue-700">
//             Projects
//           </h2>

//           <div className="space-y-5">

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

//               </div>
//             ))}

//           </div>

//         </section>
//       )}

//       {/* Skills */}

//       {resume.skills.length > 0 && (
//         <section className="mt-8">

//           <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-blue-700">
//             Skills
//           </h2>

//           <div className="flex flex-wrap gap-2">

//             {resume.skills.map((skill, index) => (
//               <span
//                 key={index}
//                 className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
//               >
//                 {skill}
//               </span>
//             ))}

//           </div>

//         </section>
//       )}

//     </div>
//   );
// }

// "use client";

// import type { ResumeData } from "@/types/resume";

// import {
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
// } from "lucide-react";

// import {
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";

// interface Props {
//   resume: ResumeData;
// }

// export function ModernTemplate({ resume }: Props) {

//     return (
//   <div
//     className="
//       mx-auto
//       w-full
//       max-w-[850px]
//       overflow-hidden
//       rounded-[28px]
//       bg-white
//       text-black
//       shadow-[0_25px_80px_rgba(0,0,0,0.12)]
//     "
//   >
//     {/* ========================= */}
//     {/* HEADER */}
//     {/* ========================= */}

//     <div className="relative overflow-hidden bg-[#0F172A] px-12 py-12 text-white">

//       {/* Background Accent */}

//       <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

//       <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

//       <div className="relative z-10 flex items-center gap-8">

//         {/* ================= PHOTO ================= */}

//         <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-full border-[5px] border-white/90 bg-gradient-to-br from-slate-600 to-slate-800 shadow-2xl overflow-hidden">

//           {resume.personal.photo ? (
//             <img
//               src={resume.personal.photo}
//               alt="Profile"
//               className="h-full w-full object-cover"
//             />
//           ) : (
//             <span className="text-5xl font-black uppercase tracking-wide">
//               {resume.personal.fullName
//                 ? resume.personal.fullName.charAt(0)
//                 : "U"}
//             </span>
//           )}

//         </div>

//         {/* ================= RIGHT ================= */}

//         <div className="flex-1">

//           <h1
//             className="
//               text-[44px]
//               font-black
//               uppercase
//               tracking-tight
//               leading-none
//             "
//           >
//             {resume.personal.fullName || "Your Name"}
//           </h1>

//           <p className="mt-3 text-xl font-medium text-slate-300">
//             {resume.personal.jobTitle || "Professional Title"}
//           </p>

//           {/* Divider */}

//           <div className="my-6 h-px w-full bg-white/15" />

//           {/* Contact */}

//           <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-[15px]">

//             {resume.personal.email && (
//               <div className="flex items-center gap-3">
//                 <Mail className="h-4 w-4 text-blue-400" />
//                 <span className="truncate">
//                   {resume.personal.email}
//                 </span>
//               </div>
//             )}

//             {resume.personal.phone && (
//               <div className="flex items-center gap-3">
//                 <Phone className="h-4 w-4 text-blue-400" />
//                 {resume.personal.phone}
//               </div>
//             )}

//             {resume.personal.location && (
//               <div className="flex items-center gap-3">
//                 <MapPin className="h-4 w-4 text-blue-400" />
//                 {resume.personal.location}
//               </div>
//             )}

//             {resume.personal.website && (
//               <div className="flex items-center gap-3">
//                 <Globe className="h-4 w-4 text-blue-400" />

//                 <span className="truncate">
//                   {resume.personal.website}
//                 </span>
//               </div>
//             )}

//             {resume.personal.github && (
//               <div className="flex items-center gap-3">
//                 <FaGithub className="text-blue-400" />
//                 <span>GitHub</span>
//               </div>
//             )}

//             {resume.personal.linkedin && (
//               <div className="flex items-center gap-3">
//                 <FaLinkedin className="text-blue-400" />
//                 <span>LinkedIn</span>
//               </div>
//             )}

//           </div>

//         </div>

//       </div>

//     </div>

//     {/* ========================= */}
//     {/* BODY */}
//     {/* ========================= */}

//     <div className="space-y-12 px-12 py-12">

//       {/* Summary */}

//       {resume.personal.summary && (
//         <section>

//           <div className="mb-6 flex items-center gap-4">

//             <div className="h-7 w-1 rounded-full bg-blue-600" />

//             <h2 className="text-2xl font-bold uppercase tracking-wide">
//               Professional Summary
//             </h2>

//           </div>

//           <p className="leading-8 text-slate-700">
//             {resume.personal.summary}
//           </p>

//         </section>
//       )}

//       {/* 👇 Yahin se tumhara Experience wala section start hoga */}


//   );
// }

// export default ModernTemplate;

// "use client";

// import type { ResumeData } from "@/types/resume";

// import {
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
// } from "lucide-react";

// import {
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";

// interface Props {
//   resume: ResumeData;
// }

// export function ModernTemplate({ resume }: Props) {
//   return (
//     <div className="mx-auto w-full max-w-[1000px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

//       <div className="grid grid-cols-[300px_1fr]">

//         {/* ========================= */}
//         {/* LEFT SIDEBAR */}
//         {/* ========================= */}

//         <aside className="bg-slate-900 text-white">

//           {/* Profile */}

//           <div className="flex flex-col items-center border-b border-slate-700 px-8 py-10">

//             <div className="mb-6 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-[6px] border-white bg-slate-700 shadow-xl">

//               {resume.personal.photo ? (
//                 <img
//                   src={resume.personal.photo}
//                   alt="Profile"
//                   className="h-full w-full object-cover"
//                 />
//               ) : (
//                 <span className="text-6xl font-black uppercase">
//                   {resume.personal.fullName
//                     ? resume.personal.fullName.charAt(0)
//                     : "U"}
//                 </span>
//               )}

//             </div>

//             <h1 className="text-center text-2xl font-bold uppercase tracking-wide">
//               {resume.personal.fullName || "Your Name"}
//             </h1>

//             <p className="mt-2 text-center text-sm text-slate-300">
//               {resume.personal.jobTitle || "Professional Title"}
//             </p>

//           </div>

//           {/* Contact */}

//           <div className="px-8 py-8">

//             <h2 className="mb-6 border-b border-slate-700 pb-2 text-lg font-bold uppercase tracking-wider">
//               Contact
//             </h2>

//             <div className="space-y-5">

//               {resume.personal.phone && (
//                 <div className="flex items-start gap-3">
//                   <Phone className="mt-1 h-4 w-4 text-blue-400" />
//                   <span className="text-sm">
//                     {resume.personal.phone}
//                   </span>
//                 </div>
//               )}

//               {resume.personal.email && (
//                 <div className="flex items-start gap-3">
//                   <Mail className="mt-1 h-4 w-4 text-blue-400" />
//                   <span className="break-all text-sm">
//                     {resume.personal.email}
//                   </span>
//                 </div>
//               )}

//               {resume.personal.location && (
//                 <div className="flex items-start gap-3">
//                   <MapPin className="mt-1 h-4 w-4 text-blue-400" />
//                   <span className="text-sm">
//                     {resume.personal.location}
//                   </span>
//                 </div>
//               )}

//               {resume.personal.website && (
//                 <div className="flex items-start gap-3">
//                   <Globe className="mt-1 h-4 w-4 text-blue-400" />
//                   <span className="break-all text-sm">
//                     {resume.personal.website}
//                   </span>
//                 </div>
//               )}

//               {resume.personal.github && (
//                 <div className="flex items-start gap-3">
//                   <FaGithub className="mt-1 text-blue-400" />
//                   <span className="break-all text-sm">
//                     {resume.personal.github}
//                   </span>
//                 </div>
//               )}

//               {resume.personal.linkedin && (
//                 <div className="flex items-start gap-3">
//                   <FaLinkedin className="mt-1 text-blue-400" />
//                   <span className="break-all text-sm">
//                     {resume.personal.linkedin}
//                   </span>
//                 </div>
//               )}

//             </div>

//           </div>
//                     {/* ========================= */}
//           {/* SKILLS */}
//           {/* ========================= */}

//           <div className="px-8 pb-8">

//             <h2 className="mb-6 border-b border-slate-700 pb-2 text-lg font-bold uppercase tracking-wider">
//               Skills
//             </h2>

//             <div className="flex flex-wrap gap-2">

//               {resume.skills.length > 0 ? (

//                 resume.skills.map((skill, index) => (

//                   <span
//                     key={index}
//                     className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300 border border-blue-500/30"
//                   >
//                     {skill}
//                   </span>

//                 ))

//               ) : (

//                 <span className="text-sm text-slate-400">
//                   No skills added
//                 </span>

//               )}

//             </div>

//           </div>

//           {/* ========================= */}
//           {/* EDUCATION */}
//           {/* ========================= */}

//           <div className="px-8 pb-10">

//             <h2 className="mb-6 border-b border-slate-700 pb-2 text-lg font-bold uppercase tracking-wider">
//               Education
//             </h2>

//             <div className="space-y-5">

//               {resume.education.length > 0 ? (

//                 resume.education.map((edu, index) => (

//                   <div key={index}>

//                     <h3 className="font-semibold text-white">
//                       {edu.degree}
//                     </h3>

//                     <p className="text-sm text-slate-300">
//                       {edu.college}
//                     </p>

//                     <p className="text-xs text-slate-400">
//                       {edu.year}
//                     </p>

//                   </div>

//                 ))

//               ) : (

//                 <span className="text-sm text-slate-400">
//                   No education added
//                 </span>

//               )}

//             </div>

//           </div>

//         </aside>

//         {/* ========================= */}
//         {/* RIGHT CONTENT */}
//         {/* ========================= */}

//         <main className="bg-white p-10">

//           {/* SUMMARY */}

//           {resume.personal.summary && (

//             <section className="mb-12">

//               <div className="mb-5 flex items-center gap-3">

//                 <div className="h-8 w-1 rounded-full bg-blue-600" />

//                 <h2 className="text-2xl font-bold uppercase tracking-wide text-slate-900">
//                   Professional Summary
//                 </h2>

//               </div>

//               <p className="leading-8 text-slate-700">
//                 {resume.personal.summary}
//               </p>

//             </section>

//           )}
//                     {/* ========================= */}
//           {/* EXPERIENCE */}
//           {/* ========================= */}

//           <section className="mb-12">

//             <div className="mb-6 flex items-center gap-3">

//               <div className="h-8 w-1 rounded-full bg-blue-600" />

//               <h2 className="text-2xl font-bold uppercase tracking-wide text-slate-900">
//                 Experience
//               </h2>

//             </div>

//             {resume.experience.length > 0 ? (

//               <div className="relative ml-3 border-l-2 border-slate-200">

//                 {resume.experience.map((exp, index) => (

//                   <div
//                     key={index}
//                     className="relative mb-10 pl-10"
//                   >

//                     {/* Timeline Dot */}

//                     <div className="absolute -left-[11px] top-2 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow-md" />

//                     {/* Card */}

//                     <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all hover:shadow-lg">

//                       <div className="flex items-start justify-between gap-5">

//                         <div>

//                           <h3 className="text-xl font-bold text-slate-900">
//                             {exp.role}
//                           </h3>

//                           <p className="mt-1 text-base font-semibold text-blue-700">
//                             {exp.company}
//                           </p>

//                         </div>

//                         <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700 whitespace-nowrap">
//                           {exp.duration}
//                         </span>

//                       </div>

//                       <p className="mt-4 leading-8 text-slate-700">
//                         {exp.description}
//                       </p>

//                     </div>

//                   </div>

//                 ))}

//               </div>

//             ) : (

//               <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-400">
//                 No experience added
//               </div>

//             )}

//           </section>
//                     {/* ========================= */}
//           {/* PROJECTS */}
//           {/* ========================= */}

//           <section>

//             <div className="mb-6 flex items-center gap-3">

//               <div className="h-8 w-1 rounded-full bg-blue-600" />

//               <h2 className="text-2xl font-bold uppercase tracking-wide text-slate-900">
//                 Projects
//               </h2>

//             </div>

//             {resume.projects.length > 0 ? (

//               <div className="space-y-8">

//                 {resume.projects.map((project, index) => (

//                   <div
//                     key={index}
//                     className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
//                   >

//                     <h3 className="text-xl font-bold text-slate-900">
//                       {project.title}
//                     </h3>

//                     <p className="mt-4 leading-8 text-slate-700">
//                       {project.description}
//                     </p>

//                     {project.technologies && (

//                       <div className="mt-5 flex flex-wrap gap-2">

//                         {project.technologies
//                           .split(",")
//                           .map((tech, i) => (

//                             <span
//                               key={i}
//                               className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
//                             >
//                               {tech.trim()}
//                             </span>

//                           ))}

//                       </div>

//                     )}

//                     {(project.github || project.live) && (

//                       <div className="mt-6 flex flex-wrap gap-4">

//                         {project.github && (

//                           <a
//                             href={project.github}
//                             target="_blank"
//                             rel="noreferrer"
//                             className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
//                           >
//                             GitHub
//                           </a>

//                         )}

//                         {project.live && (

//                           <a
//                             href={project.live}
//                             target="_blank"
//                             rel="noreferrer"
//                             className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
//                           >
//                             Live Demo
//                           </a>

//                         )}

//                       </div>

//                     )}

//                   </div>

//                 ))}

//               </div>

//             ) : (

//               <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-400">
//                 No projects added
//               </div>

//             )}

//           </section>

//         </main>

//       </div>

//     </div>

//   );
// }

// export default ModernTemplate;

// "use client";

// import type { ResumeData } from "@/types/resume";

// import {
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
// } from "lucide-react";

// import {
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";

// interface Props {
//   resume: ResumeData;
// }

// export default function ModernTemplate({
//   resume,
// }: Props) {
//   return (
//     <div className="mx-auto w-full max-w-[1100px] overflow-hidden rounded-xl bg-white shadow-2xl">

//       <div className="grid grid-cols-[200px_1fr]">

//         {/* LEFT SIDEBAR */}

//         <aside className="bg-[#f4f4f4]">

//           {/* Photo */}

//           <div className="flex flex-col items-center pt-10">

//             <div className="h-36 w-36 overflow-hidden rounded-full bg-gray-300 shadow">

//               {resume.personal.photo ? (

//                 <img
//                   src={resume.personal.photo}
//                   alt="profile"
//                   className="h-full w-full object-cover"
//                 />

//               ) : (

//                 <div className="flex h-full items-center justify-center text-5xl font-bold text-gray-600">

//                   {resume.personal.fullName
//                     ? resume.personal.fullName[0]
//                     : "U"}

//                 </div>

//               )}

//             </div>

//           </div>

//           <div className="px-8 py-8">
//                       {/* ======================== */}
//           {/* CONTACT */}
//           {/* ======================== */}

//           <section className="mt-10">

//             <h2 className="mb-5 text-xs font-bold uppercase tracking-[3px] text-gray-700">
//               Contact Me
//             </h2>

//             <div className="space-y-4 text-sm">

//               {resume.personal.phone && (
//                 <div className="flex items-start gap-3">
//                   <Phone size={16} className="mt-1 text-gray-700" />
//                   <span className="break-all text-gray-700">
//                     {resume.personal.phone}
//                   </span>
//                 </div>
//               )}

//               {resume.personal.email && (
//                 <div className="flex items-start gap-3">
//                   <Mail size={16} className="mt-1 text-gray-700" />
//                   <span className="break-all text-gray-700">
//                     {resume.personal.email}
//                   </span>
//                 </div>
//               )}

//               {resume.personal.location && (
//                 <div className="flex items-start gap-3">
//                   <MapPin size={16} className="mt-1 text-gray-700" />
//                   <span className="text-gray-700">
//                     {resume.personal.location}
//                   </span>
//                 </div>
//               )}

//               {resume.personal.website && (
//                 <div className="flex items-start gap-3">
//                   <Globe size={16} className="mt-1 text-gray-700" />
//                   <span className="break-all text-gray-700">
//                     {resume.personal.website}
//                   </span>
//                 </div>
//               )}

//               {resume.personal.github && (
//                 <div className="flex items-start gap-3">
//                   <FaGithub className="mt-1 text-gray-700" />
//                   <span className="break-all text-gray-700">
//                     {resume.personal.github}
//                   </span>
//                 </div>
//               )}

//               {resume.personal.linkedin && (
//                 <div className="flex items-start gap-3">
//                   <FaLinkedin className="mt-1 text-gray-700" />
//                   <span className="break-all text-gray-700">
//                     {resume.personal.linkedin}
//                   </span>
//                 </div>
//               )}

//             </div>

//           </section>

//           {/* ======================== */}
//           {/* EDUCATION */}
//           {/* ======================== */}

//           <section className="mt-12">

//             <h2 className="mb-5 text-xs font-bold uppercase tracking-[3px] text-gray-700">
//               Education
//             </h2>

//             <div className="space-y-6">

//               {resume.education.length > 0 ? (

//                 resume.education.map((edu, index) => (

//                   <div key={index}>

//                     <h3 className="font-semibold text-gray-900">
//                       {edu.degree}
//                     </h3>

//                     <p className="text-sm text-gray-600">
//                       {edu.college}
//                     </p>

//                     <p className="text-xs text-gray-500">
//                       {edu.year}
//                     </p>

//                   </div>

//                 ))

//               ) : (

//                 <p className="text-sm text-gray-400">
//                   No education added
//                 </p>

//               )}

//             </div>

//           </section>
//                     {/* ======================== */}
//           {/* SKILLS */}
//           {/* ======================== */}

//           <section className="mt-12">

//             <h2 className="mb-5 text-xs font-bold uppercase tracking-[3px] text-gray-700">
//               Skills
//             </h2>

//             <div className="space-y-3">

//               {resume.skills.length > 0 ? (

//                 resume.skills.map((skill, index) => (

//                   <div key={index}>

//                     <div className="mb-1 flex justify-between text-xs font-medium text-gray-700">

//                       <span>{skill}</span>

//                       <span>●●●●●</span>

//                     </div>

//                     <div className="h-2 rounded-full bg-gray-300">

//                       <div className="h-2 w-[85%] rounded-full bg-slate-800" />

//                     </div>

//                   </div>

//                 ))

//               ) : (

//                 <p className="text-sm text-gray-400">
//                   No skills added
//                 </p>

//               )}

//             </div>

//           </section>

//         </div>

//       </aside>

//       {/* ================================= */}
//       {/* RIGHT CONTENT */}
//       {/* ================================= */}

//       {/* <main className="bg-white p-5"> */}
//       <main className="w-full bg-white px-5 py-4">

//         {/* Header */}

//         <section>

//           {/* <h1 className="text-3xl font-black uppercase leading-none tracking-tight text-slate-900"> */}
//           {/* <h1 className="text-5xl font-black uppercase leading-none tracking-tight text-slate-900"> */}
//           <h1 className="text-2xl font-black uppercase leading-none tracking-tight text-slate-900">

//             {resume.personal.fullName || "Your Name"}

//           </h1>

//           <p className="mt-4 text-xl font-light text-slate-500">

//             {resume.personal.jobTitle || "Professional Title"}

//           </p>

//         </section>

//         {/* ABOUT */}

//         <section className="mt-12">

//           <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-slate-900">

//             About Me

//           </h2>

//           <p className="leading-8 text-slate-600">

//             {resume.personal.summary ||

//               "Write a professional summary about yourself."}

//           </p>

//         </section>
//                 {/* ================================= */}
//         {/* EXPERIENCE */}
//         {/* ================================= */}

//         <section className="mt-14">

//           <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-slate-900">
//             Work Experience
//           </h2>

//           {resume.experience.length > 0 ? (

//             <div className="space-y-8">

//               {resume.experience.map((exp, index) => (

//                 <div
//                   key={index}
//                   className="border-l-4 border-slate-800 pl-6"
//                 >

//                   <div className="flex items-center justify-between">

//                     <h3 className="text-lg font-bold text-slate-900">
//                       {exp.company}
//                     </h3>

//                     <span className="text-sm font-semibold text-slate-500">
//                       {exp.duration}
//                     </span>

//                   </div>

//                   <p className="mt-1 font-semibold text-slate-700">
//                     {exp.role}
//                   </p>

//                   <p className="mt-3 leading-7 text-slate-600">
//                     {exp.description}
//                   </p>

//                 </div>

//               ))}

//             </div>

//           ) : (

//             <p className="text-slate-400">
//               No experience added.
//             </p>

//           )}

//         </section>

//         {/* ================================= */}
//         {/* PROJECTS */}
//         {/* ================================= */}

//         <section className="mt-14">

//           <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-slate-900">
//             Projects
//           </h2>

//           {resume.projects.length > 0 ? (

//             <div className="space-y-8">

//               {resume.projects.map((project, index) => (

//                 <div
//                   key={index}
//                   className="rounded-xl border border-slate-200 p-6"
//                 >

//                   <h3 className="text-lg font-bold text-slate-900">
//                     {project.title}
//                   </h3>

//                   <p className="mt-3 leading-7 text-slate-600">
//                     {project.description}
//                   </p>

//                   {project.technologies && (

//                     <div className="mt-4 flex flex-wrap gap-2">

//                       {project.technologies
//                         .split(",")
//                         .map((tech, i) => (

//                           <span
//                             key={i}
//                             className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
//                           >
//                             {tech.trim()}
//                           </span>

//                         ))}

//                     </div>

//                   )}

//                   <div className="mt-5 flex gap-4">

//                     {project.github && (

//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="text-sm font-semibold text-blue-700 hover:underline"
//                       >
//                         GitHub
//                       </a>

//                     )}

//                     {project.live && (

//                       <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="text-sm font-semibold text-blue-700 hover:underline"
//                       >
//                         Live Demo
//                       </a>

//                     )}

//                   </div>

//                 </div>

//               ))}

//             </div>

//           ) : (

//             <p className="text-slate-400">
//               No projects added.
//             </p>

//           )}

//         </section>

//       </main>

//     </div>

//   </div>

//   );
// }

// "use client";

// import type { ResumeData } from "@/types/resume";

// import {
//   Mail,
//   Phone,
//   MapPin,
//   Globe,
// } from "lucide-react";

// import {
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";

// interface Props {
//   resume: ResumeData;
// }

// export function ModernTemplate({ resume }: Props) {
//   return (
//     <div
//       className="mx-auto overflow-hidden bg-white shadow-2xl"
//       style={{
//         width: "794px",
//         minHeight: "1123px",
//       }}
//     >
//       {/* <div className="grid h-full grid-cols-[250px_1fr]"> */}
//       <div className="w-full min-h-[1123px] bg-white">

//         {/* ========================= */}
//         {/* SIDEBAR */}
//         {/* ========================= */}

//         <aside className="bg-slate-900 text-white">

//           {/* Photo */}

//           <div className="flex justify-center pt-10">

//             <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-white">

//               {resume.personal.photo ? (
//                 <img
//                   src={resume.personal.photo}
//                   alt="Profile"
//                   className="h-full w-full object-cover"
//                 />
//               ) : (
//                 <div className="flex h-full w-full items-center justify-center bg-slate-700 text-6xl font-bold">
//                   {resume.personal.fullName?.charAt(0) || "U"}
//                 </div>
//               )}

//             </div>

//           </div>

//           {/* Contact */}

//           <section className="mt-10 px-8">

//             <h3 className="mb-5 border-b border-slate-700 pb-2 text-lg font-bold uppercase tracking-wider">
//               Contact
//             </h3>

//             <div className="space-y-4 text-sm">

//               {resume.personal.email && (
//                 <div className="flex items-start gap-3">
//                   <Mail size={16} className="mt-1" />
//                   <span>{resume.personal.email}</span>
//                 </div>
//               )}

//               {resume.personal.phone && (
//                 <div className="flex items-start gap-3">
//                   <Phone size={16} className="mt-1" />
//                   <span>{resume.personal.phone}</span>
//                 </div>
//               )}

//               {resume.personal.location && (
//                 <div className="flex items-start gap-3">
//                   <MapPin size={16} className="mt-1" />
//                   <span>{resume.personal.location}</span>
//                 </div>
//               )}

//               {resume.personal.website && (
//                 <div className="flex items-start gap-3">
//                   <Globe size={16} className="mt-1" />
//                   <span>{resume.personal.website}</span>
//                 </div>
//               )}

//               {resume.personal.github && (
//                 <div className="flex items-start gap-3">
//                   <FaGithub className="mt-1" />
//                   <span>{resume.personal.github}</span>
//                 </div>
//               )}

//               {resume.personal.linkedin && (
//                 <div className="flex items-start gap-3">
//                   <FaLinkedin className="mt-1" />
//                   <span>{resume.personal.linkedin}</span>
//                 </div>
//               )}

//             </div>

//           </section>
//                     {/* ========================= */}
//           {/* SKILLS */}
//           {/* ========================= */}

//           <section className="mt-10 px-8">

//             <h3 className="mb-5 border-b border-slate-700 pb-2 text-lg font-bold uppercase tracking-wider">
//               Skills
//             </h3>

//             <div className="flex flex-wrap gap-2">

//               {resume.skills.length > 0 ? (
//                 resume.skills.map((skill, index) => (
//                   <span
//                     key={index}
//                     className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200"
//                   >
//                     {skill}
//                   </span>
//                 ))
//               ) : (
//                 <span className="text-sm text-slate-400">
//                   No skills added
//                 </span>
//               )}

//             </div>

//           </section>

//           {/* ========================= */}
//           {/* EDUCATION */}
//           {/* ========================= */}

//           <section className="mt-10 px-8 pb-10">

//             <h3 className="mb-5 border-b border-slate-700 pb-2 text-lg font-bold uppercase tracking-wider">
//               Education
//             </h3>

//             <div className="space-y-6">

//               {resume.education.length > 0 ? (

//                 resume.education.map((edu, index) => (

//                   <div key={index}>

//                     <h4 className="font-semibold text-white">
//                       {edu.degree}
//                     </h4>

//                     <p className="mt-1 text-sm text-slate-300">
//                       {edu.college}
//                     </p>

//                     <p className="mt-1 text-xs text-slate-400">
//                       {edu.year}
//                     </p>

//                   </div>

//                 ))

//               ) : (

//                 <span className="text-sm text-slate-400">
//                   No education added
//                 </span>

//               )}

//             </div>

//           </section>

//         </aside>

//         {/* ========================= */}
//         {/* MAIN CONTENT */}
//         {/* ========================= */}

//         <main className="bg-white px-10 py-10">

//           {/* HEADER */}

//           <header>

//             <h1 className="text-5xl font-black uppercase tracking-tight text-slate-900">
//               {resume.personal.fullName || "YOUR NAME"}
//             </h1>

//             <p className="mt-2 text-xl font-medium tracking-wide text-blue-700">
//               {resume.personal.jobTitle || "Professional Title"}
//             </p>

//           </header>

//           {/* SUMMARY */}

//           {resume.personal.summary && (

//             <section className="mt-10">

//               <h2 className="mb-4 border-b border-slate-300 pb-2 text-xl font-bold uppercase tracking-wide text-slate-900">
//                 Professional Summary
//               </h2>

//               <p className="text-[14px] leading-7 text-justify text-slate-700">
//                 {resume.personal.summary}
//               </p>

//             </section>

//           )}
//                     {/* ========================= */}
//           {/* EXPERIENCE */}
//           {/* ========================= */}

//           {!resume.isFresher && resume.experience.length > 0 && (

//             <section className="mt-12">

//               <h2 className="mb-6 border-b border-slate-300 pb-2 text-xl font-bold uppercase tracking-wide text-slate-900">
//                 Work Experience
//               </h2>

//               <div className="space-y-8">

//                 {resume.experience.map((exp, index) => (

//                   <div
//                     key={index}
//                     className="relative border-l-4 border-blue-700 pl-6"
//                   >

//                     {/* Timeline Dot */}

//                     <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-700"></div>

//                     <div className="flex items-start justify-between">

//                       <div>

//                         <h3 className="text-lg font-bold text-slate-900">
//                           {exp.role}
//                         </h3>

//                         <p className="mt-1 font-semibold text-blue-700">
//                           {exp.company}
//                         </p>

//                       </div>

//                       <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
//                         {exp.duration}
//                       </span>

//                     </div>

//                     {exp.description && (

//                       <p className="mt-4 text-[14px] leading-7 text-justify text-slate-700">
//                         {exp.description}
//                       </p>

//                     )}

//                   </div>

//                 ))}

//               </div>

//             </section>

//           )}

//           {/* ========================= */}
//           {/* PROJECTS */}
//           {/* ========================= */}

//           {resume.projects.length > 0 && (

//             <section className="mt-12">

//               <h2 className="mb-6 border-b border-slate-300 pb-2 text-xl font-bold uppercase tracking-wide text-slate-900">
//                 Projects
//               </h2>

//               <div className="space-y-6">

//                 {resume.projects.map((project, index) => (

//                   <div
//                     key={index}
//                     className="rounded-xl border border-slate-200 p-6 shadow-sm"
//                   >

//                     <h3 className="text-lg font-bold text-slate-900">
//                       {project.title}
//                     </h3>

//                     <p className="mt-3 text-[14px] leading-7 text-justify text-slate-700">
//                       {project.description}
//                     </p>

//                     {project.technologies && (

//                       <div className="mt-4 flex flex-wrap gap-2">

//                         {project.technologies
//                           .split(",")
//                           .map((tech, i) => (

//                             <span
//                               key={i}
//                               className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
//                             >
//                               {tech.trim()}
//                             </span>

//                           ))}

//                       </div>

//                     )}

//                     <div className="mt-5 flex gap-6 text-sm font-semibold text-blue-700">

//                       {project.github && (
//                         <a href={project.github}>
//                           GitHub
//                         </a>
//                       )}

//                       {project.live && (
//                         <a href={project.live}>
//                           Live Demo
//                         </a>
//                       )}

//                     </div>

//                   </div>

//                 ))}

//               </div>

//             </section>

//           )}
//                   </main>

//       </div>

//     </div>
//   );
// }

// export default ModernTemplate;


"use client";

import type { ResumeData } from "@/types/resume";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

interface Props {
  resume: ResumeData;
}

export function ModernTemplate({
  resume,
}: Props) {

  const {
    personal,
    education,
    experience,
    internships,
    skills,
    languages,
    projects,
    certifications,
    achievements,
    references,
    interests,
    isFresher,
  } = resume;

  return (

    <div
      className="
      w-[794px]
      min-h-[1123px]
      bg-white
      text-slate-800
      flex
      font-sans
      "
    >

      {/* ================================= */}
      {/* LEFT SIDEBAR */}
      {/* ================================= */}

      <aside
        className="
        w-[255px]
        bg-[#F3ECE4]
        p-8
        "
      >

        {/* PART 2 */}

        {/* ============================= */
/* PROFILE PHOTO */
/* ============================= */}

<div className="flex justify-center">

  {personal.photo ? (

    <img
      src={personal.photo}
      alt={personal.fullName}
      className="
        h-36
        w-36
        rounded-full
        border-4
        border-white
        object-cover
        shadow-lg
      "
    />

  ) : (

    <div
      className="
        h-36
        w-36
        rounded-full
        bg-slate-300
        border-4
        border-white
      "
    />

  )}

</div>

{/* ============================= */}
{/* CONTACT */}
{/* ============================= */}

<section className="mt-10">

  <h3 className="mb-4 text-lg font-bold uppercase tracking-wider">
    Contact
  </h3>

  <div className="space-y-3 text-sm">

    {personal.phone && (
      <div className="flex items-start gap-3">
        <Phone size={16} className="mt-1" />
        <span>{personal.phone}</span>
      </div>
    )}

    {personal.email && (
      <div className="flex items-start gap-3">
        <Mail size={16} className="mt-1" />
        <span className="break-all">
          {personal.email}
        </span>
      </div>
    )}

    {personal.location && (
      <div className="flex items-start gap-3">
        <MapPin size={16} className="mt-1" />
        <span>{personal.location}</span>
      </div>
    )}

    {personal.website && (
      <div className="flex items-start gap-3">
        <Globe size={16} className="mt-1" />
        <span className="break-all">
          {personal.website}
        </span>
      </div>
    )}

    {personal.linkedin && (
      <div className="flex items-start gap-3">
        <FaLinkedin className="mt-1" />
        <span className="break-all">
          {personal.linkedin}
        </span>
      </div>
    )}

    {personal.github && (
      <div className="flex items-start gap-3">
        <FaGithub className="mt-1" />
        <span className="break-all">
          {personal.github}
        </span>
      </div>
    )}

  </div>

</section>

{/* ============================= */}
{/* EDUCATION */}
{/* ============================= */}

{education.length > 0 && (

<section className="mt-10">

  <h3 className="mb-4 text-lg font-bold uppercase tracking-wider">
    Education
  </h3>

  <div className="space-y-5">

    {education.map((item, index) => (

      <div key={index}>

        <h4 className="font-semibold leading-tight">
          {item.degree}
        </h4>

        <p className="text-sm text-slate-600">
          {item.college}
        </p>

        <p className="text-xs text-slate-500">
          {item.year}
        </p>

        {item.cgpa && (
          <p className="text-xs text-slate-500">
            CGPA : {item.cgpa}
          </p>
        )}

      </div>

    ))}

  </div>

</section>

)}

{/* ============================= */}
{/* SKILLS */}
{/* ============================= */}

{skills.length > 0 && (

<section className="mt-10">

  <h3 className="mb-4 text-lg font-bold uppercase tracking-wider">
    Skills
  </h3>

  <div className="flex flex-wrap gap-2">

    {skills.map((skill, index) => (

      <span
        key={index}
        className="
          rounded-full
          bg-white
          px-3
          py-1
          text-xs
          shadow
        "
      >
        {skill}
      </span>

    ))}

  </div>

</section>

)}

{/* ============================= */}
{/* LANGUAGES */}
{/* ============================= */}

{languages.length > 0 && (

<section className="mt-10">

  <h3 className="mb-4 text-lg font-bold uppercase tracking-wider">
    Languages
  </h3>

  <div className="space-y-4">

    {languages.map((lang, index) => {

      const width =
        lang.level === "Native"
          ? "100%"
          : lang.level === "Advanced"
          ? "85%"
          : lang.level === "Intermediate"
          ? "65%"
          : "40%";

      return (

        <div key={index}>

          <div className="mb-1 flex justify-between text-sm">

            <span>{lang.name}</span>

            <span className="text-xs text-slate-500">
              {lang.level}
            </span>

          </div>

          <div className="h-2 rounded-full bg-slate-300">

            <div
              className="h-2 rounded-full bg-slate-700"
              style={{ width }}
            />

          </div>

        </div>

      );

    })}

  </div>

</section>

)}

{/* ============================= */}
{/* INTERESTS */}
{/* ============================= */}

{interests.length > 0 && (

<section className="mt-10">

  <h3 className="mb-4 text-lg font-bold uppercase tracking-wider">
    Interests
  </h3>

  <div className="flex flex-wrap gap-2">

    {interests.map((interest, index) => (

      <span
        key={index}
        className="
          rounded-full
          border
          border-slate-400
          px-3
          py-1
          text-xs
        "
      >
        {interest}
      </span>

    ))}

  </div>

</section>

)}

      </aside>

      {/* ================================= */}
      {/* RIGHT CONTENT */}
      {/* ================================= */}

      <main
        className="
        flex-1
        p-10
        "
      >

        {/* PART 3 */}

        {/* ============================= */}
{/* NAME */}
{/* ============================= */}

<header>

  <h1
    className="
      text-[42px]
      font-bold
      tracking-wide
      leading-none
      uppercase
      text-slate-800
    "
  >
    {personal.fullName || "YOUR NAME"}
  </h1>

  <p
    className="
      mt-2
      text-xl
      font-medium
      text-slate-500
    "
  >
    {personal.jobTitle || "Professional Title"}
  </p>

</header>

{/* ============================= */}
{/* ABOUT */}
{/* ============================= */}

{personal.summary && (

<section className="mt-10">

  <h2 className="mb-3 border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wider">
    About Me
  </h2>

  {/* <p
    className="
      text-[13px]
      leading-6
      text-slate-600
      text-justify
    "
  >
    {personal.summary}
  </p> */}
{/* 
  <p
  className="
    text-[13px]
    leading-7
    text-slate-700
    text-justify
    whitespace-pre-wrap
    break-words
  "
>
  {personal.summary}
</p> */}

<p
  className="
    text-[13px]
    leading-7
    text-slate-700
    whitespace-normal
    break-words
    text-left
  "
>
  {personal.summary}
</p>

</section>

)}

{/* ============================= */}
{/* EXPERIENCE */}
{/* ============================= */}

{!isFresher && experience.length > 0 && (

<section className="mt-10">

  <h2 className="mb-4 border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wider">
    Experience
  </h2>

  <div className="space-y-7">

    {experience.map((item, index) => (

      <div key={index}>

        <div className="flex items-center justify-between">

          <h3 className="text-base font-semibold">
            {item.role}
          </h3>

          <span className="text-sm text-slate-500">
            {item.duration}
          </span>

        </div>

        <p className="text-sm font-medium text-slate-600">
          {item.company}
        </p>

        <p className="mt-2 text-[13px] leading-6 text-slate-600 text-justify">
          {item.description}
        </p>

      </div>

    ))}

  </div>

</section>

)}

{/* ============================= */}
{/* INTERNSHIP */}
{/* ============================= */}

{internships.length > 0 && (

<section className="mt-10">

  <h2 className="mb-4 border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wider">
    Internship
  </h2>

  <div className="space-y-7">

    {internships.map((item, index) => (

      <div key={index}>

        <div className="flex items-center justify-between">

          <h3 className="text-base font-semibold">
            {item.role}
          </h3>

          <span className="text-sm text-slate-500">
            {item.duration}
          </span>

        </div>

        <p className="text-sm font-medium text-slate-600">
          {item.company}
        </p>

        <p className="mt-2 text-[13px] leading-6 text-slate-600 text-justify">
          {item.description}
        </p>

      </div>

    ))}

  </div>

</section>

)}

{/* ============================= */}
{/* PROJECTS */}
{/* ============================= */}

{projects.length > 0 && (

<section className="mt-10">

  <h2 className="mb-4 border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wider">
    Projects
  </h2>

  <div className="space-y-7">

    {projects.map((project, index) => (

      <div key={index}>

        <h3 className="text-base font-semibold">
          {project.title}
        </h3>

        <p className="mt-2 text-[13px] leading-6 text-slate-600 text-justify">
          {project.description}
        </p>

        {project.technologies && (
          <p className="mt-2 text-sm font-medium text-slate-700">
            Tech :
            <span className="font-normal text-slate-600">
              {" "}
              {project.technologies}
            </span>
          </p>
        )}

        <div className="mt-2 flex flex-wrap gap-4 text-sm">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="font-medium text-blue-700"
            >
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="font-medium text-green-700"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>

    ))}

  </div>

</section>

)}

{/* ============================= */}
{/* CERTIFICATIONS */}
{/* ============================= */}

{certifications.length > 0 && (

<section className="mt-10">

  <h2 className="mb-4 border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wider">
    Certifications
  </h2>

  <div className="space-y-5">

    {certifications.map((item, index) => (

      <div
        key={index}
        className="flex justify-between"
      >

        <div>

          <h3 className="font-semibold">
            {item.title}
          </h3>

          <p className="text-sm text-slate-600">
            {item.issuer}
          </p>

        </div>

        <span className="text-sm text-slate-500">
          {item.year}
        </span>

      </div>

    ))}

  </div>

</section>

)}

{/* ============================= */}
{/* ACHIEVEMENTS */}
{/* ============================= */}

{achievements.length > 0 && (

<section className="mt-10">

  <h2 className="mb-4 border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wider">
    Achievements
  </h2>

  <div className="space-y-5">

    {achievements.map((item, index) => (

      <div key={index}>

        <h3 className="font-semibold">
          {item.title}
        </h3>

        <p className="mt-1 text-[13px] leading-6 text-slate-600">
          {item.description}
        </p>

      </div>

    ))}

  </div>

</section>

)}

{/* ============================= */}
{/* REFERENCES */}
{/* ============================= */}

{references.length > 0 && (

<section className="mt-10">

  <h2 className="mb-4 border-b border-slate-300 pb-2 text-lg font-bold uppercase tracking-wider">
    References
  </h2>

  <div className="grid grid-cols-2 gap-6">

    {references.map((item, index) => (

      <div key={index}>

        <h3 className="font-semibold">
          {item.name}
        </h3>

        <p className="text-sm text-slate-600">
          {item.designation}
        </p>

        <p className="text-sm text-slate-600">
          {item.company}
        </p>

        {item.phone && (
          <p className="text-xs text-slate-500">
            {item.phone}
          </p>
        )}

        {item.email && (
          <p className="text-xs text-slate-500 break-all">
            {item.email}
          </p>
        )}

      </div>

    ))}

  </div>

</section>

)}

      </main>

    </div>

  );
}

export default ModernTemplate;