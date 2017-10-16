/**
 * Author: Ruo
 * Create: 2017-09-28
 * Description: 底部导航
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'pand';
import classnames from 'classnames';
import { css, ThemeProvider } from 'styled-components';
import { style } from '../';

// 基本配置
const singleColorFn = color => style.color[color];
const gradientColorFn = (color, deg) => style.gradient[color](deg);
const singleColor = singleColorFn('orange');
const gradientColor = gradientColorFn('orange', -45);
// icon模式样式
const iconStyleSheet = css`
  flex-direction: column-reverse;
  padding: 6px 13.5px 0;
  line-height: 20px;
  font-size: 10px;
  font-weight: 400;
`;
// buttonGroup 模式样式
const buttonGroupStyleSheet = css``;
// ButtonGroup模式下 彩色（高亮）背景样式
const highlightStyleSheet = css`
  background: ${gradientColor};
  color: #fff;
  &.active {
    color: #fff;
  }
`;
// 基本样式
const TabWarpper = Tab.extend`
  position: relative;
  ${({ theme }) => (theme.hasIcon ? iconStyleSheet : '')};
  color: #bbbfc8;
  &.active {
    color: ${singleColor};
    .xmjkDoubleIcon span:nth-child(1) {
      background: ${gradientColor};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .xmjkDoubleIcon span:nth-child(2) {
      color: #fff;
      opacity: 0.5;
    }
  }
  ${({ theme }) => (theme.highlight ? highlightStyleSheet : '')};
`;
const TabBarTab = (
  { index, title, icon, buttonGroup = false, highlight = false, ...other },
  { activeIndex }
) => {
  const hasIcon = icon && icon.selected && icon.common;
  return (
    <ThemeProvider theme={{ buttonGroup, highlight, hasIcon }}>
      <TabWarpper index={index} title={title} {...other}>
        {hasIcon && (activeIndex === index ? icon.selected : icon.common)}
      </TabWarpper>
    </ThemeProvider>
  );
};
TabBarTab.contextTypes = {
  activeIndex: PropTypes.number,
};

class TabBar extends React.Component {
  static propTypes = {
    tabsData: PropTypes.array,
    buttonGroup: PropTypes.bool,
  };
  static defaultPorps = {
    tabsData: [],
    buttonGroup: false,
  };

  render() {
    const { tabsData, buttonGroup, ...other } = this.props;
    const groupLength = buttonGroup ? tabsData.length : 0;
    return (
      <Tabs {...other} style={buttonGroup ? { padding: 0 } : {}}>
        {tabsData.map((tabData, index) => {
          return <TabBarTab key={index} index={index} buttonGroup={buttonGroup} {...tabData} />;
        })}
      </Tabs>
    );
  }
}

export { TabBar };
