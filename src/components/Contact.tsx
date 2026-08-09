import { Mail, ExternalLink, Globe, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

const btnPrimary = cn(
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent h-9 gap-1.5 px-2.5 text-sm font-medium whitespace-nowrap transition-all",
  "bg-primary text-primary-foreground hover:bg-primary/80"
);

const btnOutline = cn(
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-border h-9 gap-1.5 px-2.5 text-sm font-medium whitespace-nowrap transition-all",
  "bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-2">
          <p className="text-sm font-mono text-accent tracking-widest uppercase">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            I&apos;m always open to interesting projects and collaborations. Drop me
            a line.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`mailto:${siteConfig.email}`} className={btnPrimary}>
            <Mail className="h-4 w-4 mr-2" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={btnOutline}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={btnOutline}
          >
            <Globe className="h-4 w-4 mr-2" />
            LinkedIn
          </a>
        </div>
        <footer className="pt-16 border-t border-border">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}
            </p>
            <a
              href="#"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              Back to top <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
