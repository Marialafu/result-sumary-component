import { v4 } from 'uuid';
import SummaryLabel from '../summary-label/SummaryLabel';
import { SUMMARY_INFO } from '../../constants/summaryLabel';

const SummaryContainer = () => {
  return (
    <div>
      <h2>Summary</h2>
      {SUMMARY_INFO.map(summaryLabel => (
        <SummaryLabel key={v4()} {...summaryLabel} />
      ))}
      <button>Continue</button>
    </div>
  );
};
export default SummaryContainer;
