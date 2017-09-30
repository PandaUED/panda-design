import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

const CellLeft = ({ className, size, color, children, ...other }) => {
  const CellLeft = styled.div`
    display: flex;
    align-items: center;
    ${size ? `font-size: ${size}px;` : 'font-size: 14px;'};
    ${color ? `color: ${color};` : 'color: #999;'};
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
