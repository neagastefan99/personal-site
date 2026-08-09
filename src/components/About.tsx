import { siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-32 px-4">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="space-y-4 reveal">
          <div className="level-badge">LVL 28</div>
          <h2 className="font-display text-4xl md:text-5xl tracking-wider">
            <span className="text-primary">AI ENGINEER</span>{" "}
            <span className="text-muted-foreground">AT METRO.DIGITAL</span>
          </h2>
        </div>

        <div className="section-divider reveal reveal-delay-1" />

        <div className="space-y-5 text-base leading-relaxed reveal reveal-delay-2">
          <p className="text-foreground/90 text-lg font-medium">
            I&apos;m Stefan — an AI Engineer from Brașov, Romania, working in
            METRO.digital&apos;s Agentic AI squad. We build intelligent agents
            that support different parts of the business, with end-to-end
            ownership across the entire stack.
          </p>

          <div className="space-y-4 text-muted-foreground">
            <p className="system-msg">
              Work spans database design, backend services, infrastructure-as-code
              with Terraform, hosted on Google Cloud Platform. Specialized chat
              systems with business data intelligence.
            </p>

            <p className="system-msg">
              Previously: 4 years full-stack at METRO.digital. Led migration of
              legacy Oracle Forms to Java + React. Transitioned invoice-printing
              from Oracle Reports to Flying Saucer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
