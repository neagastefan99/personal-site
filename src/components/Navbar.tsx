"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/data";

const btnGhost = cn(
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent size-8 text-sm font-medium whitespace-nowrap transition-all",
  "hover:bg-muted hover:text-foreground"
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold tracking-tight gradient-text"
        >
          {siteConfig.name}
        </a>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className={cn(btnGhost, "md:hidden")}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
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
