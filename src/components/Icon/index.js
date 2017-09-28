import classnames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
  size: PropTypes.oneOf([16, 24, 32]).isRequired,
  type: PropTypes.string.isRequired,
  double: PropTypes.bool,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

const Icon = ({ size, className, type, double = false, color, ...other }) => {
  const Name = ['Icon', size, _.upperFirst(_.camelCase(type))].join('-');

  const IconBase = styled.span`
    width: ${size}px;
    height: ${size}px;
    display: inline-block;
    font-size: ${size}px;
    text-align: center;
    line-height: ${size}px;
  `;

  if (!double) {
    const IconSingle = IconBase.extend`${color ? `color:${color}` : ''};`;
    return (
      <IconSingle
        className={classnames('xmjkIcon', Name, className)}
        {...other}
      />
    );
  } else {
    const IconDouble = IconBase.extend`position: relative;`;
    const First = IconBase.extend`
      font-size: inherit;
      ${color ? `color:${color[0]}` : ''};
    `;
    const Second = IconBase.extend`
      font-size: inherit;
      ${color ? `color:${color[1]}` : ''};
      position: absolute;
      left: 0;
      top: 0;
    `;
    return (
      <IconDouble className={className} {...other}>
        <First className={classnames('xmjkDoubleIcon', `${Name}_1`)} />
        <Second className={classnames('xmjkDoubleIcon', `${Name}_2`)} />
      </IconDouble>
    );
  }
};

Icon.propTypes = props;

export default Icon;
