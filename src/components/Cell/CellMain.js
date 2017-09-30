import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  marginLeft: PropTypes.number,
  desc: PropTypes.node,
  descSize: PropTypes.number,
  descMargin: PropTypes.number,
};

const CellMain = ({
  className,
  size,
  color,
  marginLeft,
  desc,
  descSize,
  descMargin,
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
    color: #999999;
    div {
      display: flex;
      align-items: flex-end;
    }
    ${descSize ? `font-size: ${descSize}px;` : 'font-size: 12px;'};
    ${descMargin ? `margin-top: ${descMargin}px;` : 'margin-top: 8px;'};
  `;

  return (
    <CellMain className={className} {...other}>
      {children}
      {desc && (
        <CellMainDesc className={`${className}-desc`}>{desc}</CellMainDesc>
      )}
    </CellMain>
  );
};

CellMain.propTypes = props;

export default CellMain;
