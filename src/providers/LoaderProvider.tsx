import React, { useCallback, useMemo, useReducer } from "react";
import { LoaderContext } from "../contexts";

const loaderReducer = (_: boolean, action: "START" | "STOP") => {
  return action === "START";
};

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, dispatch] = useReducer(loaderReducer, false);

  const startLoading = useCallback(() => dispatch("START"), []);
  const stopLoading = useCallback(() => dispatch("STOP"), []);
  const value = useMemo(
    () => ({ isLoading, startLoading, stopLoading }),
    [isLoading, startLoading, stopLoading],
  );
  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};
