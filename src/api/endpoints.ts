import { API_ROOT } from "./config";


export const API_ENDPOINTS = {
  LOGIN: `${API_ROOT}/auth/login`,
  REGISTER: `${API_ROOT}/users/create`,
  GET_USER_DETAILS: `${API_ROOT}/user-details`,
  FETCH_REPOS: `${API_ROOT}/repos`,
  FAVORITES: `${API_ROOT}/favorites`,
};
