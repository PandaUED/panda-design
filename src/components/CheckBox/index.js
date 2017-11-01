import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '../Icon/index';
import { style } from '../style_index';

const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
`;
const CheckBoxView = styled.div`
  width: 21px;
  height: 21px;
  margin-right: 16px;
  > div {
    position: absolute;
    width: 100%;
    height: 44px;
    input[type='checkbox']:checked + .checkboxicon {
      border-color: ${style.color.blue};
      background-color: ${style.color.blue};
    }
    input[type='checkbox']:disabled + .checkboxicon {
      opacity: 0.3;
    }
  }
`;
const CheckBoxInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  border: 0 none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
const CheckBoxIcon = styled.div`
  position: relative;
  right: 0;
  width: 21px;
  height: 21px;
  border: 1px solid ${style.color.bgDeactive};
  border-radius: 50%;
  -webkit-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  transform: rotate(0deg);
  box-sizing: border-box;
  :after {
    content: ' ';
    width: 6px;
    height: 10px;
    position: absolute;
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: white;
    transform: rotate(45deg);
    left: 6px;
    top: 2px;
  }
`;
const CheckBoxDesc = styled.div`
  color: ${style.color.textLight};
  font-size: 12px;
`;

const SmallCheckBoxView = styled.div`
  width: 16px;
  height: 16px;
  > div {
    position: absolute;
    width: 100%;
    height: 16px;
  }
`;

const SmallCheckBoxContent = styled.div`
  font-size: 12px;
  line-height: 16px;
  margin-left: 6px;
  color: #999999;
`;

const SmallCheckBoxAgreement = styled.span`color: #444444;`;

class CheckBox extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    type: PropTypes.string,
  };
  static defaultProps = {
    title: 'example',
    type: 'default',
  };

  state = {
    checked: this.props.active,
  };

  onChange(e) {
    this.setState({
      checked: e.target.checked,
    });
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }
  render() {
    const { title, disabled, desc, className, type, active, ...other } = this.props;

    const CheckBoxContent = styled.div`
      color: ${disabled ? style.color.placeholder : style.color.textDark};
    `;

    if (type === 'small') {
      return (
        <CheckBoxWrap className={className}>
          <SmallCheckBoxView>
            <div>
              <CheckBoxInput
                type="checkbox"
                {...other}
                disabled={disabled}
                defaultChecked={active}
                onChange={e => {
                  this.onChange(e);
                }}
              />
              <div className="smallcheckboxicon">
                {this.state.checked ? (
                  <Icon size={16} type="Confirm" />
                ) : (
                  <Icon size={16} type="NoConfirm" />
                )}
              </div>
            </div>
          </SmallCheckBoxView>
        </CheckBoxWrap>
      );
    }
    return (
      <CheckBoxWrap className={className}>
        <CheckBoxView>
          <div>
            <CheckBoxInput
              type="checkbox"
              {...other}
              disabled={disabled}
              defaultChecked={active}
              onChange={e => {
                this.onChange(e);
              }}
            />
            <CheckBoxIcon className="checkboxicon" />
          </div>
        </CheckBoxView>
        <CheckBoxContent>
          {title}
          {desc && <CheckBoxDesc>{desc}</CheckBoxDesc>}
        </CheckBoxContent>
      </CheckBoxWrap>
    );
  }
}

export default CheckBox;
