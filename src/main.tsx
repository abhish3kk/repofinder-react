import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App";
import Darklight from "./components/Darklight";
import Loader from "./components/Loader";
import Toast from "./components/Toast";
import { AppProvider } from "./Provider";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppProvider>
      <App />
      <Darklight />
      <Loader />
      <Toast />
    </AppProvider>
  </BrowserRouter>,
);
