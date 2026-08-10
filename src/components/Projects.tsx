import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-4 reveal">
          <div className="level-badge">INVENTORY</div>
          <h2 className="font-display text-4xl md:text-5xl tracking-wider">
            <span className="text-primary">SIDE</span>{" "}
            <span className="text-muted-foreground">PROJECTS</span>
          </h2>
        </div>

        <div className="section-divider reveal reveal-delay-1" />

        <div className="quest-timeline">
          {projects.map((project, i) => (
            <div
              key={i}
              className="quest-item reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="chunky-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl tracking-wider text-primary">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-accent hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    View on GitHub ▸
                  </a>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs font-mono px-2 py-0.5 border border-primary/30 text-primary bg-primary/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
