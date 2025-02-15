import { useState } from "react";
import { RegisterUser } from "../models/app.models";
import { Link, useNavigate } from "react-router";
import { register } from "../api";
import { useLoader } from "../contexts/LoaderContext";

const Register = () => {
  const [user, setUser] = useState<RegisterUser>({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });
  const { startLoading, stopLoading } = useLoader();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const checkDisabled = (): boolean => {
    return Object.values(user).some(
      (value) => value === "" || value === null || value === undefined,
    );
  };

  const handleRegister = async () => {
    startLoading();
    const response = await register(user);
    stopLoading();
    if (response && response.responseObject) {
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
          Register
        </h2>
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Firstname
              </label>
              <input
                type="text"
                className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-gray-200"
                placeholder="Firstname"
                name="firstname"
                value={user?.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Lastname
              </label>
              <input
                type="text"
                className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-gray-200"
                placeholder="LastName"
                name="lastname"
                value={user?.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              type="text"
              className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-gray-200"
              placeholder="username"
              name="username"
              value={user?.username}
              onChange={handleChange}
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
              name="password"
              value={user?.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-default"
            disabled={checkDisabled()}
            onClick={handleRegister}
          >
            Register
          </button>
          <p className="mt-2 text-sm dark:text-white text-gray-600 w-full">
            Already have an account?
            <Link to="/login" className="text-blue-600  hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
