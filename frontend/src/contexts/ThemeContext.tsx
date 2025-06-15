//=================================================================================================================
// SIMPLE THEME CONTEXT
//=================================================================================================================
// Simple dark/light theme for DizhTime - applies to ALL components
//=================================================================================================================

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize theme from localStorage immediately to prevent flash
  const [isDark, setIsDark] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("dizhtime-theme");
      return savedTheme ? savedTheme === "dark" : true;
    } catch {
      return true; // Default to dark if localStorage fails
    }
  });

  // Apply theme immediately on mount and when changed
  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save to localStorage
    try {
      localStorage.setItem("dizhtime-theme", isDark ? "dark" : "light");
    } catch {
      console.warn("Failed to save theme to localStorage");
    }
  }, [isDark]);

  // Apply theme immediately on initial load to prevent flash
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
};
