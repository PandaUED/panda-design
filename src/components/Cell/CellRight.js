import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../style_index';

const props = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  right: PropTypes.number,
};

const CellRight = ({ className, size = 13, color, right, children, ...other }) => {
  const CellRight = styled.div`
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: ${size}px;
    text-align: end;
    ${color ? `color: ${color};` : `color: ${style.color.textNormal};`};
    ${right && `right: ${right}px`};
    ${!right && 'margin-left: 10px'};
    position: ${right ? 'absolute' : 'inherit'};
    .xmjkIcon {
      margin-left: 6px;
    }
  `;

  return (
    <CellRight className={className} {...other}>
      {children}
    </CellRight>
  );
};

CellRight.propTypes = props;

export default CellRight;
