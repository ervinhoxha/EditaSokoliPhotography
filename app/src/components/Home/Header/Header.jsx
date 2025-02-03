import { SocialMedia } from '../../SocilaMedia/SocialMedia';
import styles from './style.module.less';

export const Header = () => {
  const handlePortfolio = () => {};

  return (
    <div className={styles.header}>
      <div className="appwidth">
        <div className={styles.headerContent}>
          <div>
            <h1>HELLO!</h1>
          </div>

          <div className={styles.headerText}>
            <p>I AM PROFFESSIONAL PHOTOGRAPHER,</p>
            <p>IMMORTALIZING YOUR STORIES THROUGH THE LENS</p>

            <div>
              <button onClick={handlePortfolio}>MY WORK</button>
            </div>
          </div>

          <div className={styles.social}>
            <SocialMedia />
          </div>
        </div>

        <div>{/* image */}</div>
      </div>
    </div>
  );
};
