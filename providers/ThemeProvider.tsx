"use client"

import { createContext, useEffect, useState } from "react";

// Theme Context
export const ThemeContext = createContext({});

// Theme Provider
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {

  },);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider