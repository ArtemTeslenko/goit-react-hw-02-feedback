import PropTypes from 'prop-types';
import React from 'react';
import { SectionWrapper, SectionTitle } from './Section.styled';

function Section({ title, children }) {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
