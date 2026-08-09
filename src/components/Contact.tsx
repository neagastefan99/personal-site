"use client";

import { useEffect, useRef } from "react";
import { Mail, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

const btnPrimary = cn(
  "inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent h-11 gap-2 px-6 text-sm font-semibold transition-all",
  "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
);

const btnOutline = cn(
  "inline-flex shrink-0 items-center justify-center rounded-xl border h-11 gap-2 px-6 text-sm font-semibold transition-all",
  "border-border/60 bg-background/50 backdrop-blur-sm hover:bg-secondary hover:border-primary/50 hover:text-foreground active:scale-95"
);

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
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
    <section ref={sectionRef} id="contact" className="py-28 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <div className="space-y-3 reveal">
          <p className="text-sm font-medium text-accent tracking-[0.25em] uppercase">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s{" "}
            <span className="gradient-text">work together</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed reveal reveal-delay-1">
            I&apos;m always open to interesting projects and collaborations.
            Drop me a line.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center reveal reveal-delay-2">
          <a href={`mailto:${siteConfig.email}`} className={btnPrimary}>
            <Mail className="h-4 w-4" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={btnOutline}
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={btnOutline}
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <footer className="pt-16 mt-8 border-t border-border/40 reveal reveal-delay-3">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
            <a
              href="#"
              className="hover:text-foreground transition-colors flex items-center gap-1 group"
            >
              Back to top{" "}
              <ArrowUp className="h-3 w-3 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
