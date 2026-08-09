import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";

const btnOutline = cn(
  "inline-flex shrink-0 items-center justify-center rounded-xl border border-border/60 h-9 gap-1.5 px-4 text-xs font-medium transition-all",
  "bg-background/50 backdrop-blur-sm hover:bg-secondary hover:border-primary/50 hover:text-foreground"
);

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-3">
          <p className="text-sm font-mono text-accent tracking-[0.2em] uppercase">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Things{" "}
            <span className="gradient-text">I&apos;ve built</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="flex flex-col glow-card backdrop-blur-sm bg-card/60 border-border/50"
            >
              <CardHeader>
                <CardTitle className="text-lg">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="text-[10px] px-2 py-0.5 rounded-md border-border/50 bg-secondary/30"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-1.5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-xs text-muted-foreground flex gap-2"
                    >
                      <span className="text-accent mt-0.5 shrink-0">▸</span>{" "}
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(btnOutline, "mt-2 w-full")}
                >
                  <ExternalLink className="h-3 w-3" />
                  View Repo
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
