/**
 * Created by Liqi on 17/10/16.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import styled from 'styled-components';
import { default as Component } from '../utlis/Component';
import { ActionSheet } from '../ActionSheet/index';
import { Input } from '../Input/index';
import { Keyboard } from '../Keyboard/index';
import { WhiteSpack as WhiteSpace } from '../WhiteSpace/index';
import { NoticeBar } from '../NoticeBar/index';
import TouchFeedback from 'rmc-feedback';
import { style } from '../style_index';

const PasswordStyles = {
  ActionBar: styled.a`
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: ${style.color.textLight};
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
    onActionClick: PropTypes.func,
    actionDisable: PropTypes.bool,
  };

  static defaultProps = {
    onClose: noop,
    onPasswordFinish: noop,
    passwordNum: 6,
    resetWhenClose: true,
    actionBar: null,
    notice: null,
    icon: null,
    onActionClick: noop,
    actionDisable: true,
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
    {
      onClose,
      onPasswordFinish,
      passwordNum,
      actionBar,
      notice,
      icon,
      resetWhenClose,
      onActionClick,
      actionDisable,
    },
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
        <TouchFeedback disabled={actionDisable}>
          <PasswordStyles.ActionBar onClick={actionDisable ? null : onActionClick}>
            {actionBar}
          </PasswordStyles.ActionBar>
        </TouchFeedback>
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
          {...icon && { icon }}
        />
      </ActionSheet>
    );
  }
}

export { Password };
