import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../';

class Switch extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    active: PropTypes.bool,
    disable: PropTypes.bool,
    onChange: PropTypes.func,
  };

  onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    const { className, type, color = '#4dd865', active, disable } = this.props;

    const squareWrap = css`
      input[type='checkbox']:checked + .checkbox:after {
        -webkit-transform: translateX(35px);
        -ms-transform: translateX(35px);
        transform: translateX(35px);
      }
    `;
    const squareSwitch = css`
      width: 72px;
      height: 23px;
      border-radius: 3px;
      background: ${style.color.textDeactive};
      :after {
        width: 35px;
        height: 21px;
        border-radius: 2px;
        box-shadow: none;
        left: 1px;
        top: 1px;
      }
      :before {
        display: none;
      }
    `;
    const SwitchWrap = styled.div`
      box-sizing: border-box;
      position: relative;
      cursor: pointer;
      input {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 50px;
        height: 30px;
        z-index: 3;
        border: 0 none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      input[type='checkbox']:checked + .checkbox {
        background: ${color};
      }
      input[type='checkbox']:checked + .checkbox:before {
        -webkit-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
      }
      input[type='checkbox']:checked + .checkbox:after {
        -webkit-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
      }
      input[type='checkbox']:disabled + .checkbox {
        opacity: 0.3;
      }

      ${type === 'square' && squareWrap};
    `;
    const Switch = styled.div`
      width: 50px;
      height: 30px;
      border-radius: 30px;
      background: ${style.color.split};
      z-index: 0;
      margin: 0;
      padding: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: 0;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      :before,
      :after {
        content: ' ';
        position: absolute;
        left: 1px;
        top: 1px;
        height: 28px;
        border-radius: 28px;
        background: ${style.color.white};
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
      }
      :before {
        width: 48px;
        box-sizing: border-box;
        z-index: 1;
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
      }
      :after {
        width: 28px;
        z-index: 2;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
        box-shadow: 2px 2px 4px ${style.color.placeholder};
      }

      ${type === 'square' && squareSwitch};
    `;

    return (
      <SwitchWrap className={className}>
        <input
          type="checkbox"
          onChange={e => this.onChange(e)}
          disabled={disable}
          defaultChecked={active}
        />
        <Switch className="checkbox" />
      </SwitchWrap>
    );
  }
}

export default Switch;
