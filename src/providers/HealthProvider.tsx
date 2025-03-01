import { useEffect, useState } from "react";
import { HealthContext } from "../contexts/healthContext";
import { healthCheck } from "../api";
import { Error } from "../components/Error";
import Darklight from "../components/Darklight";

export const HealthProvider = ({ children }: { children: React.ReactNode }) => {
  const [online, setOnline] = useState<boolean>(false);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await healthCheck();
        setOnline(res.statusCode === 200 ? true : false);
      } catch {
        setOnline(false);
      }
    };

    const interval = setInterval(checkHealth, 5000);
    checkHealth();
    return () => clearInterval(interval);
  }, []);

  return (
    <HealthContext.Provider value={{ online, setOnline }}>
      <Darklight />
      {online ? children : <Error />}
    </HealthContext.Provider>
  );
};
