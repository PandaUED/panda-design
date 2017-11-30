import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { Icon } from '../Icon';
import { style } from '../style_index';

const SquareInputWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
`;
const SquareInputBlock = styled.div`
  background: ${style.color.white};
  border: 1px solid ${style.color.split};
  font-size: 36px;
  color: ${style.color.textDark};
  line-height: 54px;
  height: 54px;
  width: 48px;
  text-align: center;
  margin-right: 6px;
  &:last-child {
    margin-right: 0;
  }
`;
const InputWrap = styled.div`
  display: flex;
  background-color: ${style.color.white};
  align-items: center;
  height: 72px;
`;
const InputView = styled.input`
  color: ${style.color.textDark};
  width: 100%;
  margin-left: 24px;
  font-size: 16px;
  line-height: 16px;
  border: none;
  ::-moz-placeholder {
    color: ${style.color.placeholder};
  }
  ::-webkit-input-placeholder {
    color: ${style.color.placeholder};
  }
`;
const InputLeft = styled.div`margin-left: 16px;`;
const InputRight = styled.div`
  font-size: 12px;
  color: ${style.color.blue};
  word-break: keep-all;
  margin-right: 8px;
`;
const InputClear = styled.div`margin-right: 16px;`;

const LargeInput = InputView.extend`
  font-size: 32px;
  line-height: 72px;
  font-family: SFUIDisplay-Medium, PingFangSC-Medium;
  font-weight: bold;
  &::placeholder {
    font-weight: normal;
    font-size: 20px;
  }
`;

class Input extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    left: PropTypes.node,
    right: PropTypes.node,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    size: PropTypes.string,
    readOnly: PropTypes.bool,
    showClear: PropTypes.bool,
    padding: PropTypes.number,
    onClear: PropTypes.func,
  };
  static defaultProps = {
    onChange: noop,
    onClick: noop,
    onClear: noop,
    readOnly: false,
    showClear: false,
  };

  state = {
    clear: this.props.defaultValue && this.props.defaultValue.length > 0,
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

    if (result.length > 0) {
      this.setState({
        clear: true,
      });
    } else {
      this.setState({
        clear: false,
      });
    }
    return result;
  }

  onChange(e) {
    e.target.value = this.checkValue(e.target.value);
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  clear(e) {
    const target = e.target.parentNode.parentNode;
    target.querySelector('input').value = '';
    this.setState({
      clear: false,
    });
    this.props.onClear();
  }

  render() {
    const {
      className,
      size = 'small',
      left,
      right,
      placeholder,
      value,
      readOnly,
      showClear,
      defaultValue,
    } = this.props;
    if (size === 'square') {
      return (
        <SquareInputWrap className={className} onClick={e => this.props.onClick(e)}>
          <SquareInputBlock>{value[0]}</SquareInputBlock>
          <SquareInputBlock>{value[1]}</SquareInputBlock>
          <SquareInputBlock>{value[2]}</SquareInputBlock>
          <SquareInputBlock>{value[3]}</SquareInputBlock>
          <SquareInputBlock>{value[4]}</SquareInputBlock>
          <SquareInputBlock>{value[5]}</SquareInputBlock>
        </SquareInputWrap>
      );
    }

    return (
      <InputWrap className={className}>
        {left && <InputLeft>{left}</InputLeft>}
        {size === 'large' ? (
          <LargeInput
            onClick={e => this.props.onClick(e)}
            className={className}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={e => {
              this.onChange(e);
            }}
            readOnly={readOnly}
          />
        ) : (
          <InputView
            onClick={e => this.props.onClick(e)}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={e => {
              this.onChange(e);
            }}
            readOnly={readOnly}
          />
        )}
        {showClear &&
          this.state.clear && (
            <InputClear onClick={e => this.clear(e)}>
              <Icon size={16} type="remove" color="#CACACA" />
            </InputClear>
          )}
        {right && <InputRight>{right}</InputRight>}
      </InputWrap>
    );
  }
}

export { Input };
