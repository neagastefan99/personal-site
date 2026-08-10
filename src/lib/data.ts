export const siteConfig = {
  name: "Stefan Neaga",
  title: "AI Engineer",
  tagline: "Building AI agents that solve real business problems — full-stack, from database to deployment.",
  location: "Brașov, Romania",
  email: "neagastfean@gmail.com",
  github: "https://github.com/neagastefan99",
  linkedin: "https://www.linkedin.com/in/stefan-neaga-21452b197",
  resumeUrl: "/resume.pdf",
};

export const skills = [
  { category: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS"] },
  { category: "Backend", items: ["Spring Framework", "REST APIs", "Oracle DB", "PostgreSQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Cloud & DevOps", items: ["Google Cloud Platform", "Terraform", "Docker", "Git", "GitHub", "CI/CD"] },
  { category: "AI & Agents", items: ["Agentic AI", "LLM Integration", "RAG", "Chat Systems", "Data Intelligence"] },
  { category: "Soft Skills", items: ["Agile (Scrum/Kanban)", "Cross-team Collaboration"] },
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
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const projects = [
  {
    title: "Kindle Deals Bot — SFF",
    description:
      "Daily cron bot that scrapes Amazon Kindle deals for Science Fiction & Fantasy books. Dual API+HTML scraping with curl_cffi Chrome impersonation, genre/price filtering, author tracking, and Telegram delivery. Zero LLM cost (no_agent).",
    tech: ["Python", "curl_cffi", "BeautifulSoup", "Hermes Cron", "Telegram API"],
    url: "https://github.com/neagastefan99/kindle-deals-bot",
    stars: null,
  },
  {
    title: "Kindle Deals Bot — Non-Fiction",
    description:
      "Sister bot for non-fiction Kindle deals: science, history, and philosophy. Uses negative keyword filtering to exclude fiction, scans multiple Amazon categories, and delivers formatted reports with cover images.",
    tech: ["Python", "curl_cffi", "BeautifulSoup", "Hermes Cron", "Telegram API"],
    url: "https://github.com/neagastefan99/kindle-deals-nonfiction",
    stars: null,
  },
  {
    title: "Personal Site",
    description:
      "Dungeon Crawler Carl-inspired portfolio site. Next.js 16 + Tailwind v4 + shadcn/ui with RPG game UI elements, ember particles, scanlines, and achievement banners.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    url: "https://github.com/neagastefan99/personal-site",
    stars: null,
  },
];
