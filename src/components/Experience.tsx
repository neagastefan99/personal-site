import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="space-y-2">
          <p className="text-sm font-mono text-accent tracking-widest uppercase">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What I&apos;ve been up to
          </h2>
        </div>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <CardTitle className="text-lg">{exp.role}</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-primary">{exp.company}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {exp.description}
                </p>
                {exp.highlights.length > 0 && (
                  <ul className="space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-xs text-muted-foreground flex gap-2"
                      >
                        <span className="text-accent mt-0.5">▸</span> {h}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <div className="space-y-6 pt-6">
          <h3 className="text-xl font-bold tracking-tight">Education</h3>
          {education.map((edu, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <CardTitle className="text-base">{edu.degree}</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-primary">{edu.school}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
