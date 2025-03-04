import { create } from "zustand";
import { GitHubOrder, GitHubSort, GitHubStars } from "../models/github.types";

interface settingsState {
  topics: string[];
  languages: string[];
  perPage: number;
  starGazers: GitHubStars;
  sort: GitHubSort;
  order: GitHubOrder;
  setTopics: (topics: string[]) => void;
  setLanguages: (languages: string[]) => void;
  setPerPage: (perPage: number) => void;
  setStarGazers: (value: GitHubStars) => void;
  setSort: (value: GitHubSort) => void;
  setOrder: (value: GitHubOrder) => void;
}

export const useSettingsStore = create<settingsState>((set) => ({
  topics: ["react", "vue", "angular"],
  languages: [],
  perPage: 5,
  starGazers: GitHubStars.Between50And100,
  sort: GitHubSort.Updated,
  order: GitHubOrder.Descending,
  setTopics: (topics: string[]) => set({ topics: topics }),
  setLanguages: (languages: string[]) => set({ languages: languages }),
  setPerPage: (perPage: number) => {
    set({ perPage: perPage });
  },
  setStarGazers: (value: GitHubStars) => {
    set({ starGazers: value });
  },
  setSort: (value: GitHubSort) => {
    set({ sort: value });
  },
  setOrder: (value: GitHubOrder) => {
    set({ order: value });
  },
}));
