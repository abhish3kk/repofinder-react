export interface RegisterUser {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
}
export interface AuthContextType {
  token: string | null;
  setAuthToken: (token: string) => void;
  logout: () => void;
}

export interface Settings {
  topics: string;
  languages: string;
  perPage: number;
  starGazers: string;
  sort: string;
  order: string;
}
export interface User {
  firstname: string;
  lastname: string;
  username: string;
  settings: Settings;
}

export interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}
