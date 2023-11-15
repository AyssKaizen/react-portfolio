// Dark mode exercise
import { createContext, useState, useContext, useEffect } from "react";
const ThemeContext = createContext();
const LOCALE_STORAGE_THEME_KEY = "colorTheme";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const isDark = theme === "dark";
  const isLight = theme === "light";

  useEffect(() => {
    const savedColorTheme = localStorage.getItem(LOCALE_STORAGE_THEME_KEY);
    // check preferences system
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    // add local storage preference
    if (savedColorTheme) {
      setTheme(savedColorTheme);
      return;
    }

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () =>
    setTheme((current) => {
      const newTheme = current === "dark" ? "light" : "dark";
      localStorage.setItem(LOCALE_STORAGE_THEME_KEY, newTheme);
      return newTheme;
    });
  const values = { theme, isDark, isLight, toggleTheme };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  return ctx;
};
