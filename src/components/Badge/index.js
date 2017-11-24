/**
 * Created by Liqi on 17/9/29.
 */

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../style_index';

const BADGE_TYPE = {
  NUMBER: 'number',
  DOT: 'dot',
  TEXT: 'text',
};

const BADGE_STYLES = {
  BDot: styled.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    background: ${props => props.bgColor};
    border: ${props => (props.border ? '1px solid #fff' : null)};
    border-radius: 50%;
  `,
  BNumber: styled.div`
    display: inline-block;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #fff;
    letter-spacing: 0.34px;
    background: ${props => props.bgColor};
    border: ${props => (props.border ? '1px solid #fff' : null)};
    white-space: nowrap;
    transform: ${props => `scale(${props.scale})`};
    height: 20px;
    line-height: 20px;
    ${props => {
      if (props.double) {
        return 'padding: 0 7px; border-radius: 20px;';
      } else {
        return 'width: 20px; border-radius: 50%;';
      }
    }};
  `,

  BText: styled.div`
    display: inline-block;
    background: ${props => props.bgColor};
    border: ${props => (props.border ? '1px solid #fff' : null)};
    border-radius: 8px;
    border-bottom-left-radius: 0;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #fff;
    letter-spacing: 0.34px;
    padding: 2px 7px;
    transform: scale(0.7);
  `,
};

const BadgeProps = {
  type: PropTypes.string,
  children: PropTypes.node,
  overflowNum: PropTypes.number,
  className: PropTypes.string,
  plusBefore: PropTypes.bool,
};

const Badge = ({
  type = 'number',
  children = null,
  overflowNum = 99,
  className = null,
  plusBefore = false,
  scale = 0.7,
  border = false,
  bgColor = style.color.orange,
}) => {
  switch (type) {
    case BADGE_TYPE.DOT:
      return <BADGE_STYLES.BDot className={className} bgColor={bgColor} border={border} />;
    case BADGE_TYPE.NUMBER:
      const _num =
        overflowNum && parseInt(children, 10) > overflowNum ? `${overflowNum}+` : children;
      return (
        <BADGE_STYLES.BNumber
          className={className}
          bgColor={bgColor}
          border={border}
          scale={scale}
          double={parseInt(children, 10) > 10 || plusBefore}
        >
          {plusBefore && '+'}
          {_num}
        </BADGE_STYLES.BNumber>
      );
    case BADGE_TYPE.TEXT:
      return (
        <BADGE_STYLES.BText className={className} bgColor={bgColor} border={border}>
          {children}
        </BADGE_STYLES.BText>
      );
    default:
      break;
  }
  return null;
};

Badge.propTypes = BadgeProps;
Badge.TYPES = BADGE_TYPE;

export default Badge;
