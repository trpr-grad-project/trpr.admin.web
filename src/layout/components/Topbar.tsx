import { Sun, Moon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

export default function Topbar() {
  const { theme, changeTheme } = useContext(ThemeContext)!;

  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex justify-end items-center px-8 h-14">
      <button
        onClick={changeTheme}
        className="p-2 rounded-lg cursor-pointer"
      >
        {theme === 'dark'
          ? <Sun className="text-secondary hover:text-primary-container transition-colors" />
          : <Moon className="text-secondary hover:text-primary-container transition-colors" />
        }
      </button>
    </header>
  );
}