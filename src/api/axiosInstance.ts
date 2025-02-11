import axios from "axios";
import { API_ROOT } from "./config";


const axiosInstance = axios.create({
  baseURL: API_ROOT,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

// Add request interceptor (if needed)
axiosInstance.interceptors.request.use(
  (config) => {
    // // Example: Add Authorization token if available
    const token = localStorage.getItem("jwt");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.withCredentials = true
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor (if needed)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
