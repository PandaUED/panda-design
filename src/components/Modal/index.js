/**
 * Created by Liqi on 17/9/27.
 */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { style } from '../';
import './_modal.scss';

class Modal extends React.Component {
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
    const ModalStyled = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: auto;
      background: rgba(0, 0, 0, 0.4);
      ${style.mixins.xmFlexCenter('column')};
    `;
    const ModalBg = styled.div`
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
    `;
    const CloseBtn = styled.div`
      height: 48px;
      width: 48px;
      border-radius: 50%;
      background: #999999;
      color: #fff;
      line-height: 48px;
      margin: 60px auto 20px;
      font-size: 24px;
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
                <div className={classnames('xm-mask-content', childrenCls)}>
                  {children}
                  {closable && <CloseBtn onClick={this.hide}>X</CloseBtn>}
                </div>
              </ModalStyled>
            </div>
          );
        }}
      </CSSTransition>
    );
  }
}

export { Modal };
