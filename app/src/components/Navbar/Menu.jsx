import { NavLink } from 'react-router-dom';
import styles from './style.module.less';

export const Menu = (handleMenuOpen) => {
  return (
    <>
      <NavLink to="/" activeclassname={styles.active} onClick={handleMenuOpen}>
        Ballina
      </NavLink>
      <NavLink
        to="/about"
        activeclassname={styles.active}
        onClick={handleMenuOpen}
      >
        Rreth ne
      </NavLink>
      <NavLink
        to="/portfolio"
        activeclassname={styles.active}
        onClick={handleMenuOpen}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/testimonials"
        activeclassname={styles.active}
        onClick={handleMenuOpen}
      >
        Reagimet
      </NavLink>
      <NavLink
        to="/contact"
        activeclassname={styles.active}
        onClick={handleMenuOpen}
      >
        Kontakti
      </NavLink>
    </>
  );
};
