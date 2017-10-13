/**
 * Created by Liqi on 17/9/28.
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, WhiteSpace, Modal } from '../';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import './_actionSheet.scss';
import { noop } from 'lodash';

class ActionSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asVisible: false,
    };
    this.hide = this.hide.bind(this);
  }

  static defaultProps = {
    title: null,
    onClose: noop,
    closeBtnPosition: 'top',
  };

  show() {
    this.setState({ asVisible: true });
  }

  hide() {
    this.setState({ asVisible: false });
    const { onClose } = this.props;
    onClose && onClose();
  }

  render() {
    const { asVisible } = this.state;
    const { title, children, closeBtnPosition } = this.props;

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
      color: #666;
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
      color: #444;
      font-weight: bold;
    `;

    return (
      <div>
        <Modal visible={asVisible} onClose={this.hide} maskClosable />

        <CSSTransition timeout={400} classNames="actionSheet-fade" in={asVisible}>
          {status => {
            return (
              <ASContainer
                className={`actionSheet-fade actionSheet-fade-${status} actionSheet-container`}
              >
                {closeBtnPosition === 'top' && (
                  <ASCloseBtnTop onClick={this.hide}>
                    <Icon size={24} type="Close" />
                  </ASCloseBtnTop>
                )}
                {title && <ASTitle>{title}</ASTitle>}
                <div className="actionSheet-content">{children}</div>
                {closeBtnPosition === 'bottom' && (
                  <div>
                    <WhiteSpace />
                    <ASCloseBtnBottom onClick={this.hide}>取消</ASCloseBtnBottom>
                  </div>
                )}
              </ASContainer>
            );
          }}
        </CSSTransition>
      </div>
    );
  }
}

export { ActionSheet };
