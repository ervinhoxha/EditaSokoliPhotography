import styles from './style.module.less';

export const Title = ({ title, position = 'start' }) => {
  return (
    <div
      className={styles.sectionTitle}
      style={{ justifyContent: `${position}` }}
    >
      <h1>
        {title}
        <div></div>
      </h1>
    </div>
  );
};
