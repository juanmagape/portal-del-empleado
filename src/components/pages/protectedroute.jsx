import { Navigate, Outlet } from "react-router-dom";
import SideBar from '../sidebar'

const isAuthenticated = () =>
  !!localStorage.getItem("user");

function ProtectedRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
        <SideBar />
      <Outlet />
    </>
  );
}

export default ProtectedRoute;