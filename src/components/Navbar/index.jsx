import { NavLink } from 'react-router-dom';

import { navbarLinks } from '../../assets';

import styles from './navbar.module.css';



export const Navabr = () => {
  return (
    <header className={styles.header}>
      <h1>Navbar</h1>

      <nav className={styles.navbar}>
        {navbarLinks.map(({ path, name }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => isActive ? styles.linkActive : ''}
          >
            {name}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
