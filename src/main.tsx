import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { AuthProvider } from "./auth/AuthContext";
import App from "./App";
import Darklight from "./components/darklight";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
        <App />
        <Darklight />
    </AuthProvider>
  </BrowserRouter>
);