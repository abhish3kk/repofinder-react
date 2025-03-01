import { Navigate, useLocation } from "react-router";
import { JSX } from "react";
import { useAuth } from "../hooks";

interface ProtectedRouteProps {
  children: JSX.Element;
  isProtected?: boolean;
}

const ProtectedRoute = ({
  children,
  isProtected = false,
}: ProtectedRouteProps) => {
  const { token } = useAuth();
  const location = useLocation();

  if (token && !isProtected) {
    return <Navigate to="/" replace />;
  }

  if (!token && isProtected) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
