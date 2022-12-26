import { useLocation, Navigate, Outlet } from "react-router-dom";
import authenticate from "../api/authService";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";

const RequireAuth = () => {
  const location = useLocation();
  const { setIsAuthenticated, isAuthenticated } = useContext(AuthContext);
  const [isResponseReceived, setIsResponseReceived] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authResponse = await authenticate();
      if (authResponse.status === 200) {
        console.log("Authenticated");
        setIsAuthenticated(true);
        setIsResponseReceived(true);
      } else {
        setIsAuthenticated(false);
        setIsResponseReceived(true);
      }
    };
    checkAuth();
  }, []);

  if (!isAuthenticated) {
    console.log("Not Authenticated");
    if (isResponseReceived) {
      return <Navigate to="/login" state={{ from: location }} />;
    }

    return <div>Checking Authentication</div>;
  } else {
    console.log("outlet");
    return <Outlet />;
  }
};

export default RequireAuth;
