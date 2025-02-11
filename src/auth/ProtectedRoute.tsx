import { Navigate, useLocation } from "react-router";
import { useAuth } from "./AuthContext"
import { JSX } from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
  isProtected?: boolean
}

const ProtectedRoute = ({children, isProtected = false}: ProtectedRouteProps) => {
  const { token } = useAuth();
  const location = useLocation();

  if (token && !isProtected) {
    return <Navigate to="/" replace />; // Redirect to home if token exists
  }

  if (!token && isProtected) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute