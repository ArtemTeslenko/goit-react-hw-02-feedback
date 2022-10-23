import PropTypes from 'prop-types';
import React from 'react';
import { NotificationText } from './Notification.styled';

function Notification({ message }) {
  return <NotificationText>{message}</NotificationText>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
