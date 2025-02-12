import { LoginRequest } from "../models/api.request.model";
import { ResponseObject } from "../models/api.response";
import { RegisterUser } from "../models/app.models";
import axiosInstance from "./axiosInstance";
import { API_ENDPOINTS } from "./endpoints";

export const register = async (payload: RegisterUser): Promise<ResponseObject> => {
  const response = await axiosInstance.post(API_ENDPOINTS.REGISTER, payload);
  return response.data as ResponseObject;
};

export const login = async (payload: LoginRequest) => {
  const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, payload);
  return response.data as ResponseObject
}

export const getUserDetails = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.VALIDATE_AUTH);
  return response.data as ResponseObject;
}