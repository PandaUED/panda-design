/**
 * Created by Liqi on 17/9/28.
 */

/**
 * Created by Liqi on 17/9/27.
 */

import { Dialog, DialogSharedInstance, style, WhiteSpace } from 'pand';
import styled from 'styled-components';
import React from 'react';
import './../../components/Modal/_modal.scss';

class PageDialog extends React.Component {
  state = {
    maskVisible: false,
    modalVisible: false,
  };
  render() {
    const DialogDemo = styled.div`
      > a {
        display: block;
        padding: 1rem;
        background: #fff;
        color: #444;
        ${style.split.bottom};
      }
    `;
    return (
      <DialogDemo>
        <WhiteSpace>Dialog</WhiteSpace>
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
              closable: true,
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
          alert new with icon
        </a>
        {/* <DialogSharedInstance /> */}
        {/* TODO: 需在跟节点初始化 */}
      </DialogDemo>
    );
  }
}
export default PageDialog;
