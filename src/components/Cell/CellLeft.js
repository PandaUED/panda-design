import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const CellLeft = ({ size, color, children, ...other }) => {
  const CellLeft = styled.div`
    display: flex;
    ${size ? `font-size: ${size}px;` : 'font-size: 14px;'};
    ${color ? `color: ${color};` : 'color: #999999;'};
  `;

  return <CellLeft {...other}>{children}</CellLeft>;
};

CellLeft.propTypes = props;

export default CellLeft;
