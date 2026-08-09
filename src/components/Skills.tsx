import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        <div className="space-y-3">
          <p className="text-sm font-mono text-accent tracking-[0.2em] uppercase">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technologies{" "}
            <span className="gradient-text">I work with</span>
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category} className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs px-3 py-1 rounded-lg border-border/50 bg-secondary/50 hover:bg-secondary hover:border-primary/30 transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
