/**
 * Created by Liqi on 17/9/29.
 */
import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../';

const BadgeProps = {};
const Badge = ({ type = 'number', children = null, overflowNum = 99 }) => {
  const BDot = styled.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    background: ${style.color.orange};
    border: 1px solid #ffffff;
    border-radius: 50%;
  `;
  const BNumber = styled.div`
    display: inline-block;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #ffffff;
    letter-spacing: 0.34px;
    background: #ff6700;
    border: 1px solid #ffffff;
    transform: scale(0.9);
    padding: 0 6px;
    border-radius: 11px;
  `;

  const BText = styled.div`
    display: inline-block;
    background: ${style.color.orange};
    border: 1px solid #ffffff;
    border-radius: 50px;
    border-bottom-left-radius: 0;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #ffffff;
    letter-spacing: 0.34px;
    padding: 2px 4px;
    transform: scale(0.9);
  `;

  switch (type) {
    case 'dot':
      return <BDot />;
    case 'number':
      return (
        <BNumber className="BNumber">
          {overflowNum && parseInt(children, 10) > overflowNum
            ? `${overflowNum}+`
            : children}
        </BNumber>
      );
    case 'text':
      return <BText>{children}</BText>;
    default:
      break;
  }
  return null;
};

Badge.propTypes = BadgeProps;

export default Badge;
