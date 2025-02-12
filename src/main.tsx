import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import App from "./App";
import Darklight from "./components/darklight";
import { LoaderProvider } from "./contexts/LoaderContext";
import Loader from "./components/Loader";
import Toast from "./components/Toast";
import { NotificationProvider } from "./contexts/NotificationContext";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LoaderProvider>
      <AuthProvider>
        <NotificationProvider>
          <App />
          <Darklight />
          <Loader />
          <Toast />
        </NotificationProvider>
      </AuthProvider>
    </LoaderProvider>
  </BrowserRouter>
);