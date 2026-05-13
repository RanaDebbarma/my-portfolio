"use client"

import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext, useEffect } from "react";

const ThemeToggle = () => {
  const context = useContext<{ theme: string; toggleTheme: () => void } | null>(ThemeContext);

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
      className="group convex hover:concave isolate cursor-pointer px-3 py-2 relative border border-foreground/5 hover:bg-emerald-500/10 hover:border-emerald-500/0 rounded-full overflow-hidden"
    >
      <div className="group-hover:text-emerald-500">
        {theme}
      </div>
    </div>
  )
}
export default ThemeToggle