import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("easykart-user"));

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but not admin
  if (user.role?.toLowerCase() !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;