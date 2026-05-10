"use client"

import { createContext, useState } from "react";

// Theme Context
export const ThemeContext = createContext({});

// Theme Provider
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider