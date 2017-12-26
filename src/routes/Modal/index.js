/**
 * Created by Liqi on 17/9/27.
 */

import { Modal, style, WhiteSpace } from 'pand';
import styled from 'styled-components';
import React from 'react';
import './../../components/Modal/_modal.scss';

const ModalDemo = styled.div`
  > a {
    display: block;
    padding: 1rem;
    background: #fff;
    color: #444;
    ${style.split.bottom};
  }
`;

class PageModal extends React.Component {
  state = {
    Modal1: false,
    Modal2: false,
    Modal3: false,
    Modal4: false,
  };

  render() {
    return (
      <ModalDemo>
        <WhiteSpace>Modal</WhiteSpace>
        <a
          href="javascript:;"
          onClick={() => {
            this.setState({ Modal1: true });
          }}
        >
          Modal mask not Closable
        </a>
        <Modal
          visible={this.state.Modal1}
          onClose={() => {
            console.log('close');
            this.setState({ Modal1: false });
          }}
        />

        <a
          href="javascript:;"
          onClick={() => {
            this.setState({ Modal2: true });
          }}
        >
          Modal maskClosable
        </a>
        <Modal
          visible={this.state.Modal2}
          onClose={() => {
            console.log('close');
            this.setState({ Modal2: false });
          }}
          maskClosable
        />

        <a
          href="javascript:;"
          onClick={() => {
            this.setState({ Modal3: true });
          }}
        >
          Modal closable
        </a>
        <Modal
          visible={this.state.Modal3}
          onClose={() => {
            console.log('close');
            this.setState({ Modal3: false });
          }}
          closable
          maskClosable={false}
          contentFlexCenter
        >
          contentFlexCenter
        </Modal>

        <a
          href="javascript:;"
          onClick={() => {
            this.setState({ Modal4: true });
          }}
        >
          Modal No animation
        </a>
        <Modal
          visible={this.state.Modal4}
          animation={false}
          onClose={() => {
            console.log('close');
            this.setState({ Modal4: false });
          }}
          maskClosable
        />
      </ModalDemo>
    );
  }
}

export default PageModal;
