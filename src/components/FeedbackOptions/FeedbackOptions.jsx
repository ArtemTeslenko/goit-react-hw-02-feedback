import PropTypes from 'prop-types';
import React from 'react';
import {
  FeedbackOptionsWrapper,
  FeedbackOptionsList,
  FeedbackOptionsItem,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeedbackOptionsWrapper>
      <FeedbackOptionsList>
        {options.map(item => (
          <FeedbackOptionsItem key={item.name}>
            <FeedbackOptionsButton onClick={onLeaveFeedback} name={item.name}>
              {item.value}
            </FeedbackOptionsButton>
          </FeedbackOptionsItem>
        ))}
      </FeedbackOptionsList>
    </FeedbackOptionsWrapper>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
