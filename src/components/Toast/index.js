/**
 * Created by Liqi on 17/9/27.
 */
import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { style } from '../style_index';
import { BgIcon } from '../BgIcon/index';
import './_toast.scss';

const ToastStyles = {
  ToastContainer: styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    margin: 16px;
    box-shadow: 0 0 8px 2px #eee;
    background: #fff;
    ${style.mixins.xmFlexCenter()};
  `,
  TIcon: styled.div`margin-right: 16px;`,
  TTitle: styled.div`
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #444;
    line-height: 16px;
    font-weight: bold;
    text-align: left;
  `,
  TDesc: styled.div`
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999;
    line-height: 18px;
    text-align: justify;
    margin-top: 9px;
  `,
  TBlank: styled.div`flex: 1 1 auto;`,
  TBtn: styled.div`
    margin-left: 16px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #5891ef;
    line-height: 14px;
  `,
};

const STATUS_ICON = {
  SUCCESS: <BgIcon bgColor={style.gradient.blue()} type="Yes" />,
  FAIL: <BgIcon bgColor={style.gradient.redbag()} type="Close" />,
  WARNING: <BgIcon bgColor={style.gradient.orange()} type="Note" />,
};

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toastVisible: false,
    };
    this.hide = this.hide.bind(this);
  }

  show({
    title = '温馨提示',
    desc,
    icon = null,
    button = null,
    onClose = null,
    duration = null,
    hasFooterBar = false,
  }) {
    this.setState({ title, desc, icon, button, onClose, hasFooterBar, toastVisible: true });

    let _duration = duration;
    if (!_duration) {
      _duration = button ? 3000 : 1000;
    }
    setTimeout(this.hide, _duration);
  }

  showSuccess(args) {
    this.show(Object.assign(args, { icon: STATUS_ICON.SUCCESS }));
  }

  showFail(args) {
    this.show(Object.assign(args, { icon: STATUS_ICON.FAIL }));
  }

  showWarning(args) {
    this.show(Object.assign(args, { icon: STATUS_ICON.WARNING }));
  }

  hide() {
    this.state.toastVisible &&
      this.setState({
        toastVisible: false,
      });
  }

  render() {
    const { title, desc, icon, button, onClose, hasFooterBar } = this.state;
    const footerBarCls = hasFooterBar ? 'hasFooterBar' : 'noFooterBar';

    return (
      <CSSTransition timeout={400} classNames="toast-fade" in={this.state.toastVisible}>
        {status => {
          return (
            <div className={classNames(`toast-fade toast-fade-${status}`, footerBarCls)}>
              <ToastStyles.ToastContainer className="toast-container">
                {icon && <ToastStyles.TIcon className="toast-icon">{icon}</ToastStyles.TIcon>}
                <div className="toast-textarea">
                  <ToastStyles.TTitle className="toast-title">{title}</ToastStyles.TTitle>
                  {desc && <ToastStyles.TDesc className="toast-desc">{desc}</ToastStyles.TDesc>}
                </div>
                <ToastStyles.TBlank className="toast-blank" />
                {button && (
                  <ToastStyles.TBtn
                    className="toast-btn"
                    onClick={() => {
                      this.hide();
                      onClose && onClose();
                    }}
                  >
                    {button}
                  </ToastStyles.TBtn>
                )}
              </ToastStyles.ToastContainer>
            </div>
          );
        }}
      </CSSTransition>
    );
  }
}

Toast.STATUS_ICON = STATUS_ICON;

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
