import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../style_index';

const props = {
  split: PropTypes.bool,
};

const CardFooterStyle = styled.div`
  min-height: 44px;
  ${props => !!props.split && 'border-top: 1px solid #f3f3f3'};
`;

const CardFooter = ({ split = false, children, ...other }) => {
  return (
    <CardFooterStyle split={split} {...other}>
      {children}
    </CardFooterStyle>
  );
};

CardFooter.propTypes = props;

export default CardFooter;
