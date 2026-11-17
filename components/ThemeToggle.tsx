"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
  }, []);

  const isDark = theme === "dark";

  function toggle() {
    const next: Theme = isDark ? "light" : "dark";
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={toggle}
      className={`relative h-9 w-16 shrink-0 overflow-hidden rounded-full border border-line transition-colors duration-500 motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        isDark ? "bg-[#1B2430]" : "bg-[#9CD2FF]"
      }`}
    >
      {/* bintang (mode gelap) */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="absolute left-3 top-2 h-1 w-1 rounded-full bg-white" />
        <span className="absolute left-6 top-5 h-0.5 w-0.5 rounded-full bg-white" />
        <span className="absolute left-4 top-6 h-1 w-1 rounded-full bg-white/70" />
      </span>

      {/* awan (mode terang) */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="absolute bottom-1 right-2 h-3 w-6 rounded-full bg-white/90" />
        <span className="absolute bottom-3 right-5 h-2.5 w-4 rounded-full bg-white/80" />
      </span>

      {/* knob yang bergeser: matahari / bulan */}
      <span
        aria-hidden="true"
        className={`absolute left-1 top-1 h-7 w-7 rounded-full shadow-md transition-all duration-500 ease-out motion-reduce:transition-none ${
          isDark ? "translate-x-7 bg-[#D9DEE6]" : "translate-x-0 bg-[#F5C518]"
        }`}
      >
        <span
          className={`absolute left-1.5 top-2 h-1.5 w-1.5 rounded-full bg-[#9AA4B2] transition-opacity duration-500 motion-reduce:transition-none ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        />
        <span
          className={`absolute left-4 top-4 h-1 w-1 rounded-full bg-[#9AA4B2] transition-opacity duration-500 motion-reduce:transition-none ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        />
      </span>
    </button>
  );
}