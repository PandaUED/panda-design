import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../';

const props = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  right: PropTypes.number,
};

const CellRight = ({ className, size = 13, color, right = 16, children, ...other }) => {
  const CellRight = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    font-weight: normal;
    font-size: ${size}px;
    right: ${right}px;
    ${color ? `color: ${color};` : `color: ${style.color.textNormal};`};
  `;

  return (
    <CellRight className={className} {...other}>
      {children}
    </CellRight>
  );
};

CellRight.propTypes = props;

export default CellRight;
