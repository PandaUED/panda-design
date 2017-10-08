/**
 * Author: Ruo
 * Create: 2017-10-07
 * Description:
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'pand';

const BasicTab = (props, context) => {
  const handleOnClick = () => {
    const { onClick, index } = props;
    onClick instanceof Function && onClick();
    context.handleSync(index);
  };
  const { key, title, content, icon, ...rest } = props;
  return (
    <a key={key} onClick={handleOnClick} {...rest}>
      {icon && <Icon {...icon} />}
      {title && <span>{title}</span>}
      <span>{content}</span>
    </a>
  );
};
BasicTab.contextTypes = {
  handleSync: PropTypes.func,
};
export const Tab = styled(BasicTab)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 1;
  width: auto;
  min-width: 58px;
  height: 54px;
  line-height: 16px;
  padding: 19px 13.5px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
`;
