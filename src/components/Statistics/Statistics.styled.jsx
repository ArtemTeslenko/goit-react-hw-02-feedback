import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  & p:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const StatisticsTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 24px;
`;

export const StatisticsUnitInfo = styled.p`
  font-size: 18px;
  & span {
    margin-left: 5px;
  }
`;
