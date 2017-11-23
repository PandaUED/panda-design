/**
 * Created by Liqi on 17/9/28.
 */
import React from 'react';
import styled from 'styled-components';
import { default as Component } from '../utlis/Component';
import { Modal } from '../Modal/index';
import { Button } from '../Button/index';
import { style } from '../style_index';

const DIALOG_TYPE = {
  ALERT: 'alert',
  CONFIRM: 'confirm',
};
const DIALOG_THEME = {
  CLASSIC: 'classic',
  NEW: 'new',
};

const DialogStyles = {
  DWrapper: styled.div`
    .DialogMask-content {
      width: 100%;
      height: 100%;
      ${style.mixins.xmFlexCenter('column')};
    }
  `,
  DContent: styled.div`padding: 24px 16px;`,
  DialogContainer: styled.div`
    width: 280px;
    background: #fff;
    border-radius: 8px;
    text-align: center;
    position: relative;
    padding: 1px;
  `,
  DMessage: styled.div`
    font-size: 14px;
    color: #999;
    line-height: 21px;
  `,
  DClassicBtnWrapper: styled.div`
    height: 48px;
    font-size: 18px;
    box-shadow: inset 0 0 0 0 #f8f8f8;
    border-top: 0.5px solid #f8f8f8;
    line-height: 48px;
    display: flex;
    > div {
      flex: 1;
      color: #666;
      &:last-child {
        color: ${style.color.orange};
      }
      &:nth-child(2) {
        border-left: 0.5px solid #f8f8f8;
      }
    }
  `,
  DTitle: styled.div`
    color: #444;
    margin-bottom: 16px;
    &.new {
      font-size: 22px;
      line-height: 22px;
    }
    &.classic {
      font-size: 18px;
      line-height: 18px;
    }
  `,
  DNewSingleBtn: styled.div`margin: 0 70px 20px;`,
  DIcon: styled.div`
    position: absolute;
    top: 0;
    transform: translate(-50%, -50%);
    left: 50%;
  `,
};

class Dialog extends Component {
  state = {
    title: '',
    message: '',
    confirmBtn: '确认',
    cancelBtn: '取消',
    theme: DIALOG_THEME.CLASSIC,
    callback: null,
    maskVisible: false,
    type: DIALOG_TYPE.ALERT,
  };

  alert({
    title,
    message,
    confirmBtn = '确认',
    theme = DIALOG_THEME.CLASSIC,
    callback,
    icon = null,
    closable = false,
  }) {
    this.setState({
      title,
      message,
      confirmBtn,
      theme,
      callback,
      icon,
      type: DIALOG_TYPE.ALERT,
      maskVisible: true,
      closable,
    });
  }

  confirm({
    title,
    message,
    confirmBtn = '确认',
    cancelBtn = '取消',
    callback,
    theme = DIALOG_THEME.CLASSIC,
    icon = null,
    closable = false,
  }) {
    this.setState({
      title,
      message,
      confirmBtn,
      cancelBtn,
      theme,
      callback,
      icon,
      type: DIALOG_TYPE.CONFIRM,
      maskVisible: true,
      closable,
    });
  }

  closeDialog(result) {
    const { callback } = this.state;
    callback && callback(result);
    this.setState({
      maskVisible: false,
    });
  }

  renderBtnGroup() {
    const { type, theme, confirmBtn, cancelBtn } = this.state;
    const buttonArr = type === DIALOG_TYPE.ALERT ? [confirmBtn] : [cancelBtn, confirmBtn];
    if (theme === DIALOG_THEME.CLASSIC) {
      return (
        <DialogStyles.DClassicBtnWrapper className="classicBtnGroup">
          {buttonArr.map((e, i) => {
            return (
              <div
                key={i}
                className="classicBtn"
                onClick={() => {
                  this.closeDialog(buttonArr.length === 1 ? true : !!i);
                }}
              >
                {e}
              </div>
            );
          })}
        </DialogStyles.DClassicBtnWrapper>
      );
    } else {
      return (
        <div className="newBtnGroup">
          {buttonArr.map((e, i) => {
            return (
              <DialogStyles.DNewSingleBtn
                className="newBtn"
                key={i}
                onClick={() => {
                  this.closeDialog(buttonArr.length === 1 ? true : !!i);
                }}
              >
                <Button round color="primary" deg={-45}>
                  {e}
                </Button>
              </DialogStyles.DNewSingleBtn>
            );
          })}
        </div>
      );
    }
  }

  // eslint-disable-next-line
    render({}, { title, message, theme, icon, closable }) {
    return (
      <DialogStyles.DWrapper>
        <Modal
          childrenCls="DialogMask-content"
          visible={this.state.maskVisible}
          closable={closable}
          onClose={() => {
            this.setState({ maskVisible: false });
          }}
        >
          <DialogStyles.DialogContainer
            className="DialogContainer"
            style={icon && { paddingTop: '40px' }}
          >
            {theme === 'new' &&
              icon && <DialogStyles.DIcon className="DIcon">{icon}</DialogStyles.DIcon>}
            <DialogStyles.DContent>
              <DialogStyles.DTitle className={theme}>{title}</DialogStyles.DTitle>
              <DialogStyles.DMessage>{message}</DialogStyles.DMessage>
            </DialogStyles.DContent>
            {this.renderBtnGroup()}
          </DialogStyles.DialogContainer>
        </Modal>
      </DialogStyles.DWrapper>
    );
  }
}

Dialog.TYPES = DIALOG_TYPE;
Dialog.THEMES = DIALOG_THEME;

function DialogSharedInstance() {
  return (
    <Dialog
      ref={c => {
        Dialog.sharedInstance = c;
      }}
    />
  );
}

export { Dialog, DialogSharedInstance };
