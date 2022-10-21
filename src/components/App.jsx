import FeedbackField from './FeedbackField/FeedbackField';
import feedbackOptions from '../Utils/feedbackOptions.json';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div className="mainContainer">
      <FeedbackField
        text="Please leave feedback"
        feedbackOptions={feedbackOptions}
      />
      <Statistics heading="Statistics" options={feedbackOptions} />
    </div>
  );
};
