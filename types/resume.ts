

// export type ResumeTemplate =
//   | "modern"
//   | "professional"
//   | "minimal";

// export interface PersonalInfo {
//   fullName: string;
//   jobTitle: string;
//   email: string;
//   phone: string;
//   location: string;
//   linkedin: string;
//   github: string;
//   website: string;
//   summary: string;
//   photo?: string;
// }

// export interface Education {
//   degree: string;
//   college: string;
//   year: string;
// }

// export interface Experience {
//   company: string;
//   role: string;
//   duration: string;
//   description: string;
// }

// export interface Project {
//   title: string;
//   description: string;
//   technologies: string;
//   github: string;
//   live: string;
// }

// export interface ResumeData {
//   template: "modern" | "professional" | "minimal";

//    isFresher: boolean;

//   personal: PersonalInfo;

//   education: Education[];

//   experience: Experience[];

//   skills: string[];

//   projects: Project[];
// }

export type ResumeTemplate =
  | "modern"
  | "professional"
  | "minimal";

export type CareerStatus =
  | "fresher"
  | "experienced";

// ============================
// Personal Information
// ============================

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;

  email: string;
  phone: string;
  location: string;

  linkedin: string;
  github: string;
  website: string;

  summary: string;

  photo?: string;
}

// ============================
// Education
// ============================

export interface Education {
  degree: string;
  college: string;
  year: string;

  cgpa?: string;
}

// ============================
// Experience
// ============================

export interface Experience {
  company: string;
  role: string;

  duration: string;

  description: string;
}

// ============================
// Internship
// ============================

export interface Internship {
  company: string;

  role: string;

  duration: string;

  description: string;
}

// ============================
// Project
// ============================

export interface Project {
  title: string;

  description: string;

  technologies: string;

  github: string;

  live: string;
}

// ============================
// Certificate
// ============================

export interface Certification {
  title: string;

  issuer: string;

  year: string;
}

// ============================
// Achievement
// ============================

export interface Achievement {
  title: string;

  description: string;
}

// ============================
// Reference
// ============================

export interface Reference {
  name: string;

  designation: string;

  company: string;

  phone: string;

  email: string;
}

// ============================
// Language
// ============================

export interface Language {
  name: string;

  level:
    | "Beginner"
    | "Intermediate"
    | "Advanced"
    | "Native";
}

// ============================
// Resume
// ============================

export interface ResumeData {
  template: ResumeTemplate;

  careerStatus: CareerStatus;

  isFresher: boolean;

  personal: PersonalInfo;

  education: Education[];

  experience: Experience[];

  internships: Internship[];

  skills: string[];

  languages: Language[];

  certifications: Certification[];

  achievements: Achievement[];

  references: Reference[];

  interests: string[];

  projects: Project[];
}