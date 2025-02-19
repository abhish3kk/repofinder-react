import { createContext } from "react";
import { AuthContextType } from "../models/app.models";

export const AuthContext = createContext<AuthContextType>({
  token: null,
  setAuthToken: () => {},
  logout: () => {},
});
