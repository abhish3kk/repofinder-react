import { createContext } from "react";

interface HealthContextType {
  online: boolean;
  setOnline: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HealthContext = createContext<HealthContextType>({
  online: false,
  setOnline: () => {},
});
