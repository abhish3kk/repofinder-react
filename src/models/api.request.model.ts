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

export interface SaveSettingsRequest {
  topics: string,
  languages: string,
  perPage: number,
  starGazers: string,
  sort: string,
  order: string,
}
