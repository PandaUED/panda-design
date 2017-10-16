/**
 * Author: CM & Ruo
 * Create: 2017-10-12
 * Description: 图标组件，可定制大小
 */
import classnames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styled, { css, ThemeProvider } from 'styled-components';

// 单色图标 样式
const singleStyleSheet = css`color: ${({ theme }) => theme.color};`;

// 双色图标 样式
const doubleStyleSheet = css`
  position: relative;
  & > span {
    font-size: inherit;
  }
  // 底层
  & > span:nth-child(1) {
    color: ${({ theme }) => theme.color && theme.color[0]};
  }
  // 上面那一层
  & > span:nth-child(2) {
    position: absolute;
    left: 0;
    top: 0;
    color: ${({ theme }) => theme.color && theme.color[1]};
  }
`;

const IconContainer = styled.span`
  width: ${({ theme }) => theme.size}px;
  height: ${({ theme }) => theme.size}px;
  display: inline-block;
  text-align: center;
  font-size: ${({ theme }) => theme.size}px;
  line-height: ${({ theme }) => theme.size}px;
  ${({ theme }) => (theme.double ? doubleStyleSheet : singleStyleSheet)};
`;

const Icon = ({ className, type, size, color, double = false, ...other }) => {
  const Name = ['Icon', size, _.upperFirst(_.camelCase(type))].join('-');
  return (
    <ThemeProvider theme={{ size, color, double }}>
      <IconContainer
        className={classnames(double ? 'xmjkDoubleIcon' : 'xmjkIcon', Name, className)}
        {...other}
      >
        {double && <span className={`${Name}_1`} />}
        {double && <span className={`${Name}_2`} />}
      </IconContainer>
    </ThemeProvider>
  );
};

Icon.propTypes = {
  size: PropTypes.oneOf([16, 24, 32]).isRequired,
  type: PropTypes.string.isRequired,
  double: PropTypes.bool,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Icon;
