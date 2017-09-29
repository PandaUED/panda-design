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
  type: PropTypes.oneOf(['avatar', 'note', 'timeList']),
};

const Cell = ({
  className,
  children,
  padding,
  margin,
  along = false,
  type,
  ...other
}) => {
  let Cell = styled.div`
    background: #fff;
    display: flex;
    ${margin ? `margin:${margin}px;` : ''};
  `;

  if (along) {
    Cell = Cell.extend`
      border-bottom: #f8f8f8 1px solid;
      ${padding ? `padding:${padding}px;` : ''};
    `;
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
