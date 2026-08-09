import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";

const btnOutline = cn(
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-border h-8 gap-1 px-2.5 text-sm font-medium whitespace-nowrap transition-all",
  "bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-2">
          <p className="text-sm font-mono text-accent tracking-widest uppercase">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Things I&apos;ve built
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-1">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-xs text-muted-foreground flex gap-2"
                    >
                      <span className="text-accent">▸</span> {h}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(btnOutline, "mt-auto w-full")}
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
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
