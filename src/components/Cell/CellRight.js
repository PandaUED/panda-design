import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
  size: PropTypes.number,
  color: PropTypes.string,
  right: PropTypes.number,
};

const CellRight = ({ size, color, right, children, ...other }) => {
  const CellRight = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    ${size ? `font-size: ${size}px;` : 'font-size: 13px;'};
    ${color ? `color: ${color};` : 'color: #666D78;'};
    ${right ? `right: ${right}px;` : 'right: 16px;'};
  `;

  return <CellRight {...other}>{children}</CellRight>;
};

CellRight.propTypes = props;

export default CellRight;
