"use client";
import { Github } from "lucide-react";
import ToggleTheme from "../ui/ThemeToggle";
import Image from "next/image";
import { useEffect, useState } from "react";
export function Header() {
  const [logoUrl, setLogoUrl] = useState("/logo-light.svg");

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      setLogoUrl("/logo-dark.svg");
    } else {
      setLogoUrl("/logo-light.svg");
    }
  }, []);
  return (
    <header className="flex items-center justify-between w-full p-4">
      <div className="font-logo text-xl font-bold text-text">
        {/* Memoir<span className="text-primary">•</span>
         */}
        <Image src={logoUrl} alt="Memoir Logo" width={100} height={20} />
      </div>

      <div className="flex gap-4 items-center text-text-muted">
        <div>
          <nav className="hidden sm:block text-text-secondary text-sm">
            Extension
          </nav>
        </div>
        <ToggleTheme />
        <a
          href={"https://github.com/Dip-Bala/Memoir"}
          target="_blank"
          className="p-2 rounded-full pointer-cursor text-text-secondary"
        >
          <Github strokeWidth={1.5} size={20} />
        </a>
      </div>
    </header>
  );
}
