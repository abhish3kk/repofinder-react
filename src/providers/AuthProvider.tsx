import { useEffect, useState } from "react";
import { useSettingsStore } from "../store/settingStore";
import { GitHubOrder, GitHubSort, GitHubStars } from "../models/github.types";
import { useLoader } from "../hooks";
import { AuthContext } from "../contexts";
import { useAuthStore } from "../store";
import { User } from "../models/app.models";
import apiService from "../api";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token"),
  );
  const { startLoading, stopLoading } = useLoader();
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
    if (storedToken && storedToken !== token) {
      setToken(storedToken);
    }
  }, [token]);

  const setAuthToken = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const validateToken = async () => {
      if (!token) return;
      try {
        startLoading();
        const response = await apiService.getUserDetails();
        const user = response?.responseObject as User;
        setUser(user);

        if (user.settings) {
          const { topics, languages, sort, order, perPage, starGazers } =
            user.settings;
          if (topics) setTopics(topics.split(","));
          if (languages) setLanguages(languages.split(","));
          if (sort) setSort(sort as GitHubSort);
          if (order) setOrder(order as GitHubOrder);
          if (perPage) setPerPage(perPage);
          if (starGazers) setStarGazers(starGazers as GitHubStars);
        }
      } catch (error: any) {
        console.error("Token validation failed:", error);
        logout();
      } finally {
        stopLoading();
      }
    };

    validateToken();
  }, [
    token,
    setUser,
    setTopics,
    setLanguages,
    setSort,
    setOrder,
    setPerPage,
    setStarGazers,
    startLoading,
    stopLoading,
  ]);

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ token, setAuthToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
