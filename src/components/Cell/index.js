import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
  className: PropTypes.string,
  padding: PropTypes.num,
};

const Cell = ({ className, children, ...other }) => {
  const Cell = styled.a`
    background: #fff;
    display: -webkit-box;
    padding: 16px;
  `;

  return (
    <Cell className={className} {...other}>
      {children}
    </Cell>
  );
};

Cell.propTypes = props;

export default Cell;
