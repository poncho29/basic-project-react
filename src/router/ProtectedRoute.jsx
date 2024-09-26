import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../hooks";

const authRoutes = ["/auth/login", "/auth/register"];

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated, login, logout } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    const token = localStorage.getItem("token");

    if (!token) {
      // No hay token, hacer logout
      logout();
      return;
    }

    if (!isAuthenticated && token) {
      // Hay token, hacer petición al backend para obtener de nuevo al usuario
      setIsLoading(true);

      setTimeout(() => {
        const newToken = "123456";
        localStorage.setItem("token", newToken);

        login({
          id: 1,
          name: "John Doe",
          email: "johndoe@example.com",
          rol: "admin",
        });

        setIsLoading(false);
      }, 2000);

      return;
    }

    if (isAuthenticated && authRoutes.includes(path)) {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, isAuthenticated]);

  if (isLoading) {
    return (
      <div className='loading-protection'>
        <p>Cargando...</p>
      </div>
    );
  }

  return <>{children}</>;
};
