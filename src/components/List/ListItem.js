import styled, { css } from 'styled-components';
import TouchFeedback from 'rmc-feedback';
import PropTypes from 'prop-types';
import { style } from '../style_index';
import React from 'react';

const props = {
  className: PropTypes.string,
  split: PropTypes.bool,
  onClick: PropTypes.func,
  padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  border: PropTypes.bool,
};

const ListItem = ({
  className,
  children,
  split = false,
  onClick,
  border,
  padding = false,
  ...other
}) => {
  const splitItem = css`
    margin-bottom: 10px;
    ${style.split.bottom};
  `;
  const ListItem = styled.div`
    background: ${style.color.white};
    width: 100%;
    font-size: 16px;
    color: ${style.color.textDark};
    line-height: 16px;
    align-items: center;
    box-shadow: inset 0 -0.5px 0 0 ${style.color.bgPage};
    ${padding ? `padding: 16px ${padding}px;` : 'padding: 0;'};
    ${padding && `padding: 16px ${padding}px;`};
    ${padding && padding === true && 'padding: 16px 0;'};
    ${split && splitItem};
  `;

  return (
    <TouchFeedback>
      <ListItem onClick={onClick} className={className} {...other}>
        {children}
      </ListItem>
    </TouchFeedback>
  );
};

ListItem.propTypes = props;

export default ListItem;
