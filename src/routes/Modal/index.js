/**
 * Created by Liqi on 17/9/27.
 */

import { Modal, style, WhiteSpace } from 'pand';
import styled from 'styled-components';
import React from 'react';
import './../../components/Modal/_modal.scss';

class PageModal extends React.Component {
  state = {
    maskVisible: false,
    modalVisible: false,
  };
  render() {
    const MaskContentTest = styled.div`
      height: 200px;
      width: 200px;
      background: #fff;
    `;
    const ModalDemo = styled.div`
      > a {
        display: block;
        padding: 1rem;
        background: #fff;
        color: #444;
        ${style.split.bottom};
      }
    `;
    return (
      <ModalDemo>
        <WhiteSpace>Modal</WhiteSpace>
        <Modal
          key={1}
          maskClosable
          maskCls="Mask"
          ref={c => {
            this.refMask = c;
          }}
        >
          <MaskContentTest>Mask</MaskContentTest>
        </Modal>
        <a
          href="javascript:;"
          onClick={() => {
            this.refMask.show();
          }}
        >
          Mask
        </a>
        <Modal
          key={2}
          closable
          maskCls="Modal"
          ref={c => {
            this.refModal = c;
          }}
        >
          <MaskContentTest>Modal</MaskContentTest>
        </Modal>
        <a
          href="javascript:;"
          onClick={() => {
            this.refModal.show();
          }}
        >
          Modal
        </a>
      </ModalDemo>
    );
  }
}
export default PageModal;
