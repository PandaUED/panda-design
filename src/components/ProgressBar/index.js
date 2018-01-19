/**
 * Created by Liqi on 18/1/19.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProgressBarWrapper = styled.div`
  position: relative;
  border-radius: 100px;
  width: 100%;
  ${props => {
    return `
      height: ${props.height}px;
      background: ${props.bgColor};
    `;
  }};
`;

const ProgressBarContent = styled.div`
  border-radius: 100px;
  box-sizing: border-box;
  height: 100%;
  ${props => {
    return `
      display: ${props.progress ? 'block' : 'none'};
      width: ${props.progress}%;
      background: ${props.color};
      border: ${props.border};
    `;
  }};
`;

class ProgressBar extends React.Component {
  static propTypes = {
    progress: PropTypes.number,
    height: PropTypes.number,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
    className: PropTypes.string,
    contentCls: PropTypes.string,
  };

  static defaultProps = {
    progress: 0,
    height: 8,
    bgColor: '#EEEEEE;',
    color: 'linear-gradient(225deg, #60EA80 0%, #07CF93 100%);',
    border: null,
    className: null,
    contentCls: null,
  };

  render() {
    const { height, bgColor, color, progress, border, className, contentCls } = this.props;
    return (
      <ProgressBarWrapper {...{ height, bgColor, className }}>
        <ProgressBarContent className={contentCls} {...{ color, height, border, progress }} />
      </ProgressBarWrapper>
    );
  }
}

export { ProgressBar };
