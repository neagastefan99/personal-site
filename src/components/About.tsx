"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.15 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-28 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-3 reveal">
          <p className="text-sm font-medium text-accent tracking-[0.25em] uppercase">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            AI Engineer{" "}
            <span className="gradient-text">at METRO.digital</span>
          </h2>
        </div>

        <div className="space-y-6 text-base leading-relaxed">
          <p className="text-foreground/90 text-lg font-medium reveal reveal-delay-1">
            I&apos;m Stefan — an AI Engineer from Brașov, Romania, working in
            METRO.digital&apos;s Agentic AI squad. We build intelligent agents
            that support different parts of the business, with end-to-end
            ownership across the entire stack.
          </p>

          <div className="space-y-4 text-muted-foreground reveal reveal-delay-2">
            <p className="pull-quote-accent pl-6">
              My work spans database design, backend services,
              infrastructure-as-code with Terraform, and everything hosted on
              Google Cloud Platform. We create specialized chat systems powered
              by business data intelligence to solve domain-specific problems
              across the organization.
            </p>

            <p className="pull-quote-accent pl-6">
              Before moving into AI, I spent four years as a full-stack
              developer at METRO.digital, where I led the migration of legacy
              Oracle Forms applications to modern Java + React stacks and
              transitioned invoice-printing from Oracle Reports to Flying
              Saucer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
