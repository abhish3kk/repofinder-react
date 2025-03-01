import { JSX, lazy } from "react";

const Login = lazy(() => import("../views/Login"));
const Register = lazy(() => import("../views/Register"));
const Settings = lazy(() => import("../views/Settings"));
const MainContent = lazy(() => import("../components/MainContent"));
const Dashboard = lazy(() => import("../views/Dashboard"));

interface RouteDefinition {
  path: string;
  element: JSX.Element;
  isProtected?: boolean;
  children?: RouteDefinition[];
}

const routes: RouteDefinition[] = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "", element: <MainContent /> },
      { path: "settings", element: <Settings /> },
      { path: ":category", element: <MainContent /> },
    ],
  },
];

export default routes;
