import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
  padding: PropTypes.bool,
};

const CardBody = ({ padding = false, children, ...other }) => {
  const CardBody = styled.div`padding: ${padding ? 16 : 0}px;`;
  return <CardBody {...other}>{children}</CardBody>;
};

CardBody.propTypes = props;

export default CardBody;
