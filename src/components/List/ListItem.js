import styled from 'styled-components';
import TouchFeedback from 'rmc-feedback';
import PropTypes from 'prop-types';
import { style } from '../';

const props = {
  className: PropTypes.string,
  split: PropTypes.bool,
  onClick: PropTypes.func,
  padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  border: PropTypes.bool,
};

const ListItem = ({
  className,
  children,
  split = false,
  onClick,
  border,
  padding = true,
  ...other
}) => {
  let ListItem = styled.div`
    background: #fff;
    width: 100%;
    font-size: 16px;
    color: #444444;
    line-height: 16px;
    align-items: center;
    box-shadow: inset 0 0 0 0 #f8f8f8;
    ${padding ? `padding: 16px ${padding}px;` : 'padding: 0;'};
  `;
  if (padding && typeof padding === 'number') {
    ListItem = ListItem.extend`${`padding: 16px ${padding}px;`};`;
  } else if (padding) {
    ListItem = ListItem.extend`padding: 16px 0;`;
  }
  if (split) {
    ListItem = ListItem.extend`
      margin-bottom: 10px;
      box-shadow: inset 0 0 0 0 #f8f8f8;
      ${style.split.bottom};
    `;
  }
  if (border) {
    ListItem = ListItem.extend`border-bottom: #f8f8f8 1px solid;`;
  }

  return (
    <TouchFeedback>
      <ListItem onClick={onClick} className={className} {...other}>
        {children}
      </ListItem>
    </TouchFeedback>
  );
};

ListItem.propTypes = props;

export default ListItem;
