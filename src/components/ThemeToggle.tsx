"use client";

import { useState, useEffect, useCallback } from "react";
import { Sun, Moon } from "lucide-react";

const DARK_ACHIEVEMENTS = [
  "INTO THE DUNGEON — The shadows welcome you back.",
  "EMBRACE THE DARK — You never really left, did you?",
  "NEW ACHIEVEMENT! — Torch extinguished. You'll need your night vision now.",
  "THE ABYSS — It's not staring back. It's smiling.",
  "NEW ACHIEVEMENT! — You have entered: The Crawl.",
];

const LIGHT_ACHIEVEMENTS = [
  "ESCAPED THE DUNGEON — Fresh air. Weird flex, but okay.",
  "SUNLIGHT SENSITIVITY — -2 DEX for the next 10 minutes.",
  "NEW ACHIEVEMENT! — You unlocked: Vitamin D Synthesis!",
  "THE SURFACE — The locals call this 'outside'. Strange place.",
  "TORCHLIT — Wait, that's the actual sun. Impressive graphics.",
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [achievement, setAchievement] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("light", saved === "light");
    }
  }, []);

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("light", next === "light");

    // Trigger achievement
    const list = next === "dark" ? DARK_ACHIEVEMENTS : LIGHT_ACHIEVEMENTS;
    const msg = list[Math.floor(Math.random() * list.length)];
    setAchievement(msg);

    // Auto-dismiss after 3s
    setTimeout(() => setAchievement(null), 5000);
  }, [theme]);

  return (
    <>
      <button
        onClick={toggle}
        className="relative p-2 border-2 border-primary/50 hover:border-primary transition-colors group"
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-primary group-hover:animate-pulse" />
        ) : (
          <Moon className="w-4 h-4 text-primary group-hover:animate-pulse" />
        )}
      </button>

      {/* Achievement popup — DCC style glitch/scanline comic pop */}
      {achievement && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[10001] animate-in slide-in-from-top-4 duration-300">
          <div className="chunky-card px-6 py-4 border-2 border-accent bg-card/95 shadow-[0_0_30px_rgba(57,255,20,0.3)]">
            <div className="flex items-center gap-3">
              <span className="font-display text-2xl text-accent animate-bounce">
                ⚡
              </span>
              <div>
                <div className="font-display text-sm tracking-widest text-accent uppercase">
                  NEW ACHIEVEMENT!
                </div>
                <p className="text-xs text-muted-foreground mt-1 font-mono max-w-xs">
                  {achievement}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
