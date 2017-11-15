import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../style_index';

const props = {
  split: PropTypes.bool,
};

const CardFooterStyle = styled.div`min-height: 44px;`;

const CardFooter = ({ split = false, children, ...other }) => {
  let CardFooterStyleExtend = CardFooterStyle;
  if (split) {
    CardFooterStyleExtend = CardFooterStyle.extend`border-top: 1px solid ${style.color.split};`;
  }
  return <CardFooterStyleExtend {...other}>{children}</CardFooterStyleExtend>;
};

CardFooter.propTypes = props;

export default CardFooter;
