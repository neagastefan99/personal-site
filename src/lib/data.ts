export const siteConfig = {
  name: "Stefan Neaga",
  title: "Full-Stack Developer",
  tagline: "Building things that work — from backend to pixels.",
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
  { category: "Cloud & DevOps", items: ["Google Cloud Platform", "Docker", "Git", "GitHub", "CI/CD"] },
  { category: "Soft Skills", items: ["Agile (Scrum/Kanban)", "Spoken English", "Cross-team Collaboration"] },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "METRO.digital",
    period: "Jun 2022 – Present",
    description:
      "Building and modernizing enterprise applications for one of Europe's largest wholesale retailers. Leading migration of legacy Oracle Forms applications to modern Java + React stack. Deploying and scaling cloud-native services on Google Cloud Platform.",
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
