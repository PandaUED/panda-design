/**
 * Author: Ruo
 * Create: 2017-09-28
 * Description:
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Tab, TabContainer } from 'pand';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

import { style } from '../';

// 基本配置
const singleColorFn = color => style.color[color];
const gradientColorFn = (color, deg) => style.gradient[color](deg);

const activeColor = singleColorFn('orange');
const gradientColor = gradientColorFn('orange', -45);
// 基本样式
const activeStyleSheet = css`
  color: ${activeColor};
  position: relative;
  .xmjkDoubleIcon:nth-child(1) {
    color: ${darken(0.18, activeColor)};
  }
  .xmjkDoubleIcon:nth-child(2) {
    color: ${activeColor};
  }
`;
const highLightButton = css`
  background: ${gradientColor};
  color: #fff;
`;
// 模式0，四列等宽
const commonMode = css`
  flex-direction: column;
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
  padding: 25px 13.5px 20px;
`;
// 模式2，两列不等宽
const notiseMode = css`
  // information
  &:nth-child(1) {
    position: relative;
    width: 255px;
    font-size: 10px;
    font-weight: 400;
    color: #333;
    // icon
    & > span:nth-child(1) {
      position: absolute;
      right: 16px;
      .xmjkDoubleIcon:nth-child(1) {
        color: ${lighten(0.38, '#333')};
      }
      .xmjkDoubleIcon:nth-child(2) {
        color: ${lighten(0.58, '#333')};
      }
    }
    // title
    & > span:nth-child(2),
    & > span:nth-child(3) {
      position: absolute;
      font-size: 12px;
      font-weight: 500;
      color: #bbbfc8;
    }
    & > span:nth-child(2) {
      left: 16px;
      top: 9px;
    }
    // content
    & > span:nth-child(3) {
      left: 16px;
      bottom: 7px;
    }
  }
  &:nth-child(2) {
    font-size: 16px;
    width: 120px;
    ${highLightButton};
  }
`;
// 模式2，两列等宽
const cancelConfirmMode = css`
  font-size: 16px;
  &:nth-child(2) {
    ${highLightButton};
  }
`;
// 模式3，三列，右侧宽度大
const toolMode = css`
  font-size: 16px;
  &:nth-child(1),
  &:nth-child(2) {
    ${commonMode};
  }
  &:nth-child(3) {
    width: 247px;
    ${highLightButton};
  }
`;

class TabBar extends React.Component {
  static propTypes = {
    mode: PropTypes.number,
  };
  static defaultProps = {
    /**
     * 0/4 - common:4列等比宽布局                  |     |     |     |     |
     * 2 - cancelConfirm:两列等比布局              |           |           |
     *   - confirm:若第二个元素有title子元素        |                 |     |
     * 3 - tool：三个元素                          |     |     |           |
     */
    mode: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex || 0,
    };
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    const container = ReactDOM.findDOMNode(this.instance);
    // scrollIntoView 方法兼容到ie8
    container
      .querySelector(`:nth-child(${this.state.activeIndex + 1})`)
      .scrollIntoView({
        behavior: 'auto',
      });
  }

  getChildContext() {
    const t = this;
    return {
      handleSync(index) {
        t.setState({ activeIndex: index });
      },
    };
  }

  render() {
    const { tabsData, mode, ...other } = this.props;
    const { activeIndex } = this.state;
    const BasicTab = Tab.extend`
      & > .xmjkIcon {
        display: block;
      }
      ${mode === 0 || mode === 4 ? commonMode : ''} ${mode === 2
          ? tabsData[0].icon ? notiseMode : cancelConfirmMode
          : ''} ${mode === 3 ? toolMode : ''} ${({ index }) =>
          index === activeIndex ? activeStyleSheet : ''} ${style.text.ellipsis};
    `;
    const BasicTabContainer = TabContainer.extend`
      justify-content: ${tabsData.length > 5 ? 'flex-start' : 'space-around'};
      overflow: ${tabsData.length > 5 ? 'auto' : 'hidden'};
    `;

    return (
      <BasicTabContainer ref={i => (this.instance = i)} {...other}>
        {tabsData
          .slice(0, 4)
          .map((tabData, index) => (
            <BasicTab key={index} index={index} {...tabData} />
          ))}
      </BasicTabContainer>
    );
  }
}

TabBar.childContextTypes = {
  handleSync: PropTypes.func,
};
export { TabBar };
