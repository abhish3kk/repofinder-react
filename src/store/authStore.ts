import { create } from "zustand"

export interface User {
  firstname: string
  lastname: string
  username: string
}

interface AuthState {
  user: User | null,
  setUser: (user: User | null) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user: User | null) => {
    set({user: user})
  }
}))