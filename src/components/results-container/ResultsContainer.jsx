import NumberResult from '../number-result/NumberResult';
import styles from './resultsContainer.module.css';

const ResultsContainer = () => {
  return (
    <div className={styles.resultsContainer}>
      <h2 className={styles.title}>Your Result</h2>
      <NumberResult />
      <div className={styles.subtitleContainer}>
        <span className={styles.subtitleTitle}>Great</span>
        <span className={styles.subtitleText}>
          Your performance exceed 65% of the people conducting the test here!
        </span>
      </div>
    </div>
  );
};

export default ResultsContainer;
