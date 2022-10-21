import PropTypes from 'prop-types';
import React from 'react';
import {
  FeedbackFieldWrapper,
  FeedbackFieldElement,
  FeedbackOptionsButton,
  FeedbackOptionsItem,
  FeedbackOptionsList,
  StatisticsDataTitle,
  StatisticsDataList,
  StatisticsDataItem,
  StatisticsTotal,
} from './FeedbackField.styled';

class FeedbackField extends React.Component {
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
        <StatisticsDataTitle>Statistics</StatisticsDataTitle>
        <StatisticsDataList>
          {feedbackOptions.map(item => {
            return (
              <StatisticsDataItem key={item.name}>
                {item.value}: <span>{this.state[item.name]}</span>
              </StatisticsDataItem>
            );
          })}
        </StatisticsDataList>
        <StatisticsTotal>
          Total: <span>{this.countTotalFeedback()}</span>
        </StatisticsTotal>
        <StatisticsTotal>
          Positive feedback:{' '}
          <span>{this.countPositiveFeedbackPercentage()}%</span>
        </StatisticsTotal>
      </FeedbackFieldWrapper>
    );
  }
}

export default FeedbackField;

FeedbackField.propTypes = {
  test: PropTypes.string,
  feedbackOptions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};
