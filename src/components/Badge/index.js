/**
 * Created by Liqi on 17/9/29.
 */

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
    text-align: center;
    font-family: PingFangSC-Medium;
    font-size: 9px;
    color: #fff;
    letter-spacing: 0.34px;
    background: #ff6700;
    border: 1px solid #fff;
  `;
  const BNumberSingle = BNumber.extend`
    height: 20px;
    width: 20px;
    line-height: 18px;
    border-radius: 50%;
    //transform: scale(0.9);
  `;
  const BNumberDouble = BNumber.extend`
    padding: 2px 5px;
    border-radius: 9px;
  `;

  const BText = styled.div`
    display: inline-block;
    background: ${style.color.orange};
    border: 1px solid #fff;
    border-radius: 50px;
    border-bottom-left-radius: 0;
    font-family: PingFangSC-Medium;
    font-size: 9px;
    color: #fff;
    letter-spacing: 0.34px;
    padding: 2px 4px;
    //transform: scale(0.9);
  `;

  switch (type) {
    case BADGE_TYPE.DOT:
      return <BDot className={className} />;
    case BADGE_TYPE.NUMBER:
      const _num =
        overflowNum && parseInt(children, 10) > overflowNum ? `${overflowNum}+` : children;
      return parseInt(children, 10) < 10 ? (
        <BNumberSingle>{_num}</BNumberSingle>
      ) : (
        <BNumberDouble className={className}>{_num}</BNumberDouble>
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
