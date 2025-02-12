import { API_ROOT } from "./config";


export const API_ENDPOINTS = {
  LOGIN: `${API_ROOT}/auth/login`,
  REGISTER: `${API_ROOT}/users/create`,
  VALIDATE_AUTH: `${API_ROOT}/auth`,
  FETCH_REPOS: `${API_ROOT}/repos`,
  FAVORITES: `${API_ROOT}/favorites`,
};
