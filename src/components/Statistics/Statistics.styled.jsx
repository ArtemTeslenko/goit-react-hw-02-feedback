import styled from 'styled-components';

export const StatisticsWrapper = styled.div``;

export const StatisticsDataTitle = styled.h1`
  margin-bottom: 15px;
  font-size: 24px;
`;

export const StatisticsDataList = styled.ul``;

export const StatisticsDataItem = styled.li`
  font-size: 18px;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  & span {
    margin-left: 5px;
  }
`;
