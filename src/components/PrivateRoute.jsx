import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (user === undefined) {
    return null;
  }

  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
