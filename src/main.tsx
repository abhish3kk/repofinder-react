import { createRoot } from "react-dom/client";
import { BrowserRouter, Link } from "react-router";
import "./index.css";
import AppRoutes from "./AppRoutes";
import Darklight from "./components/Darklight";
import Loader from "./components/Loader";
import { AppProvider } from "./Provider";
import UserDropdown from "./components/UserDropdown";
import reactLogo from "./assets/react.svg";
import { ToastContainer } from "react-toastify";
import { LoaderProvider } from "./providers";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Darklight />
    <LoaderProvider>
      <Loader />
      <ToastContainer />
      <AppProvider>
        {/* Below fallback is not working, WIP */}
        <React.Suspense fallback={<Loader showLoader={true} />}>
          <AppRoutes />
          <Link
            to="/"
            title="home"
            className="fixed left-4 top-4 w-auto text-right"
          >
            <img src={reactLogo} className="mr-3 h-6 sm:h-9" />
          </Link>
          <UserDropdown />
        </React.Suspense>
      </AppProvider>
    </LoaderProvider>
  </BrowserRouter>,
);
