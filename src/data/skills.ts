
import { Code, Database, Layout, Terminal, Cpu, Wrench } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["Typescript", "Python", "JavaScript", "HTML/CSS", "SQL"],
  },
  {
    name: "Frameworks and Libraries",
    icon: Layout,
    skills: ["React","Node.js","React Native", "Payload CMS", "Next.js", "Redux", "Framer Motion", "Tailwind CSS"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    name: "DevOps Tools & Technologies",
    icon: Cpu,
    skills: ["AWS", "Github Actions", "Docker", "Docker Compose","Vercel","Netlify"],
  },
  {
    name: " Collaboration and Project Management Tools",
    icon: Wrench,
    skills: [" Git & GitHub", "CICD and Deployment", "Slack", "Trello", "FastLane"],
  },
];
