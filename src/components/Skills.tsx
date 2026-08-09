"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/lib/data";
import {
  Code2,
  Server,
  Palette,
  Cloud,
  Brain,
  Users,
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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        <div className="space-y-3 reveal">
          <p className="text-sm font-medium text-accent tracking-[0.25em] uppercase">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technologies{" "}
            <span className="gradient-text">I work with</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="skill-card border border-border/40 bg-card/40 backdrop-blur-sm rounded-2xl p-5 reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <h3 className="text-sm font-semibold text-foreground/80 flex items-center gap-2 mb-4">
                <span className="text-accent">
                  {categoryIcons[group.category] || (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent inline-block" />
                  )}
                </span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge text-xs px-3 py-1.5 rounded-lg border border-border/50 bg-secondary/40 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-secondary/80 cursor-default"
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
