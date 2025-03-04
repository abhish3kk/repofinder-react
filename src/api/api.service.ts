import { API_ENDPOINTS, GITHUB_API } from "./endpoints";
import { apiRequest } from "./http.service";
import {
  GitHubSearchParams,
  LoginRequest,
  SaveSettingsRequest,
} from "../models/api.request.model";
import { ResponseObject } from "../models/api.response.model";
import { RegisterUser } from "../models/app.models";

export const apiService = {
  register: (payload: RegisterUser) =>
    apiRequest<ResponseObject>("POST", API_ENDPOINTS.REGISTER, payload),
  login: (payload: LoginRequest) =>
    apiRequest<ResponseObject>("POST", API_ENDPOINTS.LOGIN, payload),
  getUserDetails: () =>
    apiRequest<ResponseObject>("GET", API_ENDPOINTS.VALIDATE_AUTH),
  getRepos: (params: GitHubSearchParams) =>
    apiRequest<ResponseObject>("POST", GITHUB_API.REPOS, params),
  getStarred: () => apiRequest<ResponseObject>("GET", GITHUB_API.STARRED),
  saveSettings: (payload: SaveSettingsRequest) =>
    apiRequest<ResponseObject>("PUT", API_ENDPOINTS.SAVE_SETTINGS, payload),
  healthCheck: () =>
    apiRequest<ResponseObject>("GET", API_ENDPOINTS.HEALTH_CHECK),
};
