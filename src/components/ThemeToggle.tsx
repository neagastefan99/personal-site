"use client";

import { useState, useEffect, useCallback } from "react";
import { Sun, Moon } from "lucide-react";

const ACHIEVEMENTS = [
  "WELCOME TO THE LIGHT — You've escaped the dungeon... for now.",
  "SUNLIGHT SENSITIVITY — The dark beckons. It always does.",
  "FLASHLIGHT BATTERIES — Found some AA's in a loot crate.",
  "NEW ACHIEVEMENT! — You have unlocked: Vitamin D Deficiency Reversal!",
  "THE SURFACE — You heard there was a sky up here. Confirmed.",
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
    const msg = ACHIEVEMENTS[Math.floor(Math.random() * ACHIEVEMENTS.length)];
    setAchievement(msg);

    // Auto-dismiss after 3s
    setTimeout(() => setAchievement(null), 3000);
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
