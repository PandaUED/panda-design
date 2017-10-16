/**
 * Created by Liqi on 17/10/16.
 */

import { default as Component } from '../utlis/Component';
import { ActionSheet, Input, Keyboard, WhiteSpace, NoticeBar } from '../';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currValue: '',
    };
    this.close = this.close.bind(this);
  }

  static propTypes = {
    onClose: PropTypes.func,
    calculateFunc: PropTypes.func,
    onConfirm: PropTypes.func,
    onPasswordFinish: PropTypes.func,
    actionBar: PropTypes.node,
    notice: PropTypes.string,
  };

  static defaultProps = {
    actionBar: null,
    notice: null,
    onPasswordFinish: noop,
    calculateFunc: null,
  };

  open() {
    this.refASPassword.show();
  }

  clear() {
    console.log('TODO clear');
    // TODO clear
    // this.setState({
    //     currValue: '',
    // });
  }

  close() {
    this.refASPassword.hide();
    this.clear();
  }

  render({ actionBar, notice, onPasswordFinish, onClose }, { currValue }) {
    return (
      <ActionSheet
        ref={c => (this.refASPassword = c)}
        title="输入验证码"
        onClose={() => {
          console.log('close 回调');
          onClose();
          this.clear();
        }}
      >
        <Input size="square" value={currValue} />
        <WhiteSpace transparent />
        {actionBar}
        <NoticeBar center visible>
          {notice}
        </NoticeBar>
        <Keyboard
          type="password"
          onChange={r => {
            this.setState({ currValue: r }, () => {
              if (r.length >= 6) {
                onPasswordFinish(r);
              }
            });
          }}
        />
      </ActionSheet>
    );
  }
}

export { Password };
