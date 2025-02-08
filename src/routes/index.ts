import { RouteObject } from "react-router";
import Register from "../views/Register";
import Login from "../views/Login";

const routes: RouteObject[] = [
  { path: "/register", Component: Register },
  { path: "/login", Component: Login },
];

export default routes;
