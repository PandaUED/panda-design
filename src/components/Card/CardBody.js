import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
  padding: PropTypes.bool,
};

const CardBodyStyle = styled.div``;

const CardBody = ({ padding = false, children, ...other }) => {
  let CardBodyStyleExtend = CardBodyStyle;
  if (padding) {
    CardBodyStyleExtend = CardBodyStyle.extend`padding: 16px;`;
  }

  return <CardBodyStyleExtend {...other}>{children}</CardBodyStyleExtend>;
};

CardBody.propTypes = props;

export default CardBody;
