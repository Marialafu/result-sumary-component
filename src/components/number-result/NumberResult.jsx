import styles from './NumberResults.module.css';

const NumberResult = () => {
  return (
    <div className={styles.numberResultContainer}>
      <span className={styles.puntuation}>76</span>
      <span className={styles.hundred}>of 100</span>
    </div>
  );
};
export default NumberResult;
