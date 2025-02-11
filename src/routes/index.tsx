import { JSX } from "react";
import Home from "../views/Home";
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
  { path: "/", element: <Home />, isProtected: true }
];

export default routes;