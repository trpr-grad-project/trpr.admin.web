import { useState, type ReactNode, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";

type Props = { children: ReactNode };

export default function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme") ?? 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  function changeTheme(): void {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  const contextProps = {
    theme,
    changeTheme,
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextProps}>
      {children}
    </ThemeContext.Provider>
  );
}