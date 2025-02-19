import { createContext } from "react";

type LoaderState = {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

export const LoaderContext = createContext<LoaderState | undefined>(undefined);
