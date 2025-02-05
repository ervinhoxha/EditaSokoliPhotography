import { About } from './About/About';
import { Header } from './Header/Header';
import styles from './style.module.less';

export const Home = () => {
  return (
    <div className={styles.homepage}>
      <div>
        <Header />
        <About />
      </div>
    </div>
  );
};
