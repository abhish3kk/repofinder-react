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
