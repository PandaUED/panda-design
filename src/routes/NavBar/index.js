import { NavBar, NAVBAR_MODE, style, View, WhiteSpace } from 'pand';
import React from 'react';
import styled from 'styled-components';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: NAVBAR_MODE.WHITE };
  }

  render() {
    const PageView = styled(View)`
      padding-top: 44px;
      > a {
        display: block;
        padding: 1rem;
        background: #fff;
        color: #444;
        ${style.split.bottom};
      }
    `;

    return (
      <PageView>
        <NavBar mode={this.state.mode} />
        <WhiteSpace>Type</WhiteSpace>
        <a onClick={() => this.setState({ mode: NAVBAR_MODE.WHITE })}>White Mode</a>
        <a onClick={() => this.setState({ mode: NAVBAR_MODE.TRANS })}>Trans Mode</a>
      </PageView>
    );
  }
}
