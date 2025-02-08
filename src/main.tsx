import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import Login from './views/Login.tsx';
import RequireAuth from './auth/RequireAuth.tsx';


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// document.documentElement.classList.toggle(
//   "dark",
//   localStorage.theme === "dark" ||
//     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
// );


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<RequireAuth />}>
        <Route path="/" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
