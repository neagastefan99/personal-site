import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="space-y-4 reveal">
          <div className="level-badge">QUEST LOG</div>
          <h2 className="font-display text-4xl md:text-5xl tracking-wider">
            <span className="text-primary">COMPLETED</span>{" "}
            <span className="text-muted-foreground">QUESTS</span>
          </h2>
        </div>

        <div className="section-divider reveal reveal-delay-1" />

        <div className="quest-timeline">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="quest-item reveal"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="chunky-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl tracking-wider text-primary">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-mono text-accent mb-3 uppercase tracking-wider">
                  {exp.company}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {exp.description}
                </p>
                {exp.highlights.length > 0 && (
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="space-y-6 pt-6 reveal">
          <h3 className="font-display text-2xl tracking-wider text-primary">
            TRAINING GROUNDS
          </h3>
          <div className="section-divider" />
          {education.map((edu, i) => (
            <div key={i} className="chunky-card p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                <h4 className="font-display text-lg tracking-wider text-foreground">
                  {edu.degree}
                </h4>
                <span className="text-xs font-mono text-muted-foreground">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm font-mono text-primary uppercase tracking-wider">
                {edu.school}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
