// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const personal = body.personal;

//     const education = body.education ?? [];

//     const experience = body.experience ?? [];

//     const skills = body.skills ?? [];

//     const projects = body.projects ?? [];

//     const prompt = `
// Write a professional ATS-friendly resume summary.

// Candidate Information:

// Name:
// ${personal.fullName}

// Education:
// ${education
//   .map(
//     (e: any) =>
//       `${e.degree} from ${e.college} (${e.year})`
//   )
//   .join("\n")}

// Experience:
// ${experience
//   .map(
//     (e: any) =>
//       `${e.role} at ${e.company}
// Duration: ${e.duration}
// Description: ${e.description}`
//   )
//   .join("\n\n")}

// Skills:
// ${skills.join(", ")}

// Projects:
// ${projects
//   .map(
//     (p: any) =>
//       `${p.title}
// ${p.description}
// Tech: ${p.technologies}`
//   )
//   .join("\n\n")}

// Rules:

// - 80-120 words
// - ATS Friendly
// - Professional
// - Strong impact
// - Do not use bullet points
// - Return only the summary.
// `;

//     const response = await fetch(
//       "https://openrouter.ai/api/v1/chat/completions",
//       {
//         method: "POST",

//         headers: {
//   Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//   "Content-Type": "application/json",
// },

//         body: JSON.stringify({
//           model: "llama-3.3-70b-versatile",

//           messages: [
//             {
//               role: "system",
//               content:
//                 "You are an expert professional resume writer.",
//             },
//             {
//               role: "user",
//               content: prompt,
//             },
//           ],

//           temperature: 0.7,
//         }),
//       }
//     );

//     if (!response.ok) {
//       const error = await response.text();

//       return NextResponse.json(
//         {
//           error,
//         },
//         {
//           status: 500,
//         }
//       );
//     }

//     const data = await response.json();

//     const summary =
//       data.choices?.[0]?.message?.content ?? "";

//     return NextResponse.json({
//       success: true,
//       summary,
//     });
//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         error: "AI Summary generation failed.",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();

//     const personal = body.personal;

//     const education = body.education ?? [];
//     const experience = body.experience ?? [];
//     const skills = body.skills ?? [];
//     const projects = body.projects ?? [];

//     const prompt = `
// Write a professional ATS-friendly resume summary.

// Candidate Information:

// Name:
// ${personal.fullName}

// Education:
// ${education
//   .map(
//     (e: any) =>
//       `${e.degree} from ${e.college} (${e.year})`
//   )
//   .join("\n")}

// Experience:
// ${experience
//   .map(
//     (e: any) =>
//       `${e.role} at ${e.company}
// Duration: ${e.duration}
// Description: ${e.description}`
//   )
//   .join("\n\n")}

// Skills:
// ${skills.join(", ")}

// Projects:
// ${projects
//   .map(
//     (p: any) =>
//       `${p.title}
// ${p.description}
// Tech: ${p.technologies}`
//   )
//   .join("\n\n")}

// Rules:

// - Write 80-120 words.
// - ATS Friendly.
// - Professional tone.
// - Strong impact.
// - No bullet points.
// - Return ONLY the summary.
// `;

//     const response = await fetch(
//       "https://openrouter.ai/api/v1/chat/completions",
//       {
//         method: "POST",

//         headers: {
//           Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({
//           model: "meta-llama/llama-3.3-70b-instruct",

//           messages: [
//             {
//               role: "system",
//               content:
//                 "You are an expert professional resume writer.",
//             },
//             {
//               role: "user",
//               content: prompt,
//             },
//           ],

//           temperature: 0.7,
//         }),
//       }
//     );

//     if (!response.ok) {
//       const error = await response.text();

//       console.error(error);

//       return NextResponse.json(
//         { error },
//         { status: 500 }
//       );
//     }

//     const data = await response.json();

//     const summary =
//       data?.choices?.[0]?.message?.content ?? "";

//     return NextResponse.json({
//       success: true,
//       summary,
//     });

//   } catch (error) {
//     console.error(error);

//     return NextResponse.json(
//       {
//         success: false,
//         error: "AI Summary generation failed.",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const personal = body.personal;

    const education = body.education ?? [];
    const experience = body.experience ?? [];
    const internships = body.internships ?? [];
    const skills = body.skills ?? [];
    const projects = body.projects ?? [];
    const certifications = body.certifications ?? [];
    const achievements = body.achievements ?? [];
    const isFresher = body.isFresher ?? false;

    const prompt = `
You are an expert ATS Resume Writer.

Write a powerful professional resume summary.

Candidate Information

Name:
${personal.fullName}

Target Role:
${personal.jobTitle}

Fresher:
${isFresher ? "Yes" : "No"}

Education:
${education
  .map(
    (e: any) =>
      `${e.degree} from ${e.college} (${e.year})`
  )
  .join("\n")}

Experience:
${experience
  .map(
    (e: any) => `
Role: ${e.role}
Company: ${e.company}
Duration: ${e.duration}
Description: ${e.description}`
  )
  .join("\n\n")}

Internships:
${internships
  .map(
    (i: any) => `
Role: ${i.role}
Company: ${i.company}
Duration: ${i.duration}
Description: ${i.description}`
  )
  .join("\n\n")}

Skills:
${skills.join(", ")}

Projects:
${projects
  .map(
    (p: any) => `
${p.title}
${p.description}
Tech: ${p.technologies}`
  )
  .join("\n\n")}

Certifications:
${certifications
  .map((c: any) => `${c.title} (${c.issuer})`)
  .join(", ")}

Achievements:
${achievements
  .map((a: any) => a.title)
  .join(", ")}

Rules:

- Write between 80 and 100 words.
- ATS Optimized.
- Professional tone.
- Human sounding.
- No bullet points.
- No headings.
- No quotation marks.
- Don't repeat the same words.
- Mention strongest technical skills.
- Mention projects.
- Mention internship if available.
- Mention professional experience if available.
- If fresher, focus on education, projects and skills.
- Never create fake experience.
- Return ONLY the summary.
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",

        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          model: "meta-llama/llama-3.3-70b-instruct",

          messages: [
            {
              role: "system",
              content:
                "You are one of the world's best ATS resume writers. Write concise, professional and highly impactful resume summaries that increase interview chances.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],

          temperature: 0.5,
          max_tokens: 200,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();

      console.error(error);

      return NextResponse.json(
        { error },
        { status: 500 }
      );
    }

    const data = await response.json();

    const summary =
      data?.choices?.[0]?.message?.content?.trim() ?? "";

    return NextResponse.json({
      success: true,
      summary,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "AI Summary generation failed.",
      },
      {
        status: 500,
      }
    );
  }
}