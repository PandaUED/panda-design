/**
 * Author: Ruo
 * Create: 2017-10-16
 * Description:
 */
import React from 'react';
import PropTypes from 'prop-types';
// import { View } from 'pand';
import styled from 'styled-components';
import classNames from 'classnames';

const BasicTabContent = ({ index, children, className, ...other }, { activeIndex }) => {
  return (
    <div
      className={classNames('tab-content', className, activeIndex === index ? 'active' : '')}
      {...other}
    >
      {children}
    </div>
  );
};
BasicTabContent.contextTypes = {
  activeIndex: PropTypes.number,
};
const TabContent = styled(BasicTabContent)`
  display: none;
  width: 100%;
  flex-grow: 1;
  &.active {
    display: block;
  }
  & > * {
    height: 100%;
  }
`;
export { TabContent };
