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

const ModalStyles = {
  ModalStyled: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    background: rgba(0, 0, 0, 0.4);
  `,
  ModalBg: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  `,
  ModalContent: styled.div`display: inline-block;`,

  CloseBtn: styled.div`
    height: 48px;
    width: 48px;
    border-radius: 50%;
    background: #999;
    color: #fff;
    line-height: 48px;
    font-size: 24px;
    ${style.mixins.xmFlexCenter('column')};
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
  `,
};

class Modal extends Component {
  static propTypes = {
    // TODO
  };
  static defaultProps = {
    onClose: null,
    animation: true,
    closable: false,
    children: null,
    maskClosable: false,
    maskCls: null,
    maskBgCls: null,
    childrenCls: null,
  };

  render() {
    const {
      visible,
      children,
      maskCls,
      maskBgCls,
      childrenCls,
      onClose,
      maskClosable,
      closable,
      animation,
    } = this.props;

    const ModalBase = (
      <ModalStyles.ModalStyled className={classnames('xm-mask', maskCls)}>
        <ModalStyles.ModalBg
          className={classnames('xm-mask-bg', maskBgCls)}
          onClick={() => {
            console.log('bg');
            console.log(maskClosable);

            maskClosable && onClose();
          }}
        />
        <ModalStyles.ModalContent className={classnames('xm-mask-content', childrenCls)}>
          {children}
        </ModalStyles.ModalContent>
        {closable && (
          <ModalStyles.CloseBtn onClick={onClose} className="xm-mask-close-btn">
            <Icon size={24} type="Close" />
          </ModalStyles.CloseBtn>
        )}
      </ModalStyles.ModalStyled>
    );

    if (!animation) {
      return (
        <div className="sdagfdh" style={{ visibility: visible ? 'visible' : 'hidden' }}>
          {ModalBase}
        </div>
      );
    }

    return (
      <CSSTransition timeout={400} classNames="modal-fade" in={visible}>
        {status => {
          return <div className={`modal-fade modal-fade-${status}`}>{ModalBase}</div>;
        }}
      </CSSTransition>
    );
  }
}

export { Modal };
