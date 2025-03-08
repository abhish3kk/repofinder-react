import React from "react";
import { AuthProvider } from "./providers";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./components/Error";
import { HealthProvider } from "./providers/HealthProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <HealthProvider>
        <AuthProvider>{children}</AuthProvider>
      </HealthProvider>
    </ErrorBoundary>
  );
};
