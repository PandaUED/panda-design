/**
 * Author: Ruo
 * Create: 2017-10-07
 * Description: tab标签 内部渲染顺序为:title > children
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { Badge } from 'pand';

const BasicTab = (
  { onClick, index, title, disable = false, className, children, badge, dot, ...rest },
  { activeIndex, handleSync }
) => {
  const handleOnClick = () => {
    if (!disable) {
      onClick instanceof Function && onClick();
      handleSync && handleSync(index);
    }
  };
  let BadgeNode;
  if (badge instanceof React.Component) {
    BadgeNode = badge;
  } else if (typeof badge === 'string') {
    BadgeNode = <Badge dot={dot}>badge</Badge>;
  }
  const activeClass = classNames('tab', className, activeIndex === index ? 'active' : '');
  return (
    <a onClick={handleOnClick} className={activeClass} {...rest}>
      {title}
      {children}
      {BadgeNode}
    </a>
  );
};
BasicTab.contextTypes = {
  handleSync: PropTypes.func,
  activeIndex: PropTypes.number,
};
const descriptionStyleSheet = css``;
export const Tab = styled(BasicTab)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 1;
  width: auto;
  height: 54px;
  min-width: 58px;
  line-height: 16px;
  padding: 16.5px 13.5px;
  text-align: center;
  font-size: 14px;
  //font-weight: 500;
  color: #666;
  cursor: pointer;
  &.active {
    color: ${({ theme }) => theme.activeColor};
    position: relative;
    font-weight: 500;
  }
  & .corner {
    position: absolute;
    transform: translate3d(0em, -11px, 0) scale(0.9);
  }
  & .dot {
    transform: translate3d(3px, -6px, 0) scale(0.9);
  }
`;
