import { useState } from 'react';
import styles from './style.module.less';
import { FiMenu, FiX } from 'react-icons/fi';
import { Menu } from './Menu';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(false);
  };

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
          <Menu handleMenuOpen={handleMenuOpen} />
        </div>
      </div>
    </div>
  );
};
