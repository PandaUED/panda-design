/**
 * Created by Liqi on 17/9/30.
 */
// import { Component } from 'react';
// import { Component } from '../';
import { default as Component } from '../utlis/Component';
import { style, Modal, Button } from '../';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

class Keyboard extends Component {
  static defaultProps = {
    children: null,
    KeyboardCls: null,
    handleChange: null,
  };

  render({ handleChange }) {
    console.log(handleChange);
    // console.log(handleChange)

    return <div onClick={() => handleChange('ddd')}>Keyboard</div>;
  }
}

// function KeyboardSharedInstance() {
//     return (
//         <Keyboard
//             ref={c => {
//                 Keyboard.sharedInstance = c;
//             }}
//         />
//     );
// }

export {
  Keyboard,
  // KeyboardSharedInstance,
};
