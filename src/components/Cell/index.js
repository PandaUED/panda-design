import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
  className: PropTypes.string,
  padding: PropTypes.number,
  margin: PropTypes.number,
  style: PropTypes.oneOf(['large', 'default', 'small']),
  type: PropTypes.string,
};

const Cell = ({ className, children, padding, margin, ...other }) => {
  const Cell = styled.div`
    background: #fff;
    display: -webkit-box;
    ${padding ? `padding:${padding}px;` : ''};
    ${margin ? `margin:${margin}px;` : ''};
  `;

  return (
    <Cell className={className} {...other}>
      {children}
    </Cell>
  );
};

Cell.propTypes = props;

export default Cell;
