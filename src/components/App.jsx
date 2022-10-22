import Feedback from './Feedback/Feedback';
import feedbackOptions from '../Utils/feedbackOptions.json';

export const App = () => {
  return (
    <div className="mainContainer">
      <Feedback feedbackOptions={feedbackOptions} />
    </div>
  );
};
