
export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string[];
  skills: string[];
  link?: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  stack: string[];
  link?: string;
}

export interface ResearchItem {
    topic: string;
    period: string;
    supervisor: string;
    description: string[];
    publications?: {
        title: string;
        link: string;
    }[];
}

export interface EducationItem {
    degree: string;
    school: string;
    period: string;
    courses: string;
    language?: string;
    link?: string;
}
