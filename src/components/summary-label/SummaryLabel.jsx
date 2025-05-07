import styles from './summaryLabel.module.css';

const SummaryLabel = ({ title, img, puntuation, color }) => {
  const labelTitleClass = `${styles.labelTitle}}`;
  const containerClass = `${styles[color]}`;

  return (
    <div className={containerClass}>
      <img src={img} className={styles.imgContainer} />
      <h3 className={styles.labelTitle}>{title}</h3>
      <span className='puntuation-text'>{puntuation}/ 100</span>
    </div>
  );
};

export default SummaryLabel;
