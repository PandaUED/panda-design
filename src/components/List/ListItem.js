import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TouchFeedback from 'rmc-feedback';
import { style } from '../';

const props = {
  split: PropTypes.bool,
  onClick: PropTypes.func,
  padding: PropTypes.bool,
};

const ListItem = ({ children, split = false, onClick, padding, ...other }) => {
  let ListItem = styled.a`
    background: #fff;
    width: 100%;
    font-size: 16px;
    color: #444444;
    line-height: 16px;
    align-items: center;
    box-shadow: inset 0 0 0 0 #f8f8f8;
    ${padding ? 'padding: 16px;' : ''};
  `;
  if (split) {
    ListItem = ListItem.extend`
      margin-bottom: 10px;
      box-shadow: inset 0 0 0 0 #f8f8f8;
      ${style.split.bottom};
    `;
  } else {
    ListItem = ListItem.extend`border-bottom: #f8f8f8 1px solid;`;
  }

  return (
    <TouchFeedback disabled={onClick}>
      <ListItem onClick={onClick} {...other}>
        {children}
      </ListItem>
    </TouchFeedback>
  );
};

ListItem.propTypes = props;

export default ListItem;
