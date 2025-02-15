import { create } from "zustand";

interface settingsState {
  topics: string[];
  languages: string[];
  limit: number;
  setTopic: (topic: string) => void;
  setLanguage: (language: string) => void;
  setLimit: (limit: number) => void;
}

export const useSettingsStore = create<settingsState>((set) => ({
  topics: ["react", "angular", "vue"],
  languages: ["typescript", "javascript"],
  limit: 5,
  setTopic: (topic: string) => {
    set((state) => {
      state.topics = [...state.topics, topic];
      return state;
    });
  },
  setLanguage: (language: string) => {
    set((state) => {
      state.languages = [...state.languages, language];
      return state;
    });
  },
  setLimit: (limit: number) => {
    set({ limit: limit });
  },
}));
