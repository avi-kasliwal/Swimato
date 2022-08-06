import { createContext, useState } from "react";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const tempUser = await loginRequest(email, password);
      setUser(tempUser);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(e.toString());
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
