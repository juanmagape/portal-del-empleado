import { Navigate, Outlet } from "react-router-dom";
import Nav from '../nav'
import SideBar from '../sidebar'

const isAuthenticated = () =>
  !!localStorage.getItem("user");

function ProtectedRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
        <Nav />
        <SideBar />
      <Outlet />
    </>
  );
}

export default ProtectedRoute;