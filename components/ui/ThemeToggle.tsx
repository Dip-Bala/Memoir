"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    setTheme(current);
  }, []);

  const toggle = (next: "light" | "dark") => {
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <div
      className="
        relative flex items-center
        w-20 h-9 p-1
        rounded-full
        bg-surface
        border border-border
      "
    >
      {/* Sliding highlight */}
      <div
        className={`
          absolute top-1 left-1
          h-7 w-8 rounded-full
          bg-primary-soft
          transition-transform duration-200 ease-out
          ${isDark ? "translate-x-8" : "translate-x-0"}
        `}
      />

      {/* Light */}
      <button
        onClick={() => toggle("light")}
        className="
          relative z-10
          flex items-center justify-center
          w-8 h-7
          text-text-muted
          cursor-pointer
        "
      >
        <Sun size={16} strokeWidth={1.5} />
      </button>

      {/* Dark */}
      <button
        onClick={() => toggle("dark")}
        className="
          relative z-10
          flex items-center justify-center
          w-8 h-7
          text-text-muted
          cursor-pointer
        "
      >
        <Moon size={16} strokeWidth={1.5} />
      </button>
    </div>
  );
}
