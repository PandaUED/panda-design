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
  border = true,
  bgColor = style.color.orange,
}) => {
  const BDot = styled.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    background: ${bgColor};
    border: ${border ? '1px solid #fff' : null};
    border-radius: 50%;
  `;
  const BNumber = styled.div`
    display: inline-block;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #fff;
    letter-spacing: 0.34px;
    background: ${bgColor};
    border: ${border ? '1px solid #fff' : null};
    line-height: 1;
    white-space: nowrap;
    transform: scale(0.9);
  `;
  const BNumberSingle = BNumber.extend`
    height: 20px;
    width: 20px;
    line-height: 18px;
    border-radius: 50%;
  `;
  const BNumberDouble = BNumber.extend`
    padding: 3px 6px 2px;
    border-radius: 20px;
  `;

  const BText = styled.div`
    display: inline-block;
    background: ${bgColor};
    border: ${border ? '1px solid #fff' : null};
    border-radius: 8px;
    border-bottom-left-radius: 0;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #fff;
    letter-spacing: 0.34px;
    padding: 2px 6px;
    transform: scale(0.9);
  `;

  switch (type) {
    case BADGE_TYPE.DOT:
      return <BDot className={className} />;
    case BADGE_TYPE.NUMBER:
      const _num =
        overflowNum && parseInt(children, 10) > overflowNum ? `${overflowNum}+` : children;
      return parseInt(children, 10) > 10 || plusBefore ? (
        <BNumberDouble className={className}>
          {plusBefore && '+'}
          {_num}
        </BNumberDouble>
      ) : (
        <BNumberSingle className={className}>{_num}</BNumberSingle>
      );
    case BADGE_TYPE.TEXT:
      return <BText className={className}>{children}</BText>;
    default:
      break;
  }
  return null;
};

Badge.propTypes = BadgeProps;
Badge.TYPES = BADGE_TYPE;

export default Badge;
