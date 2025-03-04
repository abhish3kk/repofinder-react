import { Slide, toast } from "react-toastify";
import axiosInstance from "./axiosInstance";
import { useAppStore } from "../store/appStore";

export const apiRequest = async <T>(
  method: "GET" | "POST" | "PUT" | "PATCH",
  url: string,
  data?: unknown,
): Promise<T | null> => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
    });
    return response.data as T;
  } catch (error) {
    handleApiError(error);
    return null;
  }
};

const handleApiError = (error: any) => {
  const theme = useAppStore.getState().theme;
  console.error("API Error:", error);
  let errorMessage: string;
  if (error.response) {
    const { status, data } = error.response;
    errorMessage = `Error ${status}: ${data?.message || data || "Unknown error"}`;
  } else {
    errorMessage = "Network Error or Server Unreachable";
  }
  console.error(errorMessage);
  toast.error(errorMessage, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: theme,
    transition: Slide,
  });
};
