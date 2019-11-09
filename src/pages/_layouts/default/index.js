import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Logo, Container } from './styles';
import logo from '../../../assets/logo.png';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Logo src={logo} alt="Naruto" />
      <Container>{children}</Container>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
