import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  token: string | null;
  setAuthToken: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({children} : {children: React.ReactNode}) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const setAuthToken = (newToken : string) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  }

  useEffect(() => {
    const handleStorageChange = () => {
      console.log("handleStorageChange")
      const storedToken = localStorage.getItem("token");

      if (storedToken !== token) {
        setToken(storedToken); // Update the state if localStorage token changes
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [token]);

  return (
    <AuthContext.Provider value = {{token, setAuthToken, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if(!context) throw new Error("useAuth must be used within an AuthProvider")

  return context
}