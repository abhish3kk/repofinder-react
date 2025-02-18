import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Settings {
  topics: string;
  languages: string;
  perPage: number;
  starGazers: string;
  sort: string;
  order: string;
}
export interface User {
  firstname: string;
  lastname: string;
  username: string;
  settings: Settings
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User | null) => {
        set({ user: user });
      },
    }),
    {
      name: "user",
    },
  ),
);
