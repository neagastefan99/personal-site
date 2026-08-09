import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="space-y-2">
          <p className="text-sm font-mono text-accent tracking-widest uppercase">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technologies I work with
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category} className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill} variant="secondary">
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
