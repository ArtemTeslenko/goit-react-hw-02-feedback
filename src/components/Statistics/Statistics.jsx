import PropTypes from 'prop-types';
import React from 'react';
import {
  StatisticsWrapper,
  StatisticsDataTitle,
  StatisticsDataList,
  StatisticsDataItem,
} from './Statistics.styled';

export default function Statistics({ heading, options }) {
  return (
    <StatisticsWrapper>
      <StatisticsDataTitle> {heading}</StatisticsDataTitle>
      <StatisticsDataList>
        {options.map(({ name, value }) => (
          <StatisticsDataItem key={name}>
            {value}:<span>0</span>
          </StatisticsDataItem>
        ))}
      </StatisticsDataList>
    </StatisticsWrapper>
  );
}

Statistics.propTypes = {
  heading: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};
