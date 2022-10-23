import styled from 'styled-components';

export const FeedbackOptionsWrapper = styled.div``;

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
