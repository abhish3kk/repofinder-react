import { createContext, useContext, useEffect, useState } from "react";
import { getUserDetails } from "../api";
import { useLoader } from "./LoaderContext";
import { ResponseObject } from "../models/api.response";
import { useNotification } from "./NotificationContext";
import { useAuthStore, User } from "../store/authStore";
import { useSettingsStore } from "../store/settingStore";
import { GitHubOrder, GitHubSort, GitHubStars } from "../models/github.types";
interface AuthContextType {
  token: string | null;
  setAuthToken: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token"),
  );
  const { startLoading, stopLoading } = useLoader();
  const { state, dispatch } = useNotification();
  const { setUser } = useAuthStore();
  const {
    setTopics,
    setPerPage,
    setLanguages,
    setOrder,
    setSort,
    setStarGazers,
  } = useSettingsStore();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const setAuthToken = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    const validateToken = async () => {
      if (!token) return;
      try {
        startLoading();
        const response = await getUserDetails();
        const user = response.responseObject as User;
        setUser(user);
        if (user.settings) {
          const settings = user.settings;
          if (settings.topics) {
            const topics = settings.topics.split(",");
            setTopics(topics);
          }
          if (settings.languages) {
            const languages = settings.languages.split(",");
            setLanguages(languages);
          }
          if (settings.sort) {
            setSort(settings.sort as GitHubSort);
          }
          if (settings.order) {
            setOrder(settings.order as GitHubOrder);
          }
          if (settings.perPage) {
            setPerPage(settings.perPage);
          }
          if (settings.starGazers) {
            setStarGazers(settings.starGazers as GitHubStars);
          }
        }
      } catch (error: any) {
        console.error("Token validation failed:", error);
        if (error && error.response && error.response.data) {
          dispatch({
            type: "ADD_NOTIFICATION",
            payload: {
              id: state.notifications.length + 1,
              message: (error.response.data as ResponseObject).message,
              type: "error",
            },
          });
        } else {
          dispatch({
            type: "ADD_NOTIFICATION",
            payload: {
              id: state.notifications.length + 1,
              message: "Token validation failed",
              type: "error",
            },
          });
        }
        setUser(null);
        localStorage.removeItem("token");
        setToken(null);
      } finally {
        stopLoading();
      }
    };
    validateToken();
  }, [token]);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedToken = localStorage.getItem("token");

      if (storedToken !== token) {
        setToken(storedToken);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setAuthToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");

  return context;
};
