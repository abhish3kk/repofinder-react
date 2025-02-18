import {
  GitHubSearchParams,
  LoginRequest,
  SaveSettingsRequest,
} from "../models/api.request.model";
import { ResponseObject } from "../models/api.response";
import { RegisterUser } from "../models/app.models";
import axiosInstance from "./axiosInstance";
import { API_ENDPOINTS, GITHUB_API } from "./endpoints";

export const register = async (
  payload: RegisterUser,
): Promise<ResponseObject> => {
  const response = await axiosInstance.post(API_ENDPOINTS.REGISTER, payload);
  return response.data as ResponseObject;
};

export const login = async (payload: LoginRequest): Promise<ResponseObject> => {
  const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, payload);
  return response.data as ResponseObject;
};

export const getUserDetails = async (): Promise<ResponseObject> => {
  const response = await axiosInstance.get(API_ENDPOINTS.VALIDATE_AUTH);
  return response.data as ResponseObject;
};

export const getRepos = async (
  params: GitHubSearchParams,
): Promise<ResponseObject> => {
  const response = await axiosInstance.post(GITHUB_API.REPOS, params);
  return response.data as ResponseObject;
};

export const getStarred = async (): Promise<ResponseObject> => {
  const response = await axiosInstance.get(GITHUB_API.STARRED);
  return response.data as ResponseObject;
};

export const saveSettings = async (
  payload: SaveSettingsRequest,
): Promise<ResponseObject> => {
  const response = await axiosInstance.put(
    API_ENDPOINTS.SAVE_SETTINGS,
    payload,
  );
  return response.data as ResponseObject;
};
