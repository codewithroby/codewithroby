"use client";

import { createContext, useContext, useState } from "react";

type ThemeType = "light" | "dark";

type ThemeContextType = {
  theme: ThemeType;
  switchTheme: () => void;
};

type ThemeContextProviderType = {
  children: React.ReactNode;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: ThemeContextProviderType) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        switchTheme: switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error(
      "useTheme must be used from within a ThemeContextProvider."
    );
  }

  return context;
};

export default ThemeContextProvider;
