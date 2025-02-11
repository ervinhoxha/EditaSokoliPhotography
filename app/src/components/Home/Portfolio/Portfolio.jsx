import { Title } from '../../Title/Title';
import styles from './style.module.less';

export const Portfolio = () => {
  return (
    <div className={styles.portfolioContent}>
      <div className="appwidth">
        <Title title="PORTFOLIO" position="end" />
        <div></div>
      </div>
    </div>
  );
};
