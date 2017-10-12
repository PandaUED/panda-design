import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { style } from '../';
import CellLeft from './CellLeft';
import CellMain from './CellMain';
import CellRight from './CellRight';

const props = {
  className: PropTypes.string,
  padding: PropTypes.number,
  alone: PropTypes.bool,
  center: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  bold: PropTypes.bool,
  large: PropTypes.bool,
};

const Cell = ({
  className,
  children,
  padding,
  color,
  center,
  fontSize,
  bold,
  large,
  alone = false,
  ...other
}) => {
  const aloneCell = css`
    border-bottom: ${style.color.bgPage} 1px solid;
    ${padding ? `padding:${padding}px;` : 'padding:16px;'};
  `;
  const centerCell = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;
  const Cell = styled.div`
    background: ${style.color.white};
    display: flex;
    ${fontSize ? `font-size: ${fontSize}px;` : 'font-size: 14px;'};
    align-items: center;
    ${color ? `color:${color};` : `color: ${style.color.textDark};`};
    ${bold && 'font-weight: bold;'};
    ${alone && aloneCell};
    ${center && centerCell};
    ${large && 'min-height: 65px'};
  `;

  return (
    <Cell className={className} {...other}>
      {children}
    </Cell>
  );
};

Cell.Left = CellLeft;
Cell.Main = CellMain;
Cell.Right = CellRight;

Cell.propTypes = props;

export default Cell;
