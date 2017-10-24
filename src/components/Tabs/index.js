/**
 * Author: Ruo
 * Create: 2017-09-28
 * Description: tab 组件，允许通过传数据结构构建 tabs 或者map重载 tab 组件
 * 允许带有active滑条（TabLinkBar）
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import classnames from 'classnames';
import { style } from '../style_index';

import { Tab } from './Tab';

const singleColorFn = color => style.color[color];

const TabLinkBar = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${({ theme }) => theme.activeColor};
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
    width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const EmptyTab = styled.div`
  display: block;
  width: 100%;
  text-align: center;
  padding: 10px;
`;
const ErrorTab = EmptyTab.extend`color: red;`;

const TabContainer = styled.div`
  position: relative;
  width: 100%;
  //height: 54px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-align: center;
  appearance: none;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  &.dot {
  }
`;

class Tabs extends React.Component {
  static defaultProps = {
    linkBar: false,
    titles: [],
    children: [],
    activeIndex: 0,
    activeColor: 'blue',
  };
  static propTypes = {
    linkBar: PropTypes.bool,
    titles: PropTypes.array,
    children: PropTypes.array,
    activeIndex: PropTypes.number,
    activeColor: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex || 0,
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.animation(false);
  }

  componentDidUpdate() {
    this.animation();
  }

  getChildContext() {
    const t = this;
    return {
      handleSync(index) {
        t.context.handleSync && t.context.handleSync(index);
        t.setState({ activeIndex: index });
      },
      activeIndex: t.state.activeIndex,
    };
  }

  /**
   * 可视化动画，如果显示TabLinkBar则也会有动画
   * 使用不优雅的js写css方式实现，暂时不做改进
   * @param {bool} [scrollInto=true] 设置是否加载时就滚动到可见状态
   */
  animation(scrollInto = true) {
    // eslint-disable-next-line
    const container = ReactDOM.findDOMNode(this.instance);
    const activeTab = container.querySelector(`a:nth-child(${this.state.activeIndex + 1})`);
    // scrollIntoView 方法兼容到ie8
    // 使用setTimeout是因为页面加载完后立马smooth动画不会发生
    if (activeTab) {
      if (scrollInto) {
        setTimeout(() => {
          activeTab.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }, 1);
      }
      const tabLinkBar = container.querySelector('.tab-link-bar');
      // tabLinkBar 的动画
      if (tabLinkBar) {
        const tabLinkBarWidth = tabLinkBar.offsetWidth;
        const activeTabWidth = activeTab.offsetWidth;
        const activeTabLeft = activeTab.offsetLeft + (activeTabWidth - tabLinkBarWidth) / 2;
        tabLinkBar.style.transform = `translate3d(${activeTabLeft}px, 0px, 0px)`;
      }
    }
  }

  // 判断是否无tab标签数据
  isEmpty() {
    return this.props.titles.length === 0 && this.props.children.length === 0;
  }

  /**
   * 允许通过两种方式构建tabs，但不能两者同时使用
   * 该方法判断是否两种方式都被使用
   */
  hasError() {
    return this.props.children.length > 0 && this.props.titles.length > 0;
  }

  render() {
    const { titles, children, activeColor, linkBar, className, activeIndex, ...other } = this.props;
    const tabTitles = titles.map((tabData, index) => (
      <Tab key={index} index={index} {...tabData} />
    ));

    const isEmpty = this.isEmpty();
    const hasError = this.hasError();

    return (
      <ThemeProvider theme={{ activeColor: singleColorFn(activeColor) }}>
        <TabContainer className={classnames(className)} ref={i => (this.instance = i)} {...other}>
          {!hasError && !isEmpty && tabTitles}
          {!hasError && !isEmpty && children}

          {!hasError && !isEmpty && linkBar && <TabLinkBar className={'tab-link-bar'} />}

          {hasError && <ErrorTab>Error: Both attribute and embedded data</ErrorTab>}
          {isEmpty && <EmptyTab>None Tab Data</EmptyTab>}
        </TabContainer>
      </ThemeProvider>
    );
  }
}

Tabs.childContextTypes = {
  handleSync: PropTypes.func,
  activeIndex: PropTypes.number,
};
Tabs.contextTypes = {
  handleSync: PropTypes.func,
  activeIndex: PropTypes.number,
};
export { Tabs, Tab, TabContainer, TabLinkBar };
