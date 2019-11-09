import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';

import { Container } from './styles';
import dice from '../../assets/lottie/dice.json';

export default function Loading({ status }) {
  const options = {
    loop: true,
    autoplay: true,
    animationData: dice,
  };

  return status ? (
    <Container>
      <Lottie
        options={options}
        isClickToPauseDisabled={true}
        width={200}
        height={200}
      />
    </Container>
  ) : (
    <></>
  );
}

Loading.propTypes = {
  status: PropTypes.bool,
};
