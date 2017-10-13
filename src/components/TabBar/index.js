/**
 * Author: Ruo
 * Create: 2017-09-28
 * Description: 底部导航
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'pand';

import { style } from '../';

// 基本配置
const gradientColorFn = (color, deg) => style.gradient[color](deg);
const gradientColor = gradientColorFn('orange', -45);
// 基本样式
const TabWarpper = Tab.extend`
  position: relative;
  flex-direction: column-reverse;
  padding: 6px 13.5px 0;
  height: 20px;
  line-height: 20px;
  font-size: 10px;
  font-weight: 400;
  color: #bbbfc8;
  &.active {
    color: #ff6700;
    .xmjkDoubleIcon:nth-child(1) {
      background: ${gradientColor};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .xmjkDoubleIcon:nth-child(2) {
      color: #fff;
      opacity: 0.5;
    }
  }
`;
const TabBarTab = ({ index, title, icon }, { activeIndex }) => {
  return (
    <TabWarpper index={index} title={title}>
      {activeIndex === index ? icon.selected : icon.common}
    </TabWarpper>
  );
};
TabBarTab.contextTypes = {
  activeIndex: PropTypes.number,
};

class TabBar extends React.Component {
  static defaultProps = {
    tabsData: [],
    activeIndex: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex || 0,
    };
  }

  render() {
    const { tabsData, ...other } = this.props;
    return (
      <Tabs {...other}>
        {tabsData.map((tabData, index) => {
          return <TabBarTab key={index} index={index} {...tabData} />;
        })}
      </Tabs>
    );
  }
}

export { TabBar };
