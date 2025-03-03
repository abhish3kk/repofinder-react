import { useEffect, useState } from "react";
import { HealthContext } from "../contexts/healthContext";
import { healthCheck } from "../api";
import { Error } from "../components/Error";
import { useLoader } from "../hooks";

export const HealthProvider = ({ children }: { children: React.ReactNode }) => {
  const [online, setOnline] = useState<boolean>(true);
  const { isLoading, startLoading, stopLoading } = useLoader();

  useEffect(() => {
    const checkHealth = async () => {
      if (!isLoading) startLoading();
      try {
        const res = await healthCheck();
        setOnline(res.statusCode === 200 ? true : false);
      } catch {
        setOnline(false);
      }
      stopLoading();
    };
    checkHealth();
  }, []);

  return (
    <HealthContext.Provider value={{ online, setOnline }}>
      {online ? children : <Error />}
    </HealthContext.Provider>
  );
};
