/**
 * Created by Liqi on 17/9/29.
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../';

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
};

const Badge = ({ type = 'number', children = null, overflowNum = 99, className = null }) => {
  const BDot = styled.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    background: ${style.color.orange};
    border: 1px solid #fff;
    border-radius: 50%;
  `;
  const BNumber = styled.div`
    display: inline-block;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #fff;
    letter-spacing: 0.34px;
    background: #ff6700;
    border: 1px solid #fff;
    transform: scale(0.9);
    padding: 0 6px;
    border-radius: 11px;
  `;

  const BText = styled.div`
    display: inline-block;
    background: ${style.color.orange};
    border: 1px solid #fff;
    border-radius: 50px;
    border-bottom-left-radius: 0;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #fff;
    letter-spacing: 0.34px;
    padding: 2px 4px;
    transform: scale(0.9);
  `;

  switch (type) {
    case BADGE_TYPE.DOT:
      return <BDot className={className} />;
    case BADGE_TYPE.NUMBER:
      return (
        <BNumber className={className}>
          {overflowNum && parseInt(children, 10) > overflowNum ? `${overflowNum}+` : children}
        </BNumber>
      );
    case BADGE_TYPE.TEXT:
      return <BText className={className}>{children}</BText>;
    default:
      break;
  }
  return null;
};

Badge.propTypes = BadgeProps;

export default Badge;
