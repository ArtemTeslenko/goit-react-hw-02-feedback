import FeedbackField from './FeedbackField/FeedbackField';
import feedbackOptions from '../Utils/feedbackOptions.json';

export const App = () => {
  return (
    <div className="mainContainer">
      <FeedbackField feedbackOptions={feedbackOptions} />
    </div>
  );
};
