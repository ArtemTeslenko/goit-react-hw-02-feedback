import styled from 'styled-components';

export const FeedbackFieldWrapper = styled.div``;

export const FeedbackFieldElement = styled.p`
  margin-bottom: 10px;
  font-size: 24px;
`;

export const FeedbackOptionsList = styled.ul`
  display: flex;
  margin-bottom: 10px;
`;

export const FeedbackOptionsItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const FeedbackOptionsButton = styled.button`
  min-width: 70px;
  min-height: 25px;
  padding: 5px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #4194e7;
    color: #ffffff;
  }
`;

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
