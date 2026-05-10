"use client"

import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext, useEffect } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {

    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

  }, [theme]);

  return (
    <div 
      onClick={() => toggleTheme()}
      className="group isolate cursor-pointer px-3 py-2 relative border border-foreground/50 hover:border-emerald-500 rounded-full overflow-hidden"
    >
      <div className="group-hover:text-emerald-500">
        {theme}
      </div>
    </div>
  )
}
export default ThemeToggle