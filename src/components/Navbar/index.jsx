import { NavLink } from "react-router-dom";

import { useAuth } from "../../hooks";

import { navbarLinks } from "../../assets";

import styles from "./navbar.module.css";

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
  };

  return (
    <header className={styles.header}>
      <h1>Navbar</h1>

      <nav className={styles.navbar}>
        {navbarLinks.map(({ path, name }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
          >
            {name}
          </NavLink>
        ))}

        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <NavLink
            to={"/auth/login"}
            className={({ isActive }) => (isActive ? styles.linkActive : "")}
          >
            Login
          </NavLink>
        )}
      </nav>
    </header>
  );
};
