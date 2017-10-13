/**
 * Created by Liqi on 17/10/10.
 */

import { default as Component } from '../utlis/Component';
import { ActionSheet, Input, Keyboard, WhiteSpace, NoticeBar, Icon, style } from '../';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { noop } from 'lodash';

class CombinePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currValue: '',
    };
  }

  render({ actionBar, notice, onPasswordFinish }, { currValue }) {
    return (
      <div>
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
      </div>
    );
  }
}

class CombineCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currValue: '',
    };
  }

  checkValue(value) {
    let result = value;
    // 清除"数字"和"."以外的字符
    result = result.replace(/[^\d.]/g, '');
    // 验证第一个字符是数字
    result = result.replace(/^\./g, '');
    // 只保留第一个, 清除多余的
    result = result.replace(/\.{2,}/g, '.');
    result = result
      .replace('.', '$#$')
      .replace(/\./g, '')
      .replace('$#$', '.');
    // 只能输入两个小数
    result = result.replace(/^(-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
    return result;
  }

  render({ notice, calculateFunc, onHide, onConfirm }, { currValue }) {
    const Output = styled.div`
      background: #fff;
      box-shadow: 0 2px 6px 0 #e3e3e3;
      height: 54px;
      margin: 0 16px 16px;
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      > em {
        font-style: normal;
        color: ${style.color.orange};
      }
    `;

    return (
      <div>
        <Input
          placeholder="请输入金额"
          type="money"
          size="large"
          left={<Icon color="#666666" size={24} type="Money" />}
          value={currValue}
          readOnly
        />
        <Output>
          <span>预期收益</span>
          <em>
            <span>{calculateFunc ? calculateFunc(currValue) : currValue}</span>
          </em>
        </Output>
        <NoticeBar center visible>
          {notice}
        </NoticeBar>
        <Keyboard
          type="calculator"
          checkValue={this.checkValue}
          onChange={r => {
            console.log(`currValue: ${this.checkValue(r)}`);
            this.setState({ currValue: r });
          }}
          onHide={() => {
            console.log(`keyboard hide`);
            onHide();
          }}
          onConfirm={() => {
            console.log(`keyboard confirm`);
            onConfirm();
          }}
        />
      </div>
    );
  }
}

class Combine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currValue: '',
    };
    this.close = this.close.bind(this);
  }

  static defaultProps = {
    type: 'password', // calculator
    actionBar: null,
    notice: null,
    onPasswordFinish: noop,
    calculateFunc: null,
  };

  open() {
    switch (this.props.type) {
      case 'password':
        this.refASPassword.show();
        break;
      case 'calculator':
        this.refASCalculator.show();
        break;
      default:
        break;
    }
  }

  close() {
    switch (this.props.type) {
      case 'password':
        this.refASPassword.hide();
        break;
      case 'calculator':
        this.refASCalculator.hide();
        break;
      default:
        break;
    }
  }

  render({ type, actionBar, notice, onPasswordFinish, calculateFunc, onClose, onConfirm }) {
    return (
      <div>
        {type === 'password' ? (
          <ActionSheet
            ref={c => (this.refASPassword = c)}
            title="输入验证码"
            onClose={() => {
              console.log('close 回调');
              onClose();
            }}
          >
            <CombinePassword {...{ actionBar, notice, onPasswordFinish }} />
          </ActionSheet>
        ) : (
          <ActionSheet
            ref={c => (this.refASCalculator = c)}
            title="计算器"
            onClose={() => {
              console.log('close 回调');
              onClose();
            }}
          >
            <CombineCalculator
              {...{ notice, calculateFunc, onConfirm }}
              onHide={() => {
                this.close();
              }}
            />
          </ActionSheet>
        )}
      </div>
    );
  }
}

export { Combine };
