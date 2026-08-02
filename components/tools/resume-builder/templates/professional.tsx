// "use client";

// import type { ResumeData } from "@/types/resume";

// interface Props {
//   resume: ResumeData;
// }

// export function ProfessionalTemplate({ resume }: Props) {
//   return (
//     <div className="bg-white p-10">
//       <h1 className="text-4xl font-bold">
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

export function ProfessionalTemplate({
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
      p-12
      font-sans
      "
    >

      {/* =============================== */}
      {/* HEADER */}
      {/* =============================== */}

      <header
        className="
        border-b-2
        border-slate-700
        pb-6
        "
      >

        <div className="flex items-start justify-between">

          <div>

            <h1
              className="
              text-[36px]
              font-bold
              uppercase
              tracking-[2px]
              text-slate-900
              "
            >
              {personal.fullName || "YOUR NAME"}
            </h1>

            <p
              className="
              mt-2
              text-xl
              font-medium
              text-slate-600
              "
            >
              {personal.jobTitle || "Professional Title"}
            </p>

          </div>

          {personal.photo && (

            <img
              src={personal.photo}
              alt={personal.fullName}
              className="
              h-28
              w-28
              rounded-full
              border-4
              border-slate-300
              object-cover
              "
            />

          )}

        </div>

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

      {/* =============================== */}
      {/* PROFESSIONAL SUMMARY */}
      {/* =============================== */}

      {personal.summary && (

        <section className="mt-8">

          <h2
            className="
            mb-3
            text-lg
            font-bold
            uppercase
            tracking-wider
            text-slate-800
            "
          >
            Professional Summary
          </h2>

          <p
            className="
            text-[14px]
            leading-7
            text-justify
            text-slate-600
            "
          >
            {personal.summary}
          </p>

        </section>

      )}

      {/* ===== Part 2 Starts Here ===== */}
            {/* ================================= */}
      {/* EXPERIENCE */}
      {/* ================================= */}

      {!isFresher && experience.length > 0 && (

        <section className="mt-10">

          <h2
            className="
            mb-4
            border-b
            border-slate-300
            pb-2
            text-lg
            font-bold
            uppercase
            tracking-wider
            "
          >
            Professional Experience
          </h2>

          <div className="space-y-8">

            {experience.map((item, index) => (

              <div key={index}>

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-base font-semibold">
                      {item.role}
                    </h3>

                    <p className="text-sm text-slate-600">
                      {item.company}
                    </p>

                  </div>

                  <span className="text-sm text-slate-500 whitespace-nowrap">
                    {item.duration}
                  </span>

                </div>

                <p
                  className="
                  mt-3
                  text-[13px]
                  leading-6
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

      {/* ================================= */}
      {/* INTERNSHIP */}
      {/* ================================= */}

      {internships.length > 0 && (

        <section className="mt-10">

          <h2
            className="
            mb-4
            border-b
            border-slate-300
            pb-2
            text-lg
            font-bold
            uppercase
            tracking-wider
            "
          >
            Internship
          </h2>

          <div className="space-y-8">

            {internships.map((item, index) => (

              <div key={index}>

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-base font-semibold">
                      {item.role}
                    </h3>

                    <p className="text-sm text-slate-600">
                      {item.company}
                    </p>

                  </div>

                  <span className="text-sm text-slate-500 whitespace-nowrap">
                    {item.duration}
                  </span>

                </div>

                <p
                  className="
                  mt-3
                  text-[13px]
                  leading-6
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

      {/* ================================= */}
      {/* PROJECTS */}
      {/* ================================= */}

      {projects.length > 0 && (

        <section className="mt-10">

          <h2
            className="
            mb-4
            border-b
            border-slate-300
            pb-2
            text-lg
            font-bold
            uppercase
            tracking-wider
            "
          >
            Projects
          </h2>

          <div className="space-y-8">

            {projects.map((project, index) => (

              <div key={index}>

                <h3 className="text-base font-semibold">
                  {project.title}
                </h3>

                <p
                  className="
                  mt-2
                  text-[13px]
                  leading-6
                  text-slate-600
                  text-justify
                  "
                >
                  {project.description}
                </p>

                {project.technologies && (

                  <p className="mt-2 text-sm">

                    <span className="font-semibold">
                      Technologies:
                    </span>{" "}

                    <span className="text-slate-600">
                      {project.technologies}
                    </span>

                  </p>

                )}

                <div className="mt-3 flex flex-wrap gap-5">

                  {project.github && (

                    <a
                      href={project.github}
                      target="_blank"
                      className="text-sm font-medium text-blue-700"
                    >
                      GitHub
                    </a>

                  )}

                  {project.live && (

                    <a
                      href={project.live}
                      target="_blank"
                      className="text-sm font-medium text-green-700"
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

      {/* ===== Part 3 Starts Here ===== */}
            {/* ================================= */}
      {/* TWO COLUMN SECTION */}
      {/* ================================= */}

      <div className="mt-10 grid grid-cols-2 gap-10">

        {/* ============================= */}
        {/* EDUCATION */}
        {/* ============================= */}

        <div>

          {education.length > 0 && (

            <section>

              <h2
                className="
                mb-4
                border-b
                border-slate-300
                pb-2
                text-lg
                font-bold
                uppercase
                tracking-wider
                "
              >
                Education
              </h2>

              <div className="space-y-6">

                {education.map((item, index) => (

                  <div key={index}>

                    <h3 className="font-semibold">
                      {item.degree}
                    </h3>

                    <p className="text-sm text-slate-600">
                      {item.college}
                    </p>

                    <div className="flex justify-between mt-1">

                      <span className="text-xs text-slate-500">
                        {item.year}
                      </span>

                      {item.cgpa && (

                        <span className="text-xs text-slate-500">
                          CGPA : {item.cgpa}
                        </span>

                      )}

                    </div>

                  </div>

                ))}

              </div>

            </section>

          )}

        </div>

        {/* ============================= */}
        {/* SKILLS */}
        {/* ============================= */}

        <div>

          {skills.length > 0 && (

            <section>

              <h2
                className="
                mb-4
                border-b
                border-slate-300
                pb-2
                text-lg
                font-bold
                uppercase
                tracking-wider
                "
              >
                Skills
              </h2>

              <div className="flex flex-wrap gap-2">

                {skills.map((skill, index) => (

                  <span
                    key={index}
                    className="
                    rounded
                    bg-slate-100
                    px-3
                    py-1
                    text-xs
                    font-medium
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

              <h2
                className="
                mb-4
                border-b
                border-slate-300
                pb-2
                text-lg
                font-bold
                uppercase
                tracking-wider
                "
              >
                Languages
              </h2>

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

                      <div className="flex justify-between text-sm mb-1">

                        <span>{lang.name}</span>

                        <span className="text-slate-500">
                          {lang.level}
                        </span>

                      </div>

                      <div className="h-2 rounded-full bg-slate-200">

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
          {/* CERTIFICATIONS */}
          {/* ============================= */}

          {certifications.length > 0 && (

            <section className="mt-10">

              <h2
                className="
                mb-4
                border-b
                border-slate-300
                pb-2
                text-lg
                font-bold
                uppercase
                tracking-wider
                "
              >
                Certifications
              </h2>

              <div className="space-y-5">

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

                    <p className="text-sm text-slate-600">
                      {item.issuer}
                    </p>

                  </div>

                ))}

              </div>

            </section>

          )}

        </div>

      </div>

      {/* ===== Part 4 Starts Here ===== */}
            {/* ================================= */}
      {/* BOTTOM SECTION */}
      {/* ================================= */}

      <div className="mt-10 grid grid-cols-2 gap-10">

        {/* ============================= */}
        {/* ACHIEVEMENTS */}
        {/* ============================= */}

        <div>

          {achievements.length > 0 && (

            <section>

              <h2
                className="
                mb-4
                border-b
                border-slate-300
                pb-2
                text-lg
                font-bold
                uppercase
                tracking-wider
                "
              >
                Achievements
              </h2>

              <div className="space-y-5">

                {achievements.map((item, index) => (

                  <div key={index}>

                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p
                      className="
                      mt-1
                      text-[13px]
                      leading-6
                      text-slate-600
                      "
                    >
                      {item.description}
                    </p>

                  </div>

                ))}

              </div>

            </section>

          )}

        </div>

        {/* ============================= */}
        {/* INTERESTS */}
        {/* ============================= */}

        <div>

          {interests.length > 0 && (

            <section>

              <h2
                className="
                mb-4
                border-b
                border-slate-300
                pb-2
                text-lg
                font-bold
                uppercase
                tracking-wider
                "
              >
                Interests
              </h2>

              <div className="flex flex-wrap gap-2">

                {interests.map((interest, index) => (

                  <span
                    key={index}
                    className="
                    rounded
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

      {/* ============================= */}
      {/* REFERENCES */}
      {/* ============================= */}

      {references.length > 0 && (

        <section className="mt-10">

          <h2
            className="
            mb-4
            border-b
            border-slate-300
            pb-2
            text-lg
            font-bold
            uppercase
            tracking-wider
            "
          >
            References
          </h2>

          <div className="grid grid-cols-2 gap-8">

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

                  <p className="text-xs text-slate-500 mt-1">
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

    </div>

  );

}

export default ProfessionalTemplate;