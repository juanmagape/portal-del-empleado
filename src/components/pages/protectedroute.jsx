import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () =>
  !!localStorage.getItem("user");

function ProtectedRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;