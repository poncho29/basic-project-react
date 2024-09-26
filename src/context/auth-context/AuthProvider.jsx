import { useState } from "react";
import { AuthContext } from "./AuthContext";

const initialState = {
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};

export const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const login = (user) => {
    setState({
      ...state,
      user,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    setState({
      ...state,
      user: null,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
