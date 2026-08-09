import { ArrowDown, ExternalLink, Globe, Mail, MapPin } from "lucide-react";
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

const iconLink =
  "p-2 rounded-full border border-border/40 bg-background/30 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="hero-blob w-[500px] h-[500px] top-[-100px] left-[-100px]"
        style={{ background: "oklch(0.55 0.22 275)" }}
      />
      <div
        className="hero-blob w-[400px] h-[400px] bottom-[10%] right-[-100px]"
        style={{ background: "oklch(0.78 0.14 195)" }}
      />

      <div className="max-w-3xl text-center space-y-6 relative z-10">
        {/* Location badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-xs text-muted-foreground">
          <MapPin className="h-3 w-3 text-accent" />
          {siteConfig.location}
        </div>

        <p className="text-sm font-mono text-accent tracking-[0.2em] uppercase">
          Hello, I&apos;m
        </p>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
          <span className="gradient-text">{siteConfig.name}</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {siteConfig.tagline}
        </p>

        <div className="flex gap-3 justify-center pt-6">
          <a href="#experience" className={btnPrimary}>
            View My Work
          </a>
          <a href="#contact" className={btnOutline}>
            Get In Touch
          </a>
        </div>

        <div className="flex gap-3 justify-center pt-4">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLink}
            aria-label="GitHub"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLink}
            aria-label="LinkedIn"
          >
            <Globe className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className={iconLink}
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="pt-16 animate-bounce">
          <ArrowDown className="h-5 w-5 mx-auto text-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
}
