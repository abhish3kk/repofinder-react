import axios from "axios";
import { API_ROOT } from "./config";

const axiosInstance = axios.create({
  baseURL: API_ROOT,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.withCredentials = true;
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(`HTTP Error: ${error}`);
    if (error.response && error.response.status === 401) {
      //ToDo: improve this logic
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
