/**
 * Created by Liqi on 17/9/27.
 */
import styled from 'styled-components';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { style, Icon } from '../';
import './_modal.scss';

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background: rgba(0, 0, 0, 0.4);
`;
const ModalBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const ModalContent = styled.div`display: inline-block;`;

class ModalNoState extends Component {
  static defaultProps = {
    children: null,
    maskCls: null,
    maskBgCls: null,
    childrenCls: null,
    handleBgClick: null,
  };

  render() {
    const {
      children,
      maskCls,
      maskBgCls,
      childrenCls,
      handleBgClick,
    } = this.props;

    return (
      <ModalStyled className={classnames('xm-mask', maskCls)}>
        <ModalBg
          className={classnames('xm-mask-bg', maskBgCls)}
          onClick={e => {
            console.log('点击bg');
            handleBgClick && handleBgClick(e);
          }}
        />
        <ModalContent className={classnames('xm-mask-content', childrenCls)}>
          {children}
        </ModalContent>
      </ModalStyled>
    );
  }
}

class Modal extends Component {
  static propTypes = {
    // TODO
  };
  static defaultProps = {
    children: null,
    maskClosable: false,
    maskCls: null,
    maskBgCls: null,
    childrenCls: null,
    onClose: null,
  };

  constructor(props) {
    super(props);
    this.hide = this.hide.bind(this);
  }

  state = {
    isVisible: false,
  };

  show() {
    this.setState({
      isVisible: true,
    });
  }

  // hide = () =>  {
  // }
  hide() {
    const { onClose } = this.props;
    this.setState(
      {
        isVisible: false,
      },
      () => {
        // console.log(46+": onClose");
        onClose && onClose();
      }
    );
  }

  render() {
    const {
      maskClosable,
      closable,
      children,
      maskCls,
      maskBgCls,
      childrenCls,
    } = this.props;

    const CloseBtn = styled.div`
      height: 48px;
      width: 48px;
      border-radius: 50%;
      background: #999999;
      color: #fff;
      line-height: 48px;
      font-size: 24px;
      ${style.mixins.xmFlexCenter('column')};
      position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
}
    `;

    return (
      <CSSTransition
        timeout={400}
        classNames="modal-fade"
        in={this.state.isVisible}
      >
        {status => {
          return (
            <div className={`modal-fade modal-fade-${status}`}>
              <ModalStyled
                className={classnames('xm-mask', maskCls)}
                ref={c => {
                  this.refMask = c;
                }}
              >
                <ModalBg
                  className={classnames('xm-mask-bg', maskBgCls)}
                  onClick={() => {
                    console.log('点击bg');
                    if (maskClosable) {
                      this.hide();
                    }
                  }}
                />
                <ModalContent
                  className={classnames('xm-mask-content', childrenCls)}
                >
                  {children}
                </ModalContent>
                {closable && (
                  <CloseBtn onClick={this.hide} className="xm-mask-close-btn">
                    <Icon size={24} type="Close" />
                  </CloseBtn>
                )}
              </ModalStyled>
            </div>
          );
        }}
      </CSSTransition>
    );
  }
}

export { Modal, ModalNoState };
