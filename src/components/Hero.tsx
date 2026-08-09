"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Mail, MapPin } from "lucide-react";
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

// Inline SVG icons matching Lucide style (24px, 2px stroke, same styling)
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

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const count = 60;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx!.scale(devicePixelRatio, devicePixelRatio);
    }

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    function draw() {
      if (!ctx || !canvas) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      ctx.strokeStyle = "oklch(0.55 0.22 275 / 10%)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "oklch(0.55 0.22 275 / 40%)";
        ctx.fill();
      }

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      aria-hidden="true"
    />
  );
}

function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      <span className={displayed.length === text.length ? "typing-cursor" : ""}>
        {displayed.length < text.length ? "|" : ""}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      <div
        className="hero-blob w-[500px] h-[500px] top-[-100px] left-[-100px]"
        style={{ background: "oklch(0.55 0.22 275)" }}
      />
      <div
        className="hero-blob w-[400px] h-[400px] bottom-[10%] right-[-100px]"
        style={{ background: "oklch(0.78 0.14 195)" }}
      />

      <ParticleCanvas />

      <div className="max-w-3xl text-center space-y-6 relative z-10 px-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm text-xs text-muted-foreground reveal">
          <MapPin className="h-3 w-3 text-accent" />
          {siteConfig.location}
        </div>

        <p className="text-sm font-medium text-accent tracking-[0.25em] uppercase reveal reveal-delay-1">
          Hello, I&apos;m
        </p>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none reveal reveal-delay-2">
          <span className="gradient-text">{siteConfig.name}</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto leading-relaxed h-[3.5rem] reveal reveal-delay-3">
          <TypingText text={siteConfig.tagline} />
        </p>

        <div className="flex gap-3 justify-center pt-6 reveal reveal-delay-4">
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
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={iconLink}
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
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
