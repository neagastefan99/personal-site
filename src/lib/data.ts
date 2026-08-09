export const siteConfig = {
  name: "Stefan Neaga",
  title: "AI Engineer",
  tagline: "Building AI agents that solve real business problems — full-stack, from database to deployment.",
  location: "Brașov, Romania",
  email: "neagastfean@gmail.com",
  github: "https://github.com/NeagaStefan",
  linkedin: "https://www.linkedin.com/in/stefan-neaga-21452b197",
  resumeUrl: "/resume.pdf",
};

export const skills = [
  { category: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS"] },
  { category: "Backend", items: ["Spring Framework", "REST APIs", "Oracle DB", "PostgreSQL", "Node.js"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Oracle Forms Migration"] },
  { category: "Cloud & DevOps", items: ["Google Cloud Platform", "Terraform", "Docker", "Git", "GitHub", "CI/CD"] },
  { category: "AI & Agents", items: ["Agentic AI", "LLM Integration", "RAG", "Chat Systems", "Data Intelligence"] },
  { category: "Soft Skills", items: ["Agile (Scrum/Kanban)", "Spoken English", "Cross-team Collaboration"] },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "METRO.digital",
    period: "Jun 2026 – Present",
    description:
      "Part of the Agentic AI squad building intelligent agents to support different parts of the business. End-to-end ownership across the full stack — from database design and backend services to infrastructure-as-code with Terraform, all hosted on Google Cloud Platform. Creating specialized chat systems with business data intelligence to solve domain-specific problems across the organization.",
    highlights: [
      "Building AI agents for business process automation",
      "Full-stack: DB, backend, infrastructure (Terraform), GCP",
      "Specialized chat systems with business data intelligence",
      "Agentic AI squad — cross-functional, end-to-end ownership",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "METRO.digital",
    period: "Jun 2022 – Jun 2026",
    description:
      "Built and modernized enterprise applications for one of Europe's largest wholesale retailers. Led migration of legacy Oracle Forms applications to modern Java + React stack. Deployed and scaled cloud-native services on Google Cloud Platform.",
    highlights: [
      "Migrated invoice-printing from Oracle Reports to Flying Saucer",
      "Transitioned legacy app from Oracle Forms to Java + React",
      "GCP cloud-native deployment and scaling",
      "Agile development with Scrum and Kanban",
    ],
  },
  {
    role: "Java Trainee",
    company: "METRO.digital",
    period: "2022",
    description:
      "Built strong foundation in Java development with focus on object-oriented programming, clean code principles, and Agile methodologies.",
    highlights: [],
  },
];

export const education = [
  {
    degree: "Engineer's Degree, Automotive Engineering",
    school: "Universitatea Transilvania din Brașov",
    period: "2018 – 2022",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
