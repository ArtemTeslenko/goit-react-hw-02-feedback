import PropTypes from 'prop-types';
import React from 'react';
import {
  FeedbackFieldElement,
  FeedbackOptionsButton,
  FeedbackOptionsItem,
  FeedbackOptionsList,
} from './FeedbackField.styled';

export default function FeedbackField({ text, feedbackOptions }) {
  return (
    <div>
      <FeedbackFieldElement>{text}</FeedbackFieldElement>
      <FeedbackOptionsList>
        {feedbackOptions.map(item => {
          return (
            <FeedbackOptionsItem key={item.name}>
              <FeedbackOptionsButton>{item.value}</FeedbackOptionsButton>
            </FeedbackOptionsItem>
          );
        })}
      </FeedbackOptionsList>
    </div>
  );
}

FeedbackField.propTypes = {
  test: PropTypes.string,
  feedbackOptions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};
