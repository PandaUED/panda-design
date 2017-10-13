/**
 * Created by Liqi on 17/9/28.
 */
import { Component } from 'react';
import { style, Modal, Button } from '../';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    buttons: [],
    theme: 'classic',
    img: null,
    maskVisible: false,
  };

  refDialogView = null;

  alert({
    title,
    message,
    buttons = ['确认'],
    theme = 'classic',
    children = null,
    callback,
    icon = null,
  }) {
    this.setState({
      title,
      message,
      buttons,
      theme,
      children,
      callback,
      icon,
      maskVisible: true,
    });
  }

  confirm({
    title,
    message,
    buttons = ['取消', '确认'],
    children = null,
    callback,
    theme = 'classic',
    icon = null,
  }) {
    this.setState({
      title,
      message,
      buttons,
      children,
      callback,
      theme,
      icon,
      maskVisible: true,
    });
  }

  closeDialog(result) {
    const { callback } = this.state;
    callback && callback(result);
    console.log('closeDialog');
    this.setState({
      maskVisible: false,
    });
  }

  render() {
    const { title, message, buttons, theme, children, icon } = this.state;

    const DClassicBtnGroup = (
      <DialogStyles.DClassicBtnWrapper className="classicBtnGroup">
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
      </DialogStyles.DClassicBtnWrapper>
    );
    const DNewBtnGroup = (
      <div className="newBtnGroup">
        {buttons.map((e, i) => {
          return (
            <DialogStyles.DNewSingleBtn
              className="newBtn"
              key={i}
              onClick={() => {
                this.closeDialog(buttons.length === 1 ? true : !!i);
              }}
            >
              <Button round color="primary" deg={-45} shadow>
                {e}
              </Button>
            </DialogStyles.DNewSingleBtn>
          );
        })}
      </div>
    );

    return (
      <DialogStyles.DWrapper>
        <Modal
          ref={c => {
            this.refDialogView = c;
          }}
          childrenCls="DialogMask-content"
          visible={this.state.maskVisible}
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
              {children}
            </DialogStyles.DContent>
            {theme === 'classic' ? DClassicBtnGroup : DNewBtnGroup}
          </DialogStyles.DialogContainer>
        </Modal>
      </DialogStyles.DWrapper>
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

export { Dialog, DialogSharedInstance };
