import React, { createContext, useReducer, useContext, ReactNode } from "react";

export type Notification = {
  id: number;
  message: string;
  type: "success" | "error" | "info";
};

type NotificationState = {
  notifications: Notification[];
};

type NotificationAction =
  | { type: "ADD_NOTIFICATION"; payload: Notification }
  | { type: "REMOVE_NOTIFICATION"; payload: number };

const defaultState: NotificationState = { notifications: [] };
const defaultDispatch: React.Dispatch<NotificationAction> = () => {};

const NotificationContext = createContext({
  state: defaultState,
  dispatch: defaultDispatch,
});

const notificationReducer = (
  state: NotificationState,
  action: NotificationAction,
): NotificationState => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return { notifications: [...state.notifications, action.payload] };
    case "REMOVE_NOTIFICATION":
      return {
        notifications: state.notifications.filter(
          (n) => n.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(notificationReducer, defaultState);

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error(
      "useNotification must be used within a NotificationProvider",
    );
  return context;
};
