import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../style_index';

const props = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  marginLeft: PropTypes.number,
};

const CellLeft = ({ className, size = 14, color, children, marginLeft = 0, ...other }) => {
  const CellLeft = styled.div`
    display: flex;
    align-items: center;
    font-size: ${size}px;
    margin-left: ${marginLeft}px;
    ${color ? `color: ${color};` : `color: ${style.color.textLight};`};
    .xmjkIcon {
      margin-right: 6px;
    }
  `;

  return (
    <CellLeft className={className} {...other}>
      {children}
    </CellLeft>
  );
};

CellLeft.propTypes = props;

export default CellLeft;
