import { useEffect, useState } from "react";
import { HealthContext } from "../contexts/healthContext";
import { Error } from "../components/Error";
import { useLoader } from "../hooks";
import apiService from "../api";

export const HealthProvider = ({ children }: { children: React.ReactNode }) => {
  const [online, setOnline] = useState<boolean>(true);
  const { startLoading, stopLoading } = useLoader();
  const [healthChecked, setHealthChecked] = useState<boolean>(false);

  useEffect(() => {
    const checkHealth = async () => {
      startLoading();
      try {
        const res = await apiService.healthCheck();
        setOnline(res?.statusCode === 200 ? true : false);
      } catch {
        setOnline(false);
      } finally {
        setHealthChecked(true);
      }
      stopLoading();
    };
    checkHealth();
  }, []);

  if (!healthChecked) {
    return null;
  }

  return (
    <HealthContext.Provider value={{ online, setOnline }}>
      {online ? children : <Error />}
    </HealthContext.Provider>
  );
};
