/**
 * Created by Liqi on 17/9/27.
 */
import { Component } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { style } from '../style_index';
import './_toast.scss';

class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toastVisible: false,
    };
    this.hide = this.hide.bind(this);
  }

  show({ title = '温馨提示', desc, icon = null, button = null, onClose = null, duration = null }) {
    this.setState({ title, desc, icon, button, onClose }, () => {
      this.setState({ toastVisible: true });
    });

    let _duration = duration;
    if (!_duration) {
      _duration = button ? 3000 : 1000;
    }
    setTimeout(this.hide, _duration);
  }

  hide() {
    this.state.toastVisible &&
      this.setState({
        toastVisible: false,
      });
  }

  render() {
    const { title, desc, icon, button, onClose } = this.state;

    const ToastContainer = styled.div`
      width: calc(100% - 32px);
      padding: 16px;
      margin: 16px;
      box-shadow: 0 0 8px 2px #eee;
      background: #fff;
      ${style.mixins.xmFlexCenter()};
    `;
    const TIcon = styled.div`margin-right: 16px;`;
    const TTitle = styled.div`
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #444;
      line-height: 16px;
      font-weight: bold;
      margin-bottom: 9px;
      text-align: left;
    `;
    const TDesc = styled.div`
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #999;
      line-height: 18px;
      text-align: justify;
    `;
    const TBlank = styled.div`flex: 1 1 auto;`;
    const TBtn = styled.div`
      margin-left: 16px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #5891ef;
      line-height: 14px;
    `;

    return (
      <CSSTransition timeout={400} classNames="toast-fade" in={this.state.toastVisible}>
        {status => {
          return (
            <div className={`toast-fade toast-fade-${status}`}>
              <ToastContainer className="toast-container">
                {icon && <TIcon className="toast-icon">{icon}</TIcon>}
                <div className="toast-textarea">
                  <TTitle className="toast-title">{title}</TTitle>
                  <TDesc className="toast-desc">{desc}</TDesc>
                </div>
                <TBlank className="toast-blank" />
                {button && (
                  <TBtn
                    className="toast-btn"
                    onClick={() => {
                      this.hide();
                      onClose && onClose();
                    }}
                  >
                    {button}
                  </TBtn>
                )}
              </ToastContainer>
            </div>
          );
        }}
      </CSSTransition>
    );
  }
}

function ToastSharedInstance() {
  return (
    <Toast
      ref={c => {
        Toast.sharedInstance = c;
      }}
    />
  );
}

export { Toast, ToastSharedInstance };
