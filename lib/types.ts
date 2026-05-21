export type SkillCategory =
  | "Languages"
  | "AI/ML"
  | "Libraries"
  | "Databases"
  | "Tools";

export interface PersonalInfo {
  name: string;
  displayName: string;
  initials: string;
  role: string;
  roleCycle: string[];
  bio: string;
  shortBio: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  profileImage: string;
  availableForWork: boolean;
  stats: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  proficiency?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
  period?: string;
  highlights?: string[];
}

export type ExperienceType =
  | "Internship"
  | "Extracurricular"
  | "Leadership"
  | "Publication";

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  duration: string;
  type: ExperienceType;
  points: string[];
  primary?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  duration: string;
  grade: string;
  status?: string;
  coursework?: string[];
}

export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: string;
  link: string;
  certificateUrl?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  availableFor: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export type CertificationCategory =
  | "Cloud"
  | "Development"
  | "Project Management"
  | "Foundation"
  | "Event";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  category: CertificationCategory;
  credentialUrl: string;
  fileType: "pdf" | "image";
}
