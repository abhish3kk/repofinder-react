import { Loader } from "lucide-react";
import React from "react";
import {
  AuthProvider,
  LoaderProvider,
  NotificationProvider,
} from "./providers";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "./components/Error";
import { HealthProvider } from "./providers/HealthProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<Loader />}>
      <ErrorBoundary FallbackComponent={Error}>
        <LoaderProvider>
          <NotificationProvider>
            <HealthProvider>
              <AuthProvider>{children}</AuthProvider>
            </HealthProvider>
          </NotificationProvider>
        </LoaderProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
