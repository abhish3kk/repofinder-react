import React from "react";
import { AuthProvider } from "./providers";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./components/Error";
import { HealthProvider } from "./providers/HealthProvider";
import Loader from "./components/Loader";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <HealthProvider>
        <React.Suspense fallback={<Loader />}>
          <AuthProvider>{children}</AuthProvider>
        </React.Suspense>
      </HealthProvider>
    </ErrorBoundary>
  );
};
