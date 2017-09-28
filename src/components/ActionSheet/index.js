/**
 * Created by Liqi on 17/9/28.
 */

import React from 'react';
import { Icon, WhiteSpace, Modal } from 'pand';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import {CSSTransition} from 'react-transition-group';
// import {style} from '../';

class ActionSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ASVisible: false,
    };
    this.hide = this.hide.bind(this);
  }

  refActionSheet = null;

  show({ title, content, onClose, closeBtnPosition = 'top' }) {
    this.setState(
      {
        title,
        content,
        onClose,
        closeBtnPosition,
      },
      () => {
        this.refActionSheet.show();
        // this.setState({
        //     ASVisible: true
        // });
      }
    );
  }

  hide() {
    const { onClose } = this.state;

    console.log('hide');
    this.refActionSheet.hide();
    onClose && onClose();
    //
    // this.setState({
    //     ASVisible: false,
    // });
  }

  render() {
    console.log(this.state);
    const { title, content, closeBtnPosition } = this.state;
    const ASContainer = styled.div`
      position: fixed;
      bottom: 0;
      background: #fff;
      width: 100%;
    `;

    const ASTitle = styled.div`
      height: 54px;
      line-height: 54px;
      font-family: .PingFangSC-Regular;
      font-size: 17px;
      color: #666666;
      text-align: center;
      position: relative;
    `;
    const ASCloseBtnTop = styled.div`
      position: absolute;
      padding: 15px;
      left: 0;
      top: 0;
      z-index: 100;
    `;
    const ASCloseBtnBottom = styled.div`
      height: 54px;
      line-height: 54px;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #444444;
      font-weight: bold;
    `;

    return (
      <Modal
        ref={c => {
          this.refActionSheet = c;
        }}
        maskClosable
      >
        <ASContainer>
          {closeBtnPosition === 'top' && (
            <ASCloseBtnTop onClick={this.hide}>
              <Icon size={24} type="Close" />
            </ASCloseBtnTop>
          )}
          {title && <ASTitle>{title}</ASTitle>}
          <div className="actionSheet-content">{content}</div>
          {closeBtnPosition === 'bottom' && (
            <div>
              <WhiteSpace />
              <ASCloseBtnBottom onClick={this.hide}>取消</ASCloseBtnBottom>
            </div>
          )}
        </ASContainer>
      </Modal>
    );
  }
}

function ActionSheetSharedInstance() {
  return (
    <ActionSheet
      ref={c => {
        ActionSheet.sharedInstance = c;
      }}
    />
  );
}

export { ActionSheet, ActionSheetSharedInstance };
