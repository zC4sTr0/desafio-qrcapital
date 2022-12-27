import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedUsername, setLoggedUsername] = useState("");
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        loggedUsername,
        setLoggedUsername,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
