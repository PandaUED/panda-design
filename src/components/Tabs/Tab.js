/**
 * Author: Ruo
 * Create: 2017-10-07
 * Description:
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { Icon } from 'pand';

const BasicTab = ( props, context ) => {
  const { onClick, index, key, title, content, icon, className, ...rest } = props;
  const { activeIndex } = context;
  const handleOnClick = () => {
    onClick instanceof Function && onClick();
    context.handleSync(index);
  };
  const activeClass = classNames(className, activeIndex === index ? 'active' : '');
  return (
    <a key={key} onClick={handleOnClick} className={activeClass} {...rest} >
      {icon && <Icon {...icon} />}
      {title && <span>{title}</span>}
      <span>{content}</span>
    </a>
  );
};
BasicTab.contextTypes = {
  handleSync: PropTypes.func,
  activeIndex: PropTypes.number,
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
  transition: color .15s ease-in-out;
  &.active {
    color: ${( { theme } ) => theme.activeColor};
    position: relative;
  }
`;