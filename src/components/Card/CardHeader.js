import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../style_index';

const props = {
  split: PropTypes.bool,
};

const CardHeaderStyle = styled.div`
  background: #fff;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-weight: 600;
  ${style.text.ellipsis};
  ${props => !!props.split && style.split.bottom};
`;

const CardHeader = ({ split = false, children, ...other }) => {
  return (
    <CardHeaderStyle split={split} {...other}>
      {children}
    </CardHeaderStyle>
  );
};

CardHeader.propTypes = props;

export default CardHeader;
