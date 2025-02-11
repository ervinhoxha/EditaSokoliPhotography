import { About } from './About/About';
import { Header } from './Header/Header';
import { Portfolio } from './Portfolio/Portfolio';
import styles from './style.module.less';

export const Home = () => {
  return (
    <div className={styles.homepage}>
      <div>
        <Header />
        <About />
        <Portfolio />
      </div>
    </div>
  );
};
