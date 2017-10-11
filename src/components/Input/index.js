import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

class Input extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    left: PropTypes.node,
    right: PropTypes.node,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    size: PropTypes.string,
  };
  static defaultProps = {
    onChange: noop,
    onClick: noop,
  };

  checkValue(value) {
    let result = value;

    if (this.props.type === 'money') {
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
    }

    if (this.props.type === 'tel') {
      // 清除"数字"以外的字符
      result = result.replace(/[^\d]/g, '');
      if (result.length > 11) {
        result = result.substring(0, 11);
      }
    }

    return result;
  }

  onChange(e) {
    e.target.value = this.checkValue(e.target.value);
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    const { className, size = 'small', left, right, placeholder, value } = this.props;
    if (size === 'square') {
      const InputWrap = styled.div`
        display: flex;
        justify-content: center;
        padding: 0 30px;
      `;
      const InputBlock = styled.div`
        flex: 1;
        background: #ffffff;
        border: 1px solid #eeeeee;
        font-size: 36px;
        color: #444444;
        line-height: 54px;
        height: 54px;
        text-align: center;
        margin-right: 6px;
        &:last-child {
          margin-right: 0;
        }
      `;
      return (
        <InputWrap className={className} onClick={e => this.props.onClick(e)}>
          <InputBlock>{value[0]}</InputBlock>
          <InputBlock>{value[1]}</InputBlock>
          <InputBlock>{value[2]}</InputBlock>
          <InputBlock>{value[3]}</InputBlock>
          <InputBlock>{value[4]}</InputBlock>
          <InputBlock>{value[5]}</InputBlock>
        </InputWrap>
      );
    }
    const InputWrap = styled.div`
      display: flex;
      background-color: white;
      align-items: center;
      padding: 19px 8px;
    `;
    let Input = styled.input`
      color: #cacaca;
      width: 100%;
      margin-left: 24px;
      font-size: 16px;
      line-height: 16px;
      border: none;
      ::-moz-placeholder {
        color: #cacaca;
      }
      ::-webkit-input-placeholder {
        color: #cacaca;
      }
    `;
    const InputLeft = styled.div`margin-left: 16px;`;
    const InputRight = styled.div`
      font-size: 12px;
      color: #5891ef;
      word-break: keep-all;
      margin-right: 8px;
    `;
    if (size === 'large') {
      Input = Input.extend`
        font-size: 20px;
        line-height: 20px;
        font-weight: bold;
      `;
    }
    return (
      <InputWrap>
        {left && <InputLeft>{left}</InputLeft>}
        <Input
          onClick={e => this.props.onClick(e)}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={e => {
            this.onChange(e);
          }}
        />
        {right && <InputRight>{right}</InputRight>}
      </InputWrap>
    );
  }
}

export default Input;
