import PropTypes from 'prop-types';
import React from 'react';
import {
  FeedbackFieldWrapper,
  FeedbackFieldElement,
  FeedbackOptionsButton,
  FeedbackOptionsItem,
  FeedbackOptionsList,
} from './FeedbackField.styled';

class FeedbackField extends React.Component {
  state = {
    text: this.props.text,
    feedbackOptions: this.props.feedbackOptions,
  };

  render() {
    const { feedbackOptions, text } = this.state;
    return (
      <FeedbackFieldWrapper>
        <FeedbackFieldElement>{text}</FeedbackFieldElement>
        <FeedbackOptionsList>
          {feedbackOptions.map(item => {
            return (
              <FeedbackOptionsItem key={item.name}>
                <FeedbackOptionsButton
                  type="button"
                  onClick={() => console.log('click')}
                >
                  {item.value}
                </FeedbackOptionsButton>
              </FeedbackOptionsItem>
            );
          })}
        </FeedbackOptionsList>
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
