import styles from './style.module.less';

export const Title = ({ title }) => {
  return (
    <div className={styles.sectionTitle}>
      <h1>
        {title}
        <div></div>
      </h1>
    </div>
  );
};
