import { createContext } from "react";
import { NotificationAction, NotificationState } from "../models/app.types";

export const defaultState: NotificationState = { notifications: [] };
export const defaultDispatch: React.Dispatch<NotificationAction> = () => {};

export const NotificationContext = createContext({
  state: defaultState,
  dispatch: defaultDispatch,
});
