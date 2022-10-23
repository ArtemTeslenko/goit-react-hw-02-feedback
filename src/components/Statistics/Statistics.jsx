import PropTypes from 'prop-types';
import React from 'react';
import { StatisticsWrapper, StatisticsUnitInfo } from './Statistics.styled';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <StatisticsWrapper>
      <StatisticsUnitInfo>Good: {good}</StatisticsUnitInfo>
      <StatisticsUnitInfo>Neutral: {neutral}</StatisticsUnitInfo>
      <StatisticsUnitInfo>Bad: {bad}</StatisticsUnitInfo>
      <StatisticsUnitInfo>Total: {total}</StatisticsUnitInfo>
      <StatisticsUnitInfo>
        Positive feedback: {positivePercentage}%
      </StatisticsUnitInfo>
    </StatisticsWrapper>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
