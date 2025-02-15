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
    isProtected: true,
    children: [
      { path: "", element: <MainContent />, isProtected: true },
      { path: "settings", element: <Settings />, isProtected: true },
      { path: ":category", element: <MainContent />, isProtected: true },
    ],
  },
];

export default routes;
