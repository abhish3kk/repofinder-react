import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  firstname: string;
  lastname: string;
  username: string;
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
