"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/data";

const btnGhost = cn(
  "inline-flex shrink-0 items-center justify-center size-8 font-medium transition-all",
  "hover:bg-muted hover:text-foreground"
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 border-b-2 border-border z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-xl tracking-wider text-primary hover:text-accent transition-colors"
        >
          {siteConfig.name}
        </a>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className={cn(btnGhost, "md:hidden")}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t-2 border-border bg-background">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-sm font-mono text-muted-foreground hover:text-primary hover:bg-secondary uppercase tracking-wider"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
