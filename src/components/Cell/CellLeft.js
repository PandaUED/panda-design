import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../';

const props = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

const CellLeft = ({ className, size = 14, color, children, ...other }) => {
  const CellLeft = styled.div`
    display: flex;
    align-items: center;
    font-size: ${size}px;
    ${color ? `color: ${color};` : `color: ${style.color.textLight};`};
    .xmjkIcon {
      margin-right: 6px;
    }
  `;

  return (
    <CellLeft className={className} {...other}>
      {children}
    </CellLeft>
  );
};

CellLeft.propTypes = props;

export default CellLeft;
