export type Notification = {
  id: number;
  message: string;
  type: "success" | "error" | "info";
};

export type NotificationState = {
  notifications: Notification[];
};

export type NotificationAction =
  | { type: "ADD_NOTIFICATION"; payload: Notification }
  | { type: "REMOVE_NOTIFICATION"; payload: number };

export enum APP_THEMES {
  DARK = "dark",
  LIGHT = "light",
}

export const STARRED_ROUTE = "starred";
