import PropTypes from 'prop-types';
import React from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import { StatisticsTitle } from '../Statistics/Statistics.styled';

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
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    const { feedbackOptions } = this.props;
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={this.handleIncrement}
        ></FeedbackOptions>
        <StatisticsTitle>Statistics</StatisticsTitle>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
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
