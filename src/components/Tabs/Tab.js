/**
 * Author: Ruo
 * Create: 2017-10-07
 * Description: tab标签 内部渲染顺序为:title > children
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';

const BasicTab = (props, { activeIndex, handleSync }) => {
  const { onClick, index, key, title, className, children, ...rest } = props;
  const handleOnClick = () => {
    onClick instanceof Function && onClick();
    handleSync(index);
  };
  const activeClass = classNames(className, activeIndex === index ? 'active' : '');
  return (
    <a key={key} onClick={handleOnClick} className={activeClass} {...rest}>
      {title && <span>{title}</span>}
      {children}
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
  &.active {
    color: ${({ theme }) => theme.activeColor};
    position: relative;
  }
`;
