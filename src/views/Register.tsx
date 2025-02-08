import { useState } from "react";
import { RegisterUser } from "../app.models";

const Register = () => {
  const [user, setUser] = useState<RegisterUser>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    console.log("handleChange", { name, value });
    setUser({ ...user, [name]: value });
  };

  const checkDisabled = (): boolean => {
    return Object.values(user).some(
      (value) => value === "" || value === null || value === undefined,
    );
  };

  const register = () => {
    console.log(user);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
          Register
        </h2>
        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Firstname
              </label>
              <input
                type="text"
                className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-gray-200"
                placeholder="Firstname"
                name="firstName"
                value={user?.firstName}
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
                name="lastName"
                value={user?.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-gray-200"
              placeholder="Enter your email"
              name="email"
              value={user?.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Country
              </label>
              <input
                type="text"
                className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-gray-200"
                placeholder="Country"
                name="country"
                value={user?.country}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone
              </label>
              <input
                type="text"
                className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-gray-200"
                placeholder="Phone"
                name="phone"
                value={user?.phone}
                onChange={handleChange}
                required
              />
            </div>
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
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            disabled={checkDisabled()}
            onClick={register}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
