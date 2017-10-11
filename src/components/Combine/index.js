/**
 * Created by Liqi on 17/10/10.
 */

// import {Component} from 'react';
import { default as Component } from '../utlis/Component';

import { style, Modal, Button, ActionSheet, Input, Keyboard, WhiteSpace } from '../';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import { noop } from 'lodash';

class CombinePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currValue: '',
    };
  }

  render({ content, onPasswordFinish }, { currValue }) {
    return (
      <div>
        <Input size="square" value={currValue} />
        <WhiteSpace transparent />
        {content}
        <Keyboard
          type="password"
          handleChange={r => {
            this.setState(
              {
                currValue: r,
              },
              () => {
                if (r.length >= 6) {
                  onPasswordFinish(r);
                }
              }
            );
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
  }

  static defaultProps = {
    type: 'password', // calculator
    content: null,
    onPasswordFinish: noop,
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

  render({ type, content, onPasswordFinish }) {
    return (
      <div>
        {type === 'password' ? (
          <ActionSheet
            ref={c => (this.refASPassword = c)}
            title="输入验证码"
            onClose={() => {
              console.log('close 应用层回调');
            }}
          >
            <CombinePassword content={content} onPasswordFinish={onPasswordFinish} />
          </ActionSheet>
        ) : (
          <ActionSheet
            ref={c => (this.refASCalculator = c)}
            title="计算器"
            onClose={() => {
              console.log('close 应用层回调');
            }}
          >
            <CombinePassword content={content} onPasswordFinish={onPasswordFinish} />
          </ActionSheet>
        )}
      </div>
    );
  }
}

export { Combine };
