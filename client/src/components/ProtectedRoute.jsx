import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { isLoggedIn, isGuest } = useAuth();

  // Allow logged-in users and guests
  if (!isLoggedIn && !isGuest) {
    toast.error("Please login to continue");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;