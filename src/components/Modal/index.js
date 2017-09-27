/**
 * Created by Liqi on 17/9/27.
 */
import { Button } from 'pand';
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
      <CSSTransition timeout={400} classNames="fade" in={this.state.isVisible}>
        {status => {
          return (
            <div className={`fade fade-${status}`}>
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

class Dialog extends React.Component {
  state = {
    title: '',
    message: '',
    buttons: [],
    theme: 'classic',
    img: null,
  };

  refDialogView = null;

  alert({
    title,
    message,
    buttons = ['确认'],
    theme = 'classic',
    children = null,
    callback,
  }) {
    this.setState(
      { title, message, buttons, theme, children, callback },
      () => {
        this.refDialogView.show();
      }
    );
  }

  confirm({
    title,
    message,
    buttons = ['取消', '确认'],
    children = null,
    callback,
    theme = 'classic',
  }) {
    this.setState(
      { title, message, buttons, children, callback, theme },
      () => {
        this.refDialogView.show();
      }
    );
  }

  closeDialog(result) {
    const { callback } = this.state;
    callback && callback(result);
    this.refDialogView.hide();
  }

  render() {
    const { title, message, buttons, theme, children } = this.state;
    const DialogWrapper = styled.div`
      width: 280px;
      background: #fff;
      border-radius: 8px;
      text-align: center;
      overflow: auto;
    `;
    const DContent = styled.div`padding: 24px 16px;`;
    const DTitle = styled.div`
      color: #444444;
      margin-bottom: 16px;
      font-size: ${theme === 'classic' ? '18px' : '22px'};
      line-height: ${theme === 'classic' ? '18px' : '22px'};
    `;
    const DMessage = styled.div`
      font-size: 14px;
      color: #999999;
      line-height: 21px;
    `;
    const DClassicBtnWrapper = styled.div`
      height: 48px;
      font-size: 18px;
      box-shadow: inset 0 0 0 0 #f8f8f8;
      border-top: 1px solid #f8f8f8;
      line-height: 48px;
      display: flex;
      > div {
        flex: 1;
        &:last-child {
          color: ${style.color.orange};
        }
        &:nth-child(2) {
          border-left: 1px solid #f8f8f8;
        }
      }
    `;
    const DNewSingleBtn = styled.div`margin: 0 70px 20px;`;
    const DClassicBtnGroup = (
      <DClassicBtnWrapper className="classicBtnGroup">
        {buttons.map((e, i) => {
          return (
            <div
              key={i}
              className="classicBtn"
              onClick={() => {
                this.closeDialog(buttons.length === 1 ? true : !!i);
              }}
            >
              {e}
            </div>
          );
        })}
      </DClassicBtnWrapper>
    );
    const DNewBtnGroup = (
      <div className="newBtnGroup">
        {buttons.map((e, i) => {
          return (
            <DNewSingleBtn
              className="newBtn"
              key={i}
              onClick={() => {
                this.closeDialog(buttons.length === 1 ? true : !!i);
              }}
            >
              <Button round color="primary" deg={-45} shadow>
                {e}
              </Button>
            </DNewSingleBtn>
          );
        })}
      </div>
    );
    return (
      <Modal
        ref={c => {
          this.refDialogView = c;
        }}
      >
        <DialogWrapper>
          <DContent>
            <DTitle>{title}</DTitle>
            <DMessage>{message}</DMessage>
            {children}
          </DContent>
          {theme === 'classic' ? DClassicBtnGroup : DNewBtnGroup}
        </DialogWrapper>
      </Modal>
    );
  }
}

function DialogSharedInstance() {
  return (
    <Dialog
      ref={c => {
        Dialog.sharedInstance = c;
      }}
    />
  );
}

export { Modal, Dialog, DialogSharedInstance };
