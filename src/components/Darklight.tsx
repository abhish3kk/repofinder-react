import { MoonIcon, SunIcon } from "lucide-react";
import { useAppStore } from "../store/appStore";
import { APP_THEMES } from "../models/app.types";
import { useEffect } from "react";

const Darklight = () => {
  const { theme, setTheme } = useAppStore();

  useEffect(() => {
    if (theme) {
      if (theme === APP_THEMES.DARK) {
        document.documentElement.setAttribute("data-theme", APP_THEMES.DARK);
      } else {
        document.documentElement.setAttribute("data-theme", APP_THEMES.LIGHT);
      }
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(prefersDark ? APP_THEMES.DARK : APP_THEMES.LIGHT);
    }
  }, [theme, setTheme]);

  return (
    <button
      type="button"
      onClick={() =>
        setTheme(theme === APP_THEMES.DARK ? APP_THEMES.LIGHT : APP_THEMES.DARK)
      }
      className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md cursor-pointer"
    >
      {theme === APP_THEMES.DARK ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-800" />
      )}
    </button>
  );
};

export default Darklight;
