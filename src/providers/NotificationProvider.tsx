import { useReducer, ReactNode } from "react";
import { NotificationAction, NotificationState } from "../models/app.types";
import { NotificationContext } from "../contexts";
import { defaultState } from "../contexts/notificationContext";

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
