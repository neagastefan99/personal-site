export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-mono text-accent tracking-widest uppercase">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Full-stack developer at METRO.digital
          </h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I&apos;m Stefan — a full-stack developer from Brașov, Romania, currently
            building enterprise applications at METRO.digital. I specialize in
            Java, Spring, React, and Google Cloud Platform, with a focus on
            modernizing legacy systems and delivering scalable, cloud-native
            solutions.
          </p>
          <p>
            My proudest achievement: leading the migration of a critical
            application from Oracle Forms to a modern Java + React stack, along
            with transitioning invoice-printing from Oracle Reports to Flying
            Saucer. I thrive at the intersection of backend architecture and
            clean frontend delivery.
          </p>
          <p>
            When I&apos;m not shipping code, I&apos;m building side projects — from HR
            systems to scooter fleet dashboards — exploring new technologies,
            and pushing my craft forward.
          </p>
        </div>
      </div>
    </section>
  );
}
