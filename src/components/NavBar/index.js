import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../Icon/index';

// 导航栏，只有两种样式，透明滑下去变白，和一直白
// 只含有最简单的样式，跟客户端之间的交互等放在应用层实现

const NAVBAR_MODE = {
  WHITE: 'white',
  TRANS: 'transport',
};
const props = {
  mode: PropTypes.oneOf(['white', 'transport']),
  leftView: PropTypes.object,
  titleView: PropTypes.object,
  rightView: PropTypes.object,

  scrollDom: PropTypes.string,
};

class NavBar extends Component {
  static defaultProps = {
    mode: NAVBAR_MODE.WHITE,
    leftView: <Icon size={24} type={'Back'} />,
    rightView: null,
    titleView: null,
    scrollDom: '.scroll',
  };
  render() {
    let NavBG = styled.div`
      display: flex;
      width: 100%;
      height: 44px;
      line-height: 44px;
      position: fixed;
      top: 0;
      z-index: 1;
    `;
    if (this.props.mode === NAVBAR_MODE.WHITE) {
      NavBG = NavBG.extend`background: #fff;`;
    } else {
      NavBG = NavBG.extend`
        background: transparent !important;
        color: white;
      `;
    }

    const NavItem = styled.div`
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
    `;
    const LeftItem = NavItem.extend`
      left: 16px;
      text-align: left;
      position: absolute;
    `;
    const RightItem = NavItem.extend`
      right: 16px;
      text-align: right;
      position: absolute;
    `;

    return (
      <NavBG>
        <LeftItem>{this.props.leftView}</LeftItem>
        <NavItem>{this.props.titleView}</NavItem>
        <RightItem>{this.props.rightView}</RightItem>
      </NavBG>
    );
  }
}

NavBar.propTypes = props;

export { NavBar, NAVBAR_MODE };
