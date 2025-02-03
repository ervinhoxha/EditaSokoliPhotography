import styles from './style.module.less';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramLine } from 'react-icons/ri';

export const SocialMedia = () => {
  return (
    <div className={styles.socialMedia}>
      <a href="https://www.instagram.com/editasokoliphotographyy/">
        <RiInstagramLine />
      </a>
      <a href="https://www.facebook.com/editasokoliphotography">
        <FaFacebook />
      </a>
    </div>
  );
};
