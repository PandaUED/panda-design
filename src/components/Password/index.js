/**
 * Created by Liqi on 17/10/16.
 */

import { default as Component } from '../utlis/Component';
import styled from 'styled-components';
import { ActionSheet, Input, Keyboard, WhiteSpace, NoticeBar } from '../';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

const PasswordStyles = {
  ActionBar: styled.div`
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999;
    line-height: 16px;
    margin-left: 30px;
  `,
};

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currValue: '',
      key: new Date().getTime(),
    };
    this.close = this.close.bind(this);
  }

  static propTypes = {
    onClose: PropTypes.func,
    onPasswordFinish: PropTypes.func,
    passwordNum: PropTypes.number,
    resetWhenClose: PropTypes.bool,
    actionBar: PropTypes.node,
    notice: PropTypes.string,
    icon: PropTypes.node,
  };

  static defaultProps = {
    onClose: noop,
    onPasswordFinish: noop,
    passwordNum: 6,
    resetWhenClose: true,
    actionBar: null,
    notice: null,
    icon: null,
  };

  open() {
    this.refASPassword.show();
  }

  reset() {
    if (this.props.resetWhenClose) {
      this.setState({
        key: new Date().getTime(),
        currValue: '',
      });
    }
  }

  close() {
    this.refASPassword.hide();
  }

  render(
    { onClose, onPasswordFinish, passwordNum, actionBar, notice, icon, resetWhenClose },
    { currValue, key }
  ) {
    return (
      <ActionSheet
        ref={c => (this.refASPassword = c)}
        title="输入验证码"
        onClose={() => {
          console.log('close 回调');
          onClose(this.state.currValue);
          resetWhenClose && this.reset();
        }}
      >
        <Input size="square" value={currValue} />
        <WhiteSpace transparent />
        <PasswordStyles.ActionBar>{actionBar}</PasswordStyles.ActionBar>
        <WhiteSpace transparent size={25} />
        <NoticeBar center visible>
          {notice}
        </NoticeBar>
        <Keyboard
          type="password"
          key={key}
          onChange={r => {
            this.setState({ currValue: r }, () => {
              if (r.length >= passwordNum) {
                onPasswordFinish(r);
              }
            });
          }}
          numLimit={passwordNum}
          icon={icon}
        />
      </ActionSheet>
    );
  }
}

export { Password };
