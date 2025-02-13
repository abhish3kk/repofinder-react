import { JSX } from "react";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Register from "../views/Register";

interface RouteDefinition {
  path: string
  element: JSX.Element
  isProtected?: boolean
}

const routes: RouteDefinition[] = [
  { path: "/login", element: <Login />},
  { path: "/register", element: <Register />},
  { path: "/", element: <Dashboard />, isProtected: true }
];

export default routes;