import { API_ROOT } from "./config";

export const API_ENDPOINTS = {
  LOGIN: `${API_ROOT}/auth/login`,
  REGISTER: `${API_ROOT}/users/create`,
  VALIDATE_AUTH: `${API_ROOT}/auth`,
  FETCH_REPOS: `${API_ROOT}/repos`,
  FAVORITES: `${API_ROOT}/favorites`,
  SAVE_SETTINGS: `${API_ROOT}/settings`,
};

export const GITHUB_API = {
  REPOS: `${API_ROOT}/repos`,
  STARRED: `${API_ROOT}/repos/starred`,
};
