/**
 * Author: Ruo
 * Create: 2017-09-28
 * Description:
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { style } from '../';

import { Tab } from './Tab';
import { TabContainer } from './TabContainer';

const singleColorFn = color => style.color[color];
const activeColor = singleColorFn('blue');
const activeStyleSheet = css`
  color: ${activeColor};
  position: relative;
  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: calc(50% - 12px);
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${activeColor};
  }
`;

class Tabs extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex || 0,
    };
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    const container = ReactDOM.findDOMNode(this.instance);
    // scrollIntoView 方法兼容到ie8
    container.querySelector(`:nth-child(${this.state.activeIndex + 1})`)
    .scrollIntoView({ behavior: 'auto', });
  }

  getChildContext() {
    const t = this;
    return {
      handleSync( index ) {t.setState({ activeIndex: index });},
    };
  }

  render() {
    const { tabsData, ...other } = this.props;
    const { activeIndex } = this.state;

    const BasicTab = Tab.extend`
      ${( { index } ) => (index === activeIndex ? activeStyleSheet : '')}
      ${style.text.ellipsis};
    `;
    const BasicTabContainer = TabContainer.extend`
      justify-content: ${tabsData.length > 5 ? 'flex-start' : 'space-around'};
      overflow: ${tabsData.length > 5 ? 'auto' : 'hidden'};
    `;

    return (
      <BasicTabContainer ref={i => (this.instance = i)} {...other}>
        {tabsData.map(( tabData, index ) => (
          <BasicTab key={index} index={index} {...tabData} />
        ))}
      </BasicTabContainer>
    );
  }
}

Tabs.childContextTypes = {
  handleSync: PropTypes.func,
};
export { Tabs, Tab, TabContainer };