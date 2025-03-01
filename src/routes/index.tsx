import { JSX } from "react";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Register from "../views/Register";
import Settings from "../views/Settings";
import MainContent from "../components/MainContent";

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
