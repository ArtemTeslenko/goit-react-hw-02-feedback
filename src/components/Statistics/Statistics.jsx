// import PropTypes from 'prop-types';
import React from 'react';
import { StatisticsDataTitle } from './Statistics.styled';

export default function Statistics({ heading }) {
  return (
    <div>
      <StatisticsDataTitle> {heading}</StatisticsDataTitle>
    </div>
  );
}
