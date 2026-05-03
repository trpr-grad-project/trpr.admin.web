import { createContext } from "react";

type contextProps = {
  theme: string | null;
  changeTheme: () => void;
}

export const ThemeContext = createContext<contextProps | null>(null);