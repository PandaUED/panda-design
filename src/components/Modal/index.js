/**
 * Created by Liqi on 17/9/27.
 */

import React from 'react';
import { default as Component } from '../utlis/Component';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { noop } from 'lodash';
import { Icon } from '../Icon/index';
import { style } from '../style_index';
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
    ${props => props.contentFlexCenter && style.mixins.xmFlexCenter('column')};
  `,
  ModalBg: styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  `,
  ModalContent: styled.div`display: inline-block;`,

  CloseBtn: styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.8);
    color: rgba(255, 255, 255, 0.9);
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
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    closable: PropTypes.bool,
    maskClosable: PropTypes.bool,
    animation: PropTypes.bool,
    maskCls: PropTypes.string,
    maskBgCls: PropTypes.string,
    childrenCls: PropTypes.string,
    children: PropTypes.node,
    contentFlexCenter: PropTypes.bool,
  };
  static defaultProps = {
    visible: false,
    onClose: noop,
    closable: false,
    maskClosable: false,
    animation: true,
    maskCls: null,
    maskBgCls: null,
    childrenCls: null,
    children: null,
    contentFlexCenter: false,
  };

  render({
    visible,
    children,
    maskCls,
    maskBgCls,
    childrenCls,
    onClose,
    maskClosable,
    closable,
    animation,
    contentFlexCenter,
  }) {
    const ModalBase = (
      <ModalStyles.ModalStyled
        className={classnames('xm-mask', maskCls)}
        {...{ contentFlexCenter }}
      >
        <ModalStyles.ModalBg
          className={classnames('xm-mask-bg', maskBgCls)}
          onClick={() => {
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
      return <div style={{ visibility: visible ? 'visible' : 'hidden' }}>{ModalBase}</div>;
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
