import { Mail, ExternalLink, Globe, ArrowUp } from "lucide-react";
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

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <div className="space-y-3">
          <p className="text-sm font-mono text-accent tracking-[0.2em] uppercase">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s{" "}
            <span className="gradient-text">work together</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            I&apos;m always open to interesting projects and collaborations.
            Drop me a line.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
            <ExternalLink className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={btnOutline}
          >
            <Globe className="h-4 w-4" />
            LinkedIn
          </a>
        </div>

        <footer className="pt-16 mt-8 border-t border-border/40">
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
