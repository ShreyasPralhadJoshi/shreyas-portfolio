import type {
  ContactInfo,
  Education,
  Experience,
  NavLink,
  PersonalInfo,
  Project,
  Publication,
  Skill,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Shreyas Pralhad Joshi",
  displayName: "Shreyas Joshi",
  initials: "SJ",
  role: "AI/ML Developer",
  roleCycle: [
    "AI/ML Developer",
    "Data Science Enthusiast",
    "Python Developer",
    "Full Stack Builder",
    "RAG Systems Engineer",
  ],
  bio: "Final-year Computer Science Engineering student specializing in AI-driven software development, machine learning, and intelligent automation systems. I build real-world projects involving NLP, RAG pipelines, dynamic pricing systems, and backend API development using Python-based ecosystems. Currently open to full-time roles in AI/ML and Data Science.",
  shortBio:
    "I build AI-powered systems — from RAG tutoring platforms to dynamic pricing engines. CS undergrad. Published researcher. Always shipping.",
  location: "Bangalore, India",
  email: "shreyaspralhadjoshi@gmail.com",
  phone: "+91 8123636969",
  linkedin: "https://linkedin.com/in/shreyaspralhadjoshi",
  github: "https://github.com/shreyaspralhadjoshi",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
  stats: [
    { label: "Projects Built", value: "10+" },
    { label: "Internship", value: "1" },
    { label: "Research Paper", value: "Published" },
    { label: "CGPA", value: "7.5/10" },
  ],
};

