import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import RequireAuth from "./auth/RequireAuth.tsx";
import Darklight from "./components/darklight.tsx";
import routes from "./routes/index.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} Component={route.Component} />
      ))}
      <Route element={<RequireAuth />}>
        <Route path="/" element={<App />} />
      </Route>
    </Routes>
    <Darklight />
  </BrowserRouter>,
);
