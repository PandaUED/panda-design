import PropTypes from 'prop-types';
import styled from 'styled-components';
import CellLeft from './CellLeft';
import CellMain from './CellMain';
import CellRight from './CellRight';

const props = {
  className: PropTypes.string,
  padding: PropTypes.number,
  margin: PropTypes.number,
  along: PropTypes.bool,
  center: PropTypes.bool,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  bold: PropTypes.bool,
};

const Cell = ({
  className,
  children,
  padding,
  margin,
  color,
  center,
  fontSize,
  bold,
  along = false,
  ...other
}) => {
  let Cell = styled.div`
    background: #fff;
    display: flex;
    ${fontSize ? `font-size: ${fontSize}px;` : 'font-size: 14px;'};
    align-items: center;
    ${color ? `color:${color};` : 'color: #444;'};
    ${margin ? `margin:0 ${margin}px;` : ''};
  `;

  if (along) {
    Cell = Cell.extend`
      border-bottom: #f8f8f8 1px solid;
      ${padding ? `padding:${padding}px;` : 'padding:16px;'};
    `;
  }

  if (center) {
    Cell = Cell.extend`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `;
  }

  if (bold) {
    Cell = Cell.extend`font-weight: bold;`;
  }

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
