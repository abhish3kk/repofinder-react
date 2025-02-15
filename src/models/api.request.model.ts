export interface LoginRequest {
  username: string;
  password: string;
}

export interface GitHubSearchParams {
  q?: string;
  per_page?: number;
  page?: number;
  sort?: string;
  order?: string;
  language?: string;
  created?: string;
  pushed?: string;
  user?: string;
}
