import { ArrowDown, ExternalLink, Globe, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

const btnBase =
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent h-9 gap-1.5 px-2.5 text-sm font-medium whitespace-nowrap transition-all";

const btnPrimary = cn(
  btnBase,
  "bg-primary text-primary-foreground hover:bg-primary/80"
);

const btnOutline = cn(
  btnBase,
  "border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
);

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-3xl text-center space-y-6">
        <p className="text-sm font-mono text-accent tracking-widest uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto">
          {siteConfig.tagline}
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <a href="#projects" className={btnPrimary}>
            View My Work
          </a>
          <a href="#contact" className={btnOutline}>
            Get In Touch
          </a>
        </div>
        <div className="flex gap-4 justify-center pt-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Globe className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <div className="pt-12 animate-bounce">
          <ArrowDown className="h-5 w-5 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
