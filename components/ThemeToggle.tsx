"use client"

import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext, useEffect } from "react";

const ThemeToggle = () => {
  const context = useContext(ThemeContext) as { theme: string; toggleTheme: () => void } | null;

  if (!context) {
    throw new Error("ThemeToggle must be used inside ThemeProvider");
  }

  const { theme, toggleTheme } = context;

  useEffect(() => {

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

  }, [theme]);

  return (
    <div
      onClick={() => toggleTheme()}
      className={`${theme === 'dark'
        ? "hover:bg-emerald-500/10"
        : "hover:bg-red-500/10"
        } group convex isolate cursor-pointer px-3 py-2 relative rounded-full overflow-hidden duration-300 ease-in-out`}
    >
      <div className={`${theme === 'dark'
        ? "group-hover:text-emerald-500"
        : "group-hover:text-red-600"
        } duration-300 ease-in-out`}
      >
        {theme}
      </div>
    </div>
  )
}
export default ThemeToggle