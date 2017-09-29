import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TouchFeedback from 'rmc-feedback';
import { style } from '../';

const props = {
  margin: PropTypes.bool,
  onClick: PropTypes.func,
};

const ListItem = ({ children, margin = false, onClick, ...other }) => {
  let ListItem = styled.a`
    background: #fff;
    width: 100%;
    font-size: 16px;
    color: #444444;
    line-height: 16px;
    align-items: center;
    padding: 16px;
    box-shadow: inset 0 0 0 0 #f8f8f8;
  `;
  if (margin) {
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
