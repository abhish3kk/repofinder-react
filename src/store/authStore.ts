import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState, User } from "../models/app.models";

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
