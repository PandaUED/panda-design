import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../';

const props = {
  className: PropTypes.string,
  children: PropTypes.node,
  gutter: PropTypes.number,
  align: PropTypes.string,
};

const Row = ({ className, children = 'example', gutter = 0, align = 'top', ...other }) => {
  const Row = styled.div`
    background-color: ${style.color.bgPage};
    display: flex;
    margin: 0 -${gutter / 2}px;
    > div {
      padding: 0 ${gutter / 2}px;
    }
    align-items: flex-start;
    ${align === 'center' && `align-items: center;`};
    ${align === 'bottom' && `align-items: flex-end;`};
  `;

  return (
    <Row className={className} {...other}>
      {children}
    </Row>
  );
};

Row.propTypes = props;

export default Row;
