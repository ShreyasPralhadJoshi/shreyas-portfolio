import {
  BarChart3,
  Bot,
  Brain,
  Code2,
  Database,
  FileText,
  GitBranch,
  Layers,
  LineChart,
  MessageSquare,
  Network,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  SiCss,
  SiDjango,
  SiFigma,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiPython,
  SiReact,
  SiStreamlit,
  SiVscodium,
} from "react-icons/si";
import type { IconType } from "react-icons";

const siIconMap: Record<string, IconType> = {
  python: SiPython,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss,
  react: SiReact,
  django: SiDjango,
  flask: SiFlask,
  streamlit: SiStreamlit,
  mysql: SiMysql,
  mongodb: SiMongodb,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  vscode: SiVscodium,
  figma: SiFigma,
};

const lucideIconMap: Record<string, LucideIcon> = {
  sql: Database,
  brain: Brain,
  nlp: MessageSquare,
  rag: Layers,
  langchain: GitBranch,
  chart: BarChart3,
  analytics: LineChart,
  pandas: Database,
  numpy: Code2,
  sklearn: Bot,
  matplotlib: LineChart,
  seaborn: BarChart3,
  chromadb: Database,
  colab: Sparkles,
  default: Code2,
};

export function getSkillIcon(iconName: string): IconType | LucideIcon {
  return siIconMap[iconName] ?? lucideIconMap[iconName] ?? lucideIconMap.default;
}

export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getTagColor(tag: string): string {
  const colors: Record<string, string> = {
    Python: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
    "GPT-4o": "border-violet-500/40 bg-violet-500/10 text-violet-300",
    LangChain: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300",
    ChromaDB: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
    Streamlit: "border-rose-500/40 bg-rose-500/10 text-rose-300",
    RAG: "border-accent/40 bg-accent/10 text-accent",
    NLP: "border-sky-500/40 bg-sky-500/10 text-sky-300",
    Flask: "border-amber-500/40 bg-amber-500/10 text-amber-300",
    Django: "border-green-500/40 bg-green-500/10 text-green-300",
    "Machine Learning": "border-purple-500/40 bg-purple-500/10 text-purple-300",
    "Sentiment Analysis": "border-pink-500/40 bg-pink-500/10 text-pink-300",
    "REST APIs": "border-blue-500/40 bg-blue-500/10 text-blue-300",
    "Data Science": "border-teal-500/40 bg-teal-500/10 text-teal-300",
  };
  return (
    colors[tag] ?? "border-border bg-surface/80 text-muted hover:border-accent/30"
  );
}

export function formatGithubDisplay(url: string): string {
  return url.replace("https://github.com/", "github.com/");
}

export function formatLinkedinDisplay(url: string): string {
  return url.replace("https://linkedin.com/in/", "linkedin.com/in/");
}
