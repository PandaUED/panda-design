import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { style } from '../style_index';

const props = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  marginLeft: PropTypes.number,
  desc: PropTypes.node,
  descSize: PropTypes.number,
  descMargin: PropTypes.number,
  descRight: PropTypes.bool,
  descBold: PropTypes.bool,
  descColor: PropTypes.string,
  center: PropTypes.bool,
};

const CellMain = ({
  className,
  size = 16,
  color,
  marginLeft = 12,
  desc,
  descSize = 12,
  descMargin = 8,
  descRight = false,
  descBold = false,
  descColor,
  center,
  children,
  ...other
}) => {
  const descRightMain = css`
    display: flex;
    align-items: center;
  `;
  const CellMainWrap = css`
    display: flex;
    align-items: center;
  `;
  const CellMain = styled.div`
    font-size: ${size}px;
    margin-left: ${marginLeft}px;
    ${color ? `color: ${color};` : `color: ${style.color.textDark};`};
    ${descRight && descRightMain};
    ${center ? `text-align: center;` : `text-align: justify;`};
  `;

  const CellMainDesc = styled.div`
    font-weight: normal;
    font-size: ${descSize}px;
    line-height: ${descSize}px;
    margin-top: ${descMargin}px;
    ${descColor ? `color: ${descColor};` : `color: ${style.color.textLight};`};
    div {
      display: flex;
      align-items: flex-end;
    }
    ${descRight && 'margin-top: 1px;margin-left: 4px;'};
    ${descBold && 'font-weight: bold;'};
  `;

  return (
    <CellMain className={className} {...other}>
      <CellMainWrap>{children}</CellMainWrap>
      {desc && <CellMainDesc className={`${className}-desc`}>{desc}</CellMainDesc>}
    </CellMain>
  );
};

CellMain.propTypes = props;

export default CellMain;
