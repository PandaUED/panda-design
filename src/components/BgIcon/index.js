/**
 * Created by Liqi on 18/1/12.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '../Icon/index';
import { style } from '../style_index';

const ICON_SHAPE = {
  ROUND: 'round',
  SQUARE: 'square',
};

const BgIconStyle = styled.div`
  ${style.mixins.xmFlexCenter()};
  display: inline-flex;
  ${props => {
    return `
        height: ${props.bgSize}px;
        width: ${props.bgSize}px;
        background: ${props.bgColor};
        margin-right: ${props.marginRight}px;
        border-radius: ${props.shape === ICON_SHAPE.ROUND ? '50%' : '4px'};
    `;
  }};
`;

const BgIconContent = styled.div`
  color: #fff;
  font-size: 28px;
  display: inline-flex;
  .iconfont-extend {
    margin-right: 0;
  }
`;

class BgIcon extends React.Component {
  static propTypes = {
    bgSize: PropTypes.number,
    bgColor: PropTypes.string,
    shape: PropTypes.string,
    marginRight: PropTypes.number,
    className: PropTypes.string,
    size: PropTypes.number,
    type: PropTypes.string,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    double: PropTypes.bool,
    iconClassName: PropTypes.string,
  };
  static defaultProps = {
    bgSize: 40,
    bgColor: '#FF6700',
    shape: ICON_SHAPE.ROUND,
    marginRight: 0,
    className: null,
    size: 24,
    type: null,
    color: null,
    double: false,
    iconClassName: null,
  };

  render() {
    const { size, color, type, double, iconClassName } = this.props;
    let _iconColor = color;
    if (!color) {
      _iconColor = double ? ['#fff', 'rgba(255,255,255,0.5)'] : '#fff';
    }
    return (
      <BgIconStyle {...this.props}>
        {type && (
          <Icon
            size={size}
            type={type}
            color={_iconColor}
            double={double}
            className={iconClassName}
          />
        )}
        <BgIconContent>{this.props.children}</BgIconContent>
      </BgIconStyle>
    );
  }
}

BgIcon.SHAPE = ICON_SHAPE;

export { BgIcon };
