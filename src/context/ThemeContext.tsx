import { createContext, useContext, useEffect, useState } from "react";

type ThemeType = "dark" | "light";

interface ThemeContextData {
  themeMode: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeType>("dark");

  function toggleTheme() {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeMode === "dark");
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}