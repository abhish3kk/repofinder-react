import React, { useCallback, useMemo, useReducer } from "react";
import { LoaderContext } from "../contexts";

const loaderReducer = (_: boolean, action: "START" | "STOP") => {
  return action === "START";
};

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, dispatch] = useReducer(loaderReducer, false);
  /* Experimental stuff */
  const startLoading = useCallback(() => dispatch("START"), []);
  const stopLoading = useCallback(() => dispatch("STOP"), []);

  /* const startLoading = () => dispatch("START");
  const stopLoading = () => dispatch("STOP"); */
  /* 
    useMemo returns the computed property of isLoading, startLoading, stopLoading
  */
  const value = useMemo(() => {
    return { isLoading, startLoading, stopLoading };
  }, [isLoading, startLoading, stopLoading]);
  /* const value = {isLoading, startLoading, stopLoading} */
  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};
