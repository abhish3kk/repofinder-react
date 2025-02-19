import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../api";
import { useAuth, useLoader, useNotification } from "../hooks";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthToken, token } = useAuth();
  const { startLoading, stopLoading } = useLoader();
  const { state, dispatch } = useNotification();
  const navigate = useNavigate();

  const handleLogin = (
    e:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (e.type === "click" || ("key" in e && e.key === "Enter")) {
      startLoading();
      login({ username, password })
        .then((resp) => {
          if (resp.responseObject) {
            setAuthToken(resp.responseObject.toString());
            dispatch({
              type: "ADD_NOTIFICATION",
              payload: {
                id: state.notifications.length + 1,
                message: resp.message,
                type: "success",
              },
            });
          }
        })
        .catch((error) => {
          let message = error;
          if (error && error.response) {
            message = error.response.data?.message
              ? error.response.data.message
              : error.response.data;
          } else if (error.message) {
            message = error.message;
          }
          dispatch({
            type: "ADD_NOTIFICATION",
            payload: {
              id: state.notifications.length + 1,
              message: message,
              type: "error",
            },
          });
        })
        .finally(() => {
          stopLoading();
        });
    }
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
          Login
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              type="text"
              className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-gray-200"
              placeholder="Username"
              value={username}
              onKeyDown={handleLogin}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-gray-200"
              placeholder="Password"
              value={password}
              onKeyDown={handleLogin}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button
              type="button"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 cursor-pointer disabled:bg-gray-400 disabled:cursor-default"
              disabled={!username || !password}
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              type="button"
              className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 cursor-pointer"
              onClick={navigateToRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
