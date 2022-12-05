import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  if (!localStorage.getItem("user")) {
    return <Navigate to="/" replace />;
  }
  return <Outlet/>;
};

export default ProtectedRoute;