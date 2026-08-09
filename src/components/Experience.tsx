import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        <div className="space-y-3">
          <p className="text-sm font-mono text-accent tracking-[0.2em] uppercase">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What{" "}
            <span className="gradient-text">I&apos;ve been up to</span>
          </h2>
        </div>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <Card
              key={i}
              className="glow-card backdrop-blur-sm bg-card/60 border-border/50"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <CardTitle className="text-lg">{exp.role}</CardTitle>
                  <span className="text-sm text-muted-foreground font-mono">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-primary font-medium">
                  {exp.company}
                </p>
              </CardHeader>
              <CardContent>
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
                        <span className="text-accent mt-0.5 shrink-0">▸</span>{" "}
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-bold tracking-tight">
            <span className="gradient-text">Education</span>
          </h3>
          {education.map((edu, i) => (
            <Card
              key={i}
              className="glow-card backdrop-blur-sm bg-card/60 border-border/50"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <CardTitle className="text-base">{edu.degree}</CardTitle>
                  <span className="text-sm text-muted-foreground font-mono">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-primary font-medium">
                  {edu.school}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
