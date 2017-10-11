/**
 * Created by Liqi on 17/9/28.
 */
import { Component } from 'react';
import { style, Modal, Button } from '../';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Dialog extends Component {
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
    icon = null,
  }) {
    this.setState({ title, message, buttons, theme, children, callback, icon }, () => {
      this.refDialogView.show();
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
    this.setState({ title, message, buttons, children, callback, theme, icon }, () => {
      this.refDialogView.show();
    });
  }

  closeDialog(result) {
    const { callback } = this.state;
    callback && callback(result);
    this.refDialogView.hide();
  }

  render() {
    const { title, message, buttons, theme, children, icon } = this.state;
    const DialogContainer = styled.div`
      width: 280px;
      background: #fff;
      border-radius: 8px;
      text-align: center;
      position: relative;
      padding: 1px;
      padding-top: ${icon && '40px'};
    `;
    const DContent = styled.div`padding: 24px 16px;`;
    const DTitle = styled.div`
      color: #444;
      margin-bottom: 16px;
      font-size: ${theme === 'classic' ? '18px' : '22px'};
      line-height: ${theme === 'classic' ? '18px' : '22px'};
    `;
    const DMessage = styled.div`
      font-size: 14px;
      color: #999;
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

    const DIcon = styled.div`
      position: absolute;
      top: 0;
      transform: translate(-50%, -50%);
      left: 50%;
    `;
    const DWrapper = styled.div`
      .DialogMask-content {
        width: 100%;
        height: 100%;
        ${style.mixins.xmFlexCenter('column')};
      }
    `;
    return (
      <DWrapper>
        <Modal
          ref={c => {
            this.refDialogView = c;
          }}
          childrenCls="DialogMask-content"
        >
          <DialogContainer className="DialogContainer">
            {theme === 'new' && icon && <DIcon className="DIcon">{icon}</DIcon>}
            <DContent>
              <DTitle>{title}</DTitle>
              <DMessage>{message}</DMessage>
              {children}
            </DContent>
            {theme === 'classic' ? DClassicBtnGroup : DNewBtnGroup}
          </DialogContainer>
        </Modal>
      </DWrapper>
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
