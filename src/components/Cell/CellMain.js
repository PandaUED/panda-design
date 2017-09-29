import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
  size: PropTypes.number,
  color: PropTypes.string,
  marginLeft: PropTypes.number,
  desc: PropTypes.node,
};

const CellMain = ({ size, color, marginLeft, desc, children, ...other }) => {
  const CellMain = styled.div`
    text-align: justify;
    ${size ? `font-size: ${size}px;` : 'font-size: 16px;'};
    ${color ? `color: ${color};` : 'color: #444444;'};
    ${marginLeft ? `margin-left: ${marginLeft}px;` : 'margin-left: 13px;'};
  `;

  const CellMainDesc = styled.div`
    ${size ? `font-size: ${size}px;` : 'font-size: 12px;'};
    ${color ? `color: ${color};` : 'color: #999999;'};
  `;

  return (
    <CellMain {...other}>
      {children}
      <CellMainDesc>{desc}</CellMainDesc>
    </CellMain>
  );
};

CellMain.propTypes = props;

export default CellMain;
