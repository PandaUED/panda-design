/**
 * Created by Liqi on 17/9/27.
 */

import { Modal, Dialog, DialogSharedInstance, style, WhiteSpace } from 'pand';
import styled from 'styled-components';
import React from 'react';
import './../../components/Modal/_modal.scss';

const MaskContentTest = styled.div`
  height: 200px;
  width: 200px;
  background: #fff;
`;
class PageFeedback extends React.Component {
  state = {
    maskVisible: false,
    modalVisible: false,
  };
  render() {
    const Feedback = styled.div`
      > a {
        display: block;
        padding: 1rem;
        background: #fff;
        color: #444;
        ${style.split.bottom};
      }
    `;
    return (
      <Feedback>
        <WhiteSpace>Feedback</WhiteSpace>
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
        <a
          href="javascript:;"
          onClick={() => {
            Dialog.sharedInstance.alert({
              title: '开启新网存管',
              message: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
              callback: result => {
                console.log(`callback: ${result}`);
              },
            });
          }}
        >
          alert classic
        </a>
        <a
          href="javascript:;"
          onClick={() => {
            Dialog.sharedInstance.confirm({
              title: '开启新网存管',
              message: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
              callback: result => {
                console.log(`callback: ${result}`);
              },
            });
          }}
        >
          confirm classic
        </a>
        <a
          href="javascript:;"
          onClick={() => {
            Dialog.sharedInstance.alert({
              title: '开启新网存管',
              message: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
              callback: result => {
                console.log(`callback: ${result}`);
              },
              theme: 'new',
            });
          }}
        >
          alert new
        </a>
        <a
          href="javascript:;"
          onClick={() => {
            Dialog.sharedInstance.confirm({
              title: '开启新网存管',
              message: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
              callback: result => {
                console.log(`callback: ${result}`);
              },
              theme: 'new',
            });
          }}
        >
          confirm new
        </a>
        <a
          href="javascript:;"
          onClick={() => {
            const IconTest = styled.div`
              width: 80px;
              height: 80px;
              background: ${style.color.orange};
            `;
            Dialog.sharedInstance.alert({
              title: '开启新网存管',
              message: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
              callback: result => {
                console.log(`callback: ${result}`);
              },
              theme: 'new',
              icon: <IconTest />,
            });
          }}
        >
          alert new with icon TODO
        </a>
        <a href="javascript:;">Toast TODO</a>
        <a href="javascript:;">ActionSheet TODO</a>
        <DialogSharedInstance /> {/* TODO: 需在跟节点初始化 */}
      </Feedback>
    );
  }
}
export default PageFeedback;
