import PropTypes from 'prop-types';
import React from 'react';
import {
  FeedbackFieldWrapper,
  FeedbackFieldElement,
  FeedbackOptionsButton,
  FeedbackOptionsItem,
  FeedbackOptionsList,
} from './Feedback.styled';
import Statistics from '../Statistics/Statistics';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const target = e.target.name;
    this.setState(previous => ({ [target]: previous[target] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    const check = this.countTotalFeedback();
    if (check) {
      return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  };

  render() {
    const { feedbackOptions } = this.props;
    const { good, neutral, bad } = this.state;
    return (
      <FeedbackFieldWrapper>
        <FeedbackFieldElement>Please leave feedback</FeedbackFieldElement>
        <FeedbackOptionsList>
          {feedbackOptions.map(item => {
            return (
              <FeedbackOptionsItem key={item.name}>
                <FeedbackOptionsButton
                  type="button"
                  name={item.name}
                  onClick={this.handleIncrement}
                >
                  {item.value}
                </FeedbackOptionsButton>
              </FeedbackOptionsItem>
            );
          })}
        </FeedbackOptionsList>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </FeedbackFieldWrapper>
    );
  }
}

export default Feedback;

Feedback.propTypes = {
  test: PropTypes.string,
  feedbackOptions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};
