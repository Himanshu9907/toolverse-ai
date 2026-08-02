// "use client";

// import type { ResumeData } from "@/types/resume";

// interface Props {
//   resume: ResumeData;
// }

// export function MinimalTemplate({ resume }: Props) {
//   return (
//     <div className="bg-white p-12">
//       <h1 className="text-3xl font-semibold">
//         {resume.personal.fullName}
//       </h1>
//     </div>
//   );
// }

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

export function MinimalTemplate({
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
      text-slate-900
      px-14
      py-12
      font-sans
      "
    >

      {/* =============================== */}
      {/* HEADER */}
      {/* =============================== */}

      <header>

        <h1
          className="
          text-[40px]
          font-bold
          tracking-wide
          uppercase
          "
        >
          {personal.fullName || "YOUR NAME"}
        </h1>

        <p
          className="
          mt-2
          text-xl
          text-slate-500
          "
        >
          {personal.jobTitle || "Professional Title"}
        </p>

        {/* CONTACT */}

        <div
          className="
          mt-6
          flex
          flex-wrap
          gap-x-8
          gap-y-3
          text-sm
          text-slate-600
          "
        >

          {personal.phone && (
            <div className="flex items-center gap-2">
              <Phone size={15} />
              {personal.phone}
            </div>
          )}

          {personal.email && (
            <div className="flex items-center gap-2">
              <Mail size={15} />
              {personal.email}
            </div>
          )}

          {personal.location && (
            <div className="flex items-center gap-2">
              <MapPin size={15} />
              {personal.location}
            </div>
          )}

          {personal.website && (
            <div className="flex items-center gap-2">
              <Globe size={15} />
              {personal.website}
            </div>
          )}

          {personal.linkedin && (
            <div className="flex items-center gap-2">
              <FaLinkedin />
              {personal.linkedin}
            </div>
          )}

          {personal.github && (
            <div className="flex items-center gap-2">
              <FaGithub />
              {personal.github}
            </div>
          )}

        </div>

      </header>

      {/* Divider */}

      <div className="my-8 h-px bg-slate-300" />

      {/* =============================== */}
      {/* ABOUT */}
      {/* =============================== */}

      {personal.summary && (

        <section>

          <h2
            className="
            text-lg
            font-semibold
            uppercase
            tracking-widest
            "
          >
            About
          </h2>

          <p
            className="
            mt-4
            text-[14px]
            leading-7
            text-slate-600
            text-justify
            "
          >
            {personal.summary}
          </p>

        </section>

      )}

      {/* Divider */}

      <div className="my-8 h-px bg-slate-300" />

      {/* ===== PART 2 STARTS HERE ===== */}
            {/* ================================= */}
      {/* EXPERIENCE */}
      {/* ================================= */}

      {!isFresher && experience.length > 0 && (

        <section>

          <h2
            className="
            text-lg
            font-semibold
            uppercase
            tracking-widest
            "
          >
            Experience
          </h2>

          <div className="mt-6 space-y-8">

            {experience.map((item, index) => (

              <div key={index}>

                <div className="flex justify-between">

                  <div>

                    <h3 className="font-semibold text-base">
                      {item.role}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {item.company}
                    </p>

                  </div>

                  <span className="text-sm text-slate-500">
                    {item.duration}
                  </span>

                </div>

                <p
                  className="
                  mt-3
                  text-[14px]
                  leading-7
                  text-slate-600
                  text-justify
                  "
                >
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </section>

      )}

      {(!isFresher && experience.length > 0) && (
        <div className="my-8 h-px bg-slate-300" />
      )}

      {/* ================================= */}
      {/* INTERNSHIP */}
      {/* ================================= */}

      {internships.length > 0 && (

        <section>

          <h2
            className="
            text-lg
            font-semibold
            uppercase
            tracking-widest
            "
          >
            Internship
          </h2>

          <div className="mt-6 space-y-8">

            {internships.map((item, index) => (

              <div key={index}>

                <div className="flex justify-between">

                  <div>

                    <h3 className="font-semibold text-base">
                      {item.role}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {item.company}
                    </p>

                  </div>

                  <span className="text-sm text-slate-500">
                    {item.duration}
                  </span>

                </div>

                <p
                  className="
                  mt-3
                  text-[14px]
                  leading-7
                  text-slate-600
                  text-justify
                  "
                >
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </section>

      )}

      {internships.length > 0 && (
        <div className="my-8 h-px bg-slate-300" />
      )}

      {/* ================================= */}
      {/* PROJECTS */}
      {/* ================================= */}

      {projects.length > 0 && (

        <section>

          <h2
            className="
            text-lg
            font-semibold
            uppercase
            tracking-widest
            "
          >
            Projects
          </h2>

          <div className="mt-6 space-y-8">

            {projects.map((project, index) => (

              <div key={index}>

                <h3 className="font-semibold text-base">
                  {project.title}
                </h3>

                <p
                  className="
                  mt-3
                  text-[14px]
                  leading-7
                  text-slate-600
                  text-justify
                  "
                >
                  {project.description}
                </p>

                {project.technologies && (

                  <p className="mt-3 text-sm">

                    <span className="font-semibold">
                      Tech Stack:
                    </span>{" "}

                    <span className="text-slate-600">
                      {project.technologies}
                    </span>

                  </p>

                )}

                <div className="mt-3 flex gap-6 flex-wrap">

                  {project.github && (

                    <a
                      href={project.github}
                      target="_blank"
                      className="text-sm font-medium text-slate-800 underline"
                    >
                      GitHub
                    </a>

                  )}

                  {project.live && (

                    <a
                      href={project.live}
                      target="_blank"
                      className="text-sm font-medium text-slate-800 underline"
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

      <div className="my-8 h-px bg-slate-300" />

      {/* ===== PART 3 STARTS HERE ===== */}
            {/* ================================= */}
      {/* TWO COLUMN SECTION */}
      {/* ================================= */}

      <div className="grid grid-cols-2 gap-10">

        {/* LEFT */}

        <div>

          {/* EDUCATION */}

          {education.length > 0 && (

            <section>

              <h2 className="text-lg font-semibold uppercase tracking-widest">
                Education
              </h2>

              <div className="mt-5 space-y-5">

                {education.map((item, index) => (

                  <div key={index}>

                    <h3 className="font-semibold">
                      {item.degree}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {item.college}
                    </p>

                    <div className="flex justify-between text-xs text-slate-400 mt-1">

                      <span>{item.year}</span>

                      {item.cgpa && (
                        <span>CGPA : {item.cgpa}</span>
                      )}

                    </div>

                  </div>

                ))}

              </div>

            </section>

          )}

          {/* Divider */}

          <div className="my-8 h-px bg-slate-300" />

          {/* SKILLS */}

          {skills.length > 0 && (

            <section>

              <h2 className="text-lg font-semibold uppercase tracking-widest">
                Skills
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">

                {skills.map((skill, index) => (

                  <span
                    key={index}
                    className="
                    rounded-full
                    border
                    border-slate-300
                    px-3
                    py-1
                    text-xs
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </section>

          )}

          {/* Divider */}

          <div className="my-8 h-px bg-slate-300" />

          {/* LANGUAGES */}

          {languages.length > 0 && (

            <section>

              <h2 className="text-lg font-semibold uppercase tracking-widest">
                Languages
              </h2>

              <div className="mt-5 space-y-4">

                {languages.map((lang, index) => (

                  <div key={index}>

                    <div className="flex justify-between text-sm">

                      <span>{lang.name}</span>

                      <span className="text-slate-500">
                        {lang.level}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </section>

          )}

        </div>

        {/* RIGHT */}

        <div>

          {/* CERTIFICATIONS */}

          {certifications.length > 0 && (

            <section>

              <h2 className="text-lg font-semibold uppercase tracking-widest">
                Certifications
              </h2>

              <div className="mt-5 space-y-5">

                {certifications.map((item, index) => (

                  <div key={index}>

                    <div className="flex justify-between">

                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <span className="text-xs text-slate-500">
                        {item.year}
                      </span>

                    </div>

                    <p className="text-sm text-slate-500">
                      {item.issuer}
                    </p>

                  </div>

                ))}

              </div>

            </section>

          )}

          <div className="my-8 h-px bg-slate-300" />

          {/* ACHIEVEMENTS */}

          {achievements.length > 0 && (

            <section>

              <h2 className="text-lg font-semibold uppercase tracking-widest">
                Achievements
              </h2>

              <div className="mt-5 space-y-5">

                {achievements.map((item, index) => (

                  <div key={index}>

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>

                  </div>

                ))}

              </div>

            </section>

          )}

          <div className="my-8 h-px bg-slate-300" />

          {/* INTERESTS */}

          {interests.length > 0 && (

            <section>

              <h2 className="text-lg font-semibold uppercase tracking-widest">
                Interests
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">

                {interests.map((interest, index) => (

                  <span
                    key={index}
                    className="
                    rounded-full
                    border
                    border-slate-300
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

        </div>

      </div>

      {/* REFERENCES */}

      {references.length > 0 && (

        <>

          <div className="my-8 h-px bg-slate-300" />

          <section>

            <h2 className="text-lg font-semibold uppercase tracking-widest">
              References
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-6">

              {references.map((item, index) => (

                <div key={index}>

                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.designation}
                  </p>

                  <p className="text-sm text-slate-500">
                    {item.company}
                  </p>

                  {item.phone && (
                    <p className="text-xs mt-1">
                      {item.phone}
                    </p>
                  )}

                  {item.email && (
                    <p className="text-xs break-all">
                      {item.email}
                    </p>
                  )}

                </div>

              ))}

            </div>

          </section>

        </>

      )}

    </div>

  );

}

export default MinimalTemplate;