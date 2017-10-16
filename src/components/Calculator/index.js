/**
 * Created by Liqi on 17/10/16.
 */

import { default as Component } from '../utlis/Component';
import { ActionSheet, Input, Keyboard, NoticeBar, Icon, style } from '../';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { noop } from 'lodash';

const CalculatorStyles = {
  Output: styled.div`
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
  `,
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currValue: '',
    };
    this.close = this.close.bind(this);
  }

  static propTypes = {
    calculateFunc: PropTypes.func,
    checkValue: PropTypes.func,
    onClose: PropTypes.func,
    onConfirm: PropTypes.func,
    actionBar: PropTypes.node,
    notice: PropTypes.string,
  };

  static defaultProps = {
    calculateFunc: null,
    checkValue: null,
    onClose: noop,
    onConfirm: noop,
    actionBar: null,
    notice: null,
  };

  open() {
    this.refASCalculator.show();
  }

  close() {
    this.refASCalculator.hide();
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

  render({ calculateFunc, checkValue, onClose, onConfirm, actionBar, notice }, { currValue }) {
    return (
      <ActionSheet
        ref={c => (this.refASCalculator = c)}
        title="计算器"
        onClose={() => {
          console.log('close 回调');
          onClose();
        }}
      >
        <Input
          placeholder="请输入金额"
          type="money"
          size="large"
          left={<Icon color="#666666" size={24} type="Money" />}
          value={currValue}
          readOnly
        />
        <CalculatorStyles.Output>
          <span>预期收益</span>
          <em>
            <span>{calculateFunc ? calculateFunc(currValue) : currValue}</span>
          </em>
        </CalculatorStyles.Output>
        {actionBar}
        <NoticeBar center visible>
          {notice}
        </NoticeBar>
        <Keyboard
          type="calculator"
          checkValue={checkValue || this.checkValue}
          onChange={r => {
            this.setState({ currValue: r });
          }}
          onHide={() => {
            console.log(`keyboard hide`);
            this.close();
          }}
          onConfirm={() => {
            console.log(`keyboard confirm`);
            onConfirm();
          }}
        />
      </ActionSheet>
    );
  }
}

export { Calculator };
