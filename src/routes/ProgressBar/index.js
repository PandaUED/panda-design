/**
 * Created by Liqi on 18/1/19.
 */
import React from 'react';
import styled from 'styled-components';
import { ProgressBar, WhiteSpace, WingBlank } from 'pand';

class PageProgressBar extends React.Component {
  render() {
    return (
      <WingBlank>
        <WhiteSpace />

        <ProgressBar
          progress={50}
          height={14}
          bgColor="#A00B0B"
          color="linear-gradient(-134deg, #FFE516 0%, #FFC40B 100%)"
          border="2px solid #790101"
        />

        <WhiteSpace />

        <ProgressBar progress={50} border="1px solid #07CF93" />
      </WingBlank>
    );
  }
}

export default PageProgressBar;
