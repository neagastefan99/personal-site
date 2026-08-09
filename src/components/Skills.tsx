import { skills } from "@/lib/data";
import {
  Code2, Server, Palette, Cloud, Brain, Users,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 className="h-4 w-4" />,
  Backend: <Server className="h-4 w-4" />,
  Frontend: <Palette className="h-4 w-4" />,
  "Cloud & DevOps": <Cloud className="h-4 w-4" />,
  "AI & Agents": <Brain className="h-4 w-4" />,
  "Soft Skills": <Users className="h-4 w-4" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-4 reveal">
          <div className="level-badge">CHARACTER SHEET</div>
          <h2 className="font-display text-4xl md:text-5xl tracking-wider">
            <span className="text-primary">SKILL TREE</span>
          </h2>
        </div>

        <div className="section-divider reveal reveal-delay-1" />

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="stat-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="stat-label">
                {categoryIcons[group.category]}
                {" "}{group.category}
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
