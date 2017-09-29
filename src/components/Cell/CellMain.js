import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
  size: PropTypes.number,
  color: PropTypes.string,
  marginLeft: PropTypes.number,
  desc: PropTypes.node,
  descSize: PropTypes.number,
};

const CellMain = ({
  size,
  color,
  marginLeft,
  desc,
  descSize,
  children,
  ...other
}) => {
  const CellMain = styled.div`
    text-align: justify;
    ${size ? `font-size: ${size}px;` : 'font-size: 16px;'};
    ${color ? `color: ${color};` : 'color: #444444;'};
    ${marginLeft ? `margin-left: ${marginLeft}px;` : 'margin-left: 12px;'};
  `;

  const CellMainDesc = styled.div`
    ${descSize ? `font-size: ${descSize}px;` : 'font-size: 12px;'};
    color: #999999;
    margin-top: 13px;
  `;

  return (
    <CellMain {...other}>
      {children}
      {desc && <CellMainDesc>{desc}</CellMainDesc>}
    </CellMain>
  );
};

CellMain.propTypes = props;

export default CellMain;
