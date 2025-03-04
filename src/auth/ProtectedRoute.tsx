import { Navigate, useLocation } from "react-router";
import { JSX } from "react";
import { useAuth } from "../hooks";
import { useAuthStore, useSettingsStore } from "../store";

interface ProtectedRouteProps {
  children: JSX.Element;
  isProtected?: boolean;
}

const ProtectedRoute = ({
  children,
  isProtected = false,
}: ProtectedRouteProps) => {
  const { token } = useAuth();
  const { user } = useAuthStore();
  const { topics } = useSettingsStore();
  const location = useLocation();

  if (!user && location.pathname === "/") {
    return <Navigate to={`/${topics[0]}`} state={{ from: location }} replace />;
  }
  /* if (token && !isProtected) {
    return <Navigate to="/" replace />;
  } */

  if (!token && isProtected) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
