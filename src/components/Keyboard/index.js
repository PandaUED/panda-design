/**
 * Created by Liqi on 17/9/30.
 */
import { default as Component } from '../utlis/Component';
import { Icon, style } from '../';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { noop } from 'lodash';

const KEYBOARD_TYPE = {
  PASSWORD: 'password',
  CALCULATOR: 'calculator',
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
    icon: null,
  };

  KeyboardNumArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  KeyboardRow = styled.div`
    height: 56px;
    display: flex;
    line-height: 56px;
  `;
  KeyboardItem = styled.div`
    font-family: SFUIDisplay-Regular;
    font-size: 26px;
    color: #444;
    flex: 1;
    border-right: 1px solid #f8f8f8;
    border-bottom: 1px solid #f8f8f8;
    text-align: center;
  `;

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
    } else {
      if (currValue.length >= numLimit) {
        return;
      }
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
    } else {
      if (!currValue.length) {
        _value = '0.';
      } else {
        _value = currValue + '.';
      }
    }
    this.updateValue(_value);
  }

  renderDelBtn() {
    return (
      <div onClick={this.deleteLastChar}>
        <Icon size={24} type="Delete" />
      </div>
    );
  }

  renderSingleNum(elem, idx = 0) {
    return (
      <this.KeyboardItem key={idx} onClick={() => this.concatString(elem)}>
        {elem}
      </this.KeyboardItem>
    );
  }

  renderKbNum() {
    return (
      <div className="keyboard-numGrp">
        {this.KeyboardNumArr.map((elem, idx) => {
          return (
            <this.KeyboardRow key={idx}>
              {elem.map((e, i) => {
                return this.renderSingleNum(e, i);
              })}
            </this.KeyboardRow>
          );
        })}
      </div>
    );
  }

  renderKbPassword() {
    return (
      <div>
        {this.renderKbNum()}
        <this.KeyboardRow>
          <this.KeyboardItem>{this.props.icon}</this.KeyboardItem>
          {this.renderSingleNum(0)}
          <this.KeyboardItem>{this.renderDelBtn()}</this.KeyboardItem>
        </this.KeyboardRow>
      </div>
    );
  }

  renderKbCalculator() {
    const { onHide, onConfirm } = this.props;
    const Container = styled.div`display: flex;`;
    const Left = styled.div`flex: 3;`;
    const Right = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
    `;
    const RightItem = styled.div`${style.mixins.xmFlexCenter()};`;
    const KeyboardItemRight = this.KeyboardItem.extend`
            height: 112px;
            line-height: 112px;
        `;
    const KeyboardItemConfirm = KeyboardItemRight.extend`
      font-size: 18px;
      letter-spacing: 0.45px;
      border: 0;
      background-image: linear-gradient(-180deg, #ff9100 0%, #ff7500 100%);
      color: #fff;
    `;
    return (
      <Container>
        <Left>
          {this.renderKbNum()}
          <this.KeyboardRow>
            <this.KeyboardItem onClick={this.concatPoint}>.</this.KeyboardItem>
            {this.renderSingleNum(0)}
            <this.KeyboardItem onClick={onHide}>
              <Icon type="Keyboard" size={24} />
            </this.KeyboardItem>
          </this.KeyboardRow>
        </Left>
        <Right>
          <KeyboardItemRight>{this.renderDelBtn()}</KeyboardItemRight>
          <KeyboardItemConfirm onClick={onConfirm}>确定</KeyboardItemConfirm>
        </Right>
      </Container>
    );
  }

  render({ type, keyboardCls }) {
    const KbContainer = styled.div`
      background: #fff;
      border: 1px solid #f8f8f8;
      border-right: 0;
    `;

    return (
      <KbContainer className={keyboardCls}>
        {type === KEYBOARD_TYPE.PASSWORD && this.renderKbPassword()}
        {type === KEYBOARD_TYPE.CALCULATOR && this.renderKbCalculator()}
      </KbContainer>
    );
  }
}

export { Keyboard };
