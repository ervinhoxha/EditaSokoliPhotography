import { useState } from 'react';
import styles from './style.module.less';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarWrapper}>
        <div className={styles.logo}>
          <img src="" alt="logo" />
        </div>

        <button
          className={styles.burgerMenu}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`${styles.navbar} ${menuOpen ? styles.navOpen : ''}`}>
          <NavLink
            to="/"
            activeClassName={styles.active}
            onClick={() => setMenuOpen(false)}
          >
            Ballina
          </NavLink>
          <NavLink
            to="/about"
            activeClassName={styles.active}
            onClick={() => setMenuOpen(false)}
          >
            Rreth ne
          </NavLink>
          <NavLink
            to="/portfolio"
            activeClassName={styles.active}
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/testimonials"
            activeClassName={styles.active}
            onClick={() => setMenuOpen(false)}
          >
            Reagimet
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName={styles.active}
            onClick={() => setMenuOpen(false)}
          >
            Kontakti
          </NavLink>
        </div>
      </div>
    </div>
  );
};
