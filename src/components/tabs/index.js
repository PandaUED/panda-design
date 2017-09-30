/**
 * Author: Ruo
 * Create: 2017-09-28
 * Description:
 */
import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import { style } from '../';

const singleColorFn = color => style.color[color];

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 3,
    };
  }
  componentDidUpdate() {
    // eslint-disable-next-line
    const container = ReactDOM.findDOMNode(this.instance);
    // scrollIntoView 方法兼容到ie8
    container.querySelector(`:nth-child(${this.state.activeIndex + 1})`).scrollIntoView({
      behavior: 'auto',
    });
  }

  render() {
    const { tabsData, ...other } = this.props;
    const { activeIndex } = this.state;
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
    const Tab = styled(({ key, index, onClick, content, ...rest }) => {
      const handleOnClick = () => {
        onClick instanceof Function && onClick();
        this.setState({ activeIndex: index });
      };
      return (
        <a key={key} onClick={handleOnClick} {...rest}>
          {content}
        </a>
      );
    })`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      flex-grow: 1;
      width: auto;
      min-width: 78px;
      height: 54px;
      line-height: 16px;
      padding: 19px 13.5px;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      color: #666;
      cursor: pointer;
      ${({ index }) => (index === activeIndex ? activeStyleSheet : '')} ${style.text.ellipsis};
    `;
    /**
     * Tab的容器，固定宽度和高度
     */
    const TabContainer = styled.div`
      position: relative;
      width: auto;
      height: 54px;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      text-align: center;
      justify-content: ${tabsData.length > 5 ? 'flex-start' : 'space-around'};
      overflow: ${tabsData.length > 5 ? 'auto' : 'hidden'};
      appearance: none;
      &::-webkit-scrollbar {
        display: none;
      }
    `;
    return (
      <TabContainer ref={i => (this.instance = i)} {...other}>
        {tabsData.map((tabData, index) => <Tab key={index} index={index} {...tabData} />)}
      </TabContainer>
    );
  }
}
export default Tabs;
