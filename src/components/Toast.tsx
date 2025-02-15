import { CircleCheck, CircleX, Info, X } from "lucide-react";
import { Notification, useNotification } from "../contexts/NotificationContext";
import { useEffect } from "react";

const Toast = () => {
  const { state, dispatch } = useNotification();

  const notificationClass = (notification: Notification): string => {
    switch (notification.type) {
      case "success":
        return `text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200`;
      case "error":
        return `text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200`;
      case "info":
        return `text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200`;
      default:
        return ``;
    }
  };

  useEffect(() => {
    state.notifications.forEach((notification) => {
      setTimeout(() => {
        setTimeout(
          () =>
            dispatch({ type: "REMOVE_NOTIFICATION", payload: notification.id }),
          500,
        );
      }, 3000);
    });
  }, [state.notifications, dispatch]);

  if (!state.notifications.length) return <></>;

  return (
    <div className="fixed left-1/2 top-10 transform -translate-x-1/2  space-y-2">
      {state.notifications.map((notification, index) => (
        <div
          id="toast-success"
          className={`flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800 `}
          key={`${notification.id}-${Date.now()}-${index}`}
          role="alert"
        >
          <div
            className={`inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200 ${notificationClass(notification)}`}
          >
            {notification.type === "success" && <CircleCheck />}
            {notification.type === "error" && <CircleX />}
            {notification.type === "info" && <Info />}
          </div>
          <div className="ms-3 text-sm font-normal me-3">
            {notification.message}
          </div>
          <button
            type="button"
            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
            onClick={() =>
              dispatch({
                type: "REMOVE_NOTIFICATION",
                payload: notification.id,
              })
            }
          >
            <span className="sr-only">Close</span>
            <X />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
