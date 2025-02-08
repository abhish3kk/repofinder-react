import { Navigate, Outlet } from "react-router";

const RequireAuth: React.FC = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
