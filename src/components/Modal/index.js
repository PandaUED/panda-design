/**
 * Created by Liqi on 17/9/27.
 */
import React from 'react';
import { Icon } from 'pand';
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
    animation: true,
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
      },
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
      animation,
    } = this.props;
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

    const ModalBase = (
      <ModalStyled
        className={classnames('xm-mask', maskCls)}
        onClick={e => {
          console.log(e.target);
        }}
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
        <ModalContent className={classnames('xm-mask-content', childrenCls)}>
          {children}
        </ModalContent>
        {closable && (
          <CloseBtn onClick={this.hide} className="xm-mask-close-btn">
            <Icon size={24} type="Close" />
          </CloseBtn>
        )}
      </ModalStyled>
    );
    if (animation) {
      return (
        <CSSTransition
          timeout={400}
          classNames="modal-fade"
          in={this.state.isVisible}
        >
          {status => {
            return (
              <div className={`modal-fade modal-fade-${status}`}>
                {ModalBase}
              </div>
            );
          }}
        </CSSTransition>
      );
    } else {
      return ModalBase; // TODO
    }
  }
}

export { Modal };
