import React, { createContext, useContext, useReducer } from "react";

type LoaderState = {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

const LoaderContext = createContext<LoaderState | undefined>(undefined);

const loaderReducer = (_: boolean, action: "START" | "STOP") => {
  return action === "START";
};

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, dispatch] = useReducer(loaderReducer, false);
  const startLoading = () => dispatch("START");
  const stopLoading = () => dispatch("STOP");

  return (
    <LoaderContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) throw new Error("useLoader must be used within LoaderProvider");

  return context;
};
