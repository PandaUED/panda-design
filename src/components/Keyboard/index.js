/**
 * Created by Liqi on 17/9/30.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { noop } from 'lodash';
import { default as Component } from '../utlis/Component';
import { Icon } from '../Icon/index';

const KEYBOARD_TYPE = {
  PASSWORD: 'password',
  CALCULATOR: 'calculator',
};

const KBStyles = {
  KbContainer: styled.div`
    background: #fff;
    border: 1px solid #f8f8f8;
    border-right: 0;
  `,
  KeyboardRow: styled.div`
    height: 56px;
    display: flex;
    line-height: 56px;
  `,
  KeyboardItem: styled.div`
    font-family: SFUIDisplay-Regular;
    font-size: 26px;
    color: #444;
    flex: 1;
    box-shadow: 0.5px 0.5px 0 0 #f8f8f8;
    text-align: center;
  `,
  KbcContainer: styled.div`
    display: flex;
  `,
  KbcLeft: styled.div`
    flex: 3;
  `,
  KbcRight: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
};

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currValue: '',
    };
    this.concatPoint = this.concatPoint.bind(this);
    this.deleteLastChar = this.deleteLastChar.bind(this);
  }

  static propTypes = {
    type: PropTypes.string,
    keyboardCls: PropTypes.string,
    onChange: PropTypes.func,
    onHide: PropTypes.func,
    onConfirm: PropTypes.func,
    checkValue: PropTypes.func,
    numLimit: PropTypes.number,
    icon: PropTypes.node,
  };

  static defaultProps = {
    type: KEYBOARD_TYPE.PASSWORD,
    keyboardCls: null,
    onChange: noop,
    onHide: noop,
    onConfirm: noop,
    checkValue: null,
    numLimit: 6,
    icon: (
      <Icon
        size={24}
        type="LogoXw"
        double
        color={['#e3e3e3', '#EEE']}
        style={{ transform: 'translateX(-50%)' }}
      />
    ),
  };

  KeyboardNumArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  updateValue(value) {
    const { checkValue } = this.props;
    const _v = checkValue ? checkValue(value) : value;
    this.setState(
      {
        currValue: _v,
      },
      () => this.props.onChange(this.state.currValue)
    );
  }

  concatString(value) {
    const { currValue } = this.state;
    const { numLimit } = this.props;
    let _value = currValue + value.toString();

    if (this.props.type === 'calculator') {
      if (currValue.length === 1 && currValue[0] === '0') {
        if (value === 0 || value === '0') {
          return;
        } else {
          _value = value.toString();
        }
      }
    } else if (currValue.length >= numLimit) {
      return;
    }

    this.updateValue(_value);
  }

  deleteLastChar() {
    this.updateValue(this.state.currValue.slice(0, -1));
  }

  concatPoint() {
    const { currValue } = this.state;
    let _value = null;
    if (currValue.match(/\./i)) {
      return;
    } else if (!currValue.length) {
      _value = '0.';
    } else {
      _value = `${currValue}.`;
    }
    this.updateValue(_value);
  }

  renderDelBtn() {
    return (
      <div onClick={this.deleteLastChar}>
        <Icon size={24} type="Delete" color="#666" />
      </div>
    );
  }

  renderSingleNum(elem, idx = 0) {
    return (
      <KBStyles.KeyboardItem key={idx} onClick={() => this.concatString(elem)}>
        {elem}
      </KBStyles.KeyboardItem>
    );
  }

  renderKbNum() {
    return (
      <div className="keyboard-numGrp">
        {this.KeyboardNumArr.map((elem, idx) => {
          return (
            <KBStyles.KeyboardRow key={idx}>
              {elem.map((e, i) => {
                return this.renderSingleNum(e, i);
              })}
            </KBStyles.KeyboardRow>
          );
        })}
      </div>
    );
  }

  renderKbPassword() {
    return (
      <div>
        {this.renderKbNum()}
        <KBStyles.KeyboardRow>
          <KBStyles.KeyboardItem>{this.props.icon}</KBStyles.KeyboardItem>
          {this.renderSingleNum(0)}
          <KBStyles.KeyboardItem>{this.renderDelBtn()}</KBStyles.KeyboardItem>
        </KBStyles.KeyboardRow>
      </div>
    );
  }

  renderKbCalculator() {
    const KbcItemRight = KBStyles.KeyboardItem.extend`
            height: 112px;
            line-height: 112px;
        `;
    const KbcItemConfirm = KbcItemRight.extend`
      font-size: 18px;
      letter-spacing: 0.45px;
      border: 0;
      background-image: linear-gradient(-180deg, #ff9100 0%, #ff7500 100%);
      color: #fff;
    `;
    const { onHide, onConfirm } = this.props;
    return (
      <KBStyles.KbcContainer>
        <KBStyles.KbcLeft>
          {this.renderKbNum()}
          <KBStyles.KeyboardRow>
            <KBStyles.KeyboardItem onClick={this.concatPoint}>
              <div style={{ color: '#666' }}>.</div>
            </KBStyles.KeyboardItem>
            {this.renderSingleNum(0)}
            <KBStyles.KeyboardItem onClick={onHide}>
              <Icon type="Keyboard" size={24} color="#666" />
            </KBStyles.KeyboardItem>
          </KBStyles.KeyboardRow>
        </KBStyles.KbcLeft>
        <KBStyles.KbcRight>
          <KbcItemRight>{this.renderDelBtn()}</KbcItemRight>
          <KbcItemConfirm onClick={onConfirm}>确定</KbcItemConfirm>
        </KBStyles.KbcRight>
      </KBStyles.KbcContainer>
    );
  }

  render({ type, keyboardCls }) {
    return (
      <KBStyles.KbContainer className={keyboardCls}>
        {type === KEYBOARD_TYPE.PASSWORD && this.renderKbPassword()}
        {type === KEYBOARD_TYPE.CALCULATOR && this.renderKbCalculator()}
      </KBStyles.KbContainer>
    );
  }
}

Keyboard.TYPES = KEYBOARD_TYPE;

export { Keyboard };
