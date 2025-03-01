import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  theme: string;
  setTheme: (value: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: "",
      setTheme: (value: string) => {
        document.documentElement.setAttribute("data-theme", value);
        return set({ theme: value });
      },
    }),
    {
      name: "theme",
    },
  ),
);
