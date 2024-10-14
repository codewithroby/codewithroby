"use client;";

import { createContext, useState } from "react";

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
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: "light",
        switchTheme: switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