export const contactInfo: ContactInfo = {
  email: "shreyaspralhadjoshi@gmail.com",
  phone: "+91 8123636969",
  location: "Bangalore, India",
  linkedin: "https://linkedin.com/in/shreyaspralhadjoshi",
  github: "https://github.com/shreyaspralhadjoshi",
  availableFor: [
    "Full-time roles",
    "Internships",
    "Freelance AI/ML projects",
    "Research collaborations",
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  { name: "Python", category: "Languages", icon: "python" },
  { name: "JavaScript", category: "Languages", icon: "javascript" },
  { name: "SQL", category: "Languages", icon: "sql" },
  { name: "HTML5", category: "Languages", icon: "html5" },
  { name: "CSS3", category: "Languages", icon: "css3" },
  { name: "Machine Learning", category: "AI/ML", icon: "brain" },
  { name: "NLP", category: "AI/ML", icon: "nlp" },
  { name: "RAG Systems", category: "AI/ML", icon: "rag" },
  { name: "LangChain", category: "AI/ML", icon: "langchain" },
  { name: "Model Evaluation", category: "AI/ML", icon: "chart" },
  { name: "Data Analysis", category: "AI/ML", icon: "analytics" },
  { name: "Pandas", category: "Libraries", icon: "pandas" },
  { name: "NumPy", category: "Libraries", icon: "numpy" },
  { name: "Scikit-learn", category: "Libraries", icon: "sklearn" },
  { name: "Matplotlib", category: "Libraries", icon: "matplotlib" },
  { name: "Seaborn", category: "Libraries", icon: "seaborn" },
  { name: "Streamlit", category: "Libraries", icon: "streamlit" },
  { name: "Django", category: "Libraries", icon: "django" },
  { name: "Flask", category: "Libraries", icon: "flask" },
  { name: "React.js", category: "Libraries", icon: "react" },
  { name: "MySQL", category: "Databases", icon: "mysql" },
  { name: "MongoDB", category: "Databases", icon: "mongodb" },
  { name: "ChromaDB", category: "Databases", icon: "chromadb" },
  { name: "Git", category: "Tools", icon: "git" },
  { name: "GitHub", category: "Tools", icon: "github" },
  { name: "Postman", category: "Tools", icon: "postman" },
  { name: "VS Code", category: "Tools", icon: "vscode" },
  { name: "Google Colab", category: "Tools", icon: "colab" },
  { name: "Figma", category: "Tools", icon: "figma" },
];

export const projects: Project[] = [
  {
    id: "codelens",
    title: "CodeLens – AI-Powered Learning Platform",
    description:
      "A multi-track AI learning platform covering Python, DSA, SQL, ML/AI, and Web Development. Built a RAG tutoring system using LangChain and ChromaDB for contextual, personalized guidance with tools like Code Explainer, SQL Generator, and Mock Interview assistant.",
    tags: ["Python", "GPT-4o", "LangChain", "ChromaDB", "Streamlit", "RAG"],
    github: "https://github.com/shreyaspralhadjoshi/codelens",
    demo: "",
    featured: true,
    period: "Mar 2026 – May 2026",
    highlights: [
      "Multi-track curriculum: Python, DSA, SQL, ML/AI, Web Dev",
      "RAG pipeline with LangChain + ChromaDB for personalized responses",
      "AI Code Explainer, SQL Generator & Mock Interview tools",
      "Vector DB search for context-aware learning recommendations",
    ],
  },
  {
    id: "shabamorix-hire",
    title: "Shabamorix Hire – AI Virtual Interview Platform",
    description:
      "An AI-powered virtual interview platform automating candidate screening with NLP-based response analysis, sentiment scoring, and adaptive question difficulty. Published as a research paper in IJRPR.",
    tags: [
      "Python",
      "NLP",
      "Flask",
      "Django",
      "Machine Learning",
      "Sentiment Analysis",
    ],
    github: "https://github.com/shreyaspralhadjoshi/shabamorix-hire",
    demo: "",
    featured: true,
    period: "Aug 2024 – Nov 2025",
    highlights: [
      "Automated candidate screening with adaptive question difficulty",
      "NLP sentiment analysis + keyword extraction for objective scoring",
      "Published research paper in IJRPR journal",
      "Real-time performance-based interview workflow adaptation",
    ],
  },
  {
    id: "pricepilot-ai",
    title: "PricePilot AI – Dynamic Pricing Engine",
    description:
      "An ML-based dynamic pricing system using historical sales and customer behavior data for demand forecasting. Includes REST APIs for real-time pricing updates and e-commerce backend integration.",
    tags: ["Python", "Django", "Machine Learning", "REST APIs", "Data Science"],
    github: "https://github.com/shreyaspralhadjoshi/pricepilot-ai",
    demo: "",
    featured: false,
    period: "Jan 2026 – Mar 2026",
    highlights: [
      "ML demand forecasting from historical sales datasets",
      "REST API for real-time pricing updates",
      "Automated pricing logic adapting to market trends",
      "E-commerce backend integration ready",
    ],
  },
];

export const experience: Experience[] = [
  {
    id: "intern-qspiders",
    role: "Python with Data Science Intern",
    company: "QSpiders / Test Yantra Software Solutions",
    location: "Bangalore, India",
    duration: "Jan 2026 – May 2026",
    type: "Internship",
    primary: true,
    points: [
      "Performed data preprocessing, EDA, and visualization using Pandas, NumPy, Matplotlib, and Seaborn",
      "Developed and evaluated ML models for predictive analysis using Scikit-learn workflows",
      "Built Python automation scripts to reduce manual workflows and improve operational efficiency",
      "Collaborated on AI projects involving NLP, recommendation systems, and backend API integration",
      "Gained hands-on experience with Git/GitHub version control and API testing with Postman",
    ],
  },
  {
    id: "ncc-drone",
    role: "NCC Cadet – Drone Assembly & Flight Operations",
    company: "Jyothy Institute of Technology (JIT)",
    location: "Bangalore, India",
    duration: "Sep 2025 – Dec 2025",
    type: "Extracurricular",
    points: [
      "Designed, assembled, and field-tested an FPV drone covering frame integration, ESC setup, and motor calibration",
      "Developed practical skills in embedded systems, hardware integration, and real-time troubleshooting",
      "Earned 'A' Grade in NCC B and C Certificate examinations",
    ],
  },
  {
    id: "rotaract",
    role: "Co-Fundraising Chair & Co-Membership Chair",
    company: "Rotaract Club of JIT",
    location: "Bangalore, India",
    duration: "2023 – 2025",
    type: "Leadership",
    points: [
      "Coordinated student engagement initiatives, fundraising activities, and community-driven events",
      "Led membership drives to expand club presence across campus",
    ],
  },
];

export const education: Education[] = [
  {
    id: "be-cse",
    degree: "Bachelor of Engineering (B.E.) – Computer Science Engineering",
    institution: "Jyothy Institute of Technology – VTU",
    location: "Bangalore, India",
    duration: "2022 – June 2026",
    grade: "CGPA: 7.5 / 10",
    status: "Expected June 2026",
  },
  {
    id: "puc",
    degree: "Class XII (PUC)",
    institution: "Jnana Sweekar PU College",
    location: "Bangalore, India",
    duration: "2022",
    grade: "70%",
    status: "Completed",
  },
  {
    id: "cbse",
    degree: "Class X (CBSE)",
    institution: "Alpine Public School",
    location: "Bangalore, India",
    duration: "2020",
    grade: "60%",
    status: "Completed",
  },
];

export const publications: Publication[] = [
  {
    id: "ijrpr-shabamorix",
    title:
      "SHABAMORIX HIRE: An AI-Powered Virtual Interview, Resume Intelligence and Recruitment Analytics Platform",
    journal: "International Journal of Research Publication and Reviews (IJRPR)",
    year: "2025",
    link: "/research-paper.pdf",
    certificateUrl: "/publication-certificate.pdf",
  },
];
