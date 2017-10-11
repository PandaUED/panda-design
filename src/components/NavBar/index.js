import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

function getScrollDom(selector = '.scroll') {
  const scrollDom = document.querySelector(selector);
  // 有一种可能，该dom元素还未渲染出来，这里抛异常，方便找问题
  if (!scrollDom) {
    throw new Error(`can not get scrollDom from "${selector}"`);
  }
  return scrollDom;
}

const defaultTitle = <div style={{ margin: '0 auto' }}>熊猫金库</div>;

class NavBar extends Component {
  static defaultProps = {
    mode: NAVBAR_MODE.WHITE,
    leftView: <div>返回</div>,
    rightView: <div>设置</div>,
    titleView: defaultTitle,
    scrollDom: '.scroll',
  };

  componentWillMount() {
    this.setState({
      mode: this.props.mode,
    });
  }

  componentDidMount() {
    const { scrollDom } = this.props;
    if (scrollDom) {
      setTimeout(() => {
        this.$scrollDom = getScrollDom(scrollDom).on('scroll', this.handleScroll);
        // 主动调用一次scroll事件以便更新navbar
        this.$scrollDom.trigger('scroll');
      }, 100);
    }
  }

  $scrollDom = null;

  hanleScroll() {}

  render() {
    let NavBG = styled.div`
      display: flex;
      width: 100%;
      height: 44px;
      line-height: 44px;
      position: fixed;
      top: 0;
    `;
    if (this.props.mode === NAVBAR_MODE.WHITE) {
      NavBG = NavBG.extend`background: #fff;`;
    } else {
      NavBG = NavBG.extend`background: transparent !important;`;
    }

    const NavItem = styled.div`
      flex: 1;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
    `;
    return (
      <NavBG>
        <NavItem>{this.props.leftView}</NavItem>
        <NavItem>{this.props.titleView}</NavItem>
        <NavItem>{this.props.rightView}</NavItem>
      </NavBG>
    );
  }
}

NavBar.propTypes = props;

export { NavBar, NAVBAR_MODE };
