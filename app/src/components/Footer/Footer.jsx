import styles from './style.module.less';
import { Menu } from '../Navbar/Menu';
import { RiInstagramLine } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="appwidth">
        <div className={styles.upperFooter}>
          <div>
            <img src="" alt="Logo" />
          </div>
          <div className={styles.footerLinks}>
            <Menu />
          </div>
        </div>

        <hr />

        <div className={styles.bottomFooter}>
          <div className={styles.rights}>
            <p>
              © {new Date().getFullYear()} Edita Sokoli Photography. All rights
              reserved
            </p>
          </div>

          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/editasokoliphotographyy/">
              <RiInstagramLine />
            </a>
            <a href="https://www.facebook.com/editasokoliphotography">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
