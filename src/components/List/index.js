import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../';
import ListItem from './ListItem';

const props = {
  className: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
  split: PropTypes.bool,
};

const List = ({
  className,
  children,
  header,
  footer,
  split = true,
  ...other
}) => {
  const List = styled.div`
    background: transparent;
    display: flex;
    flex-direction: column;
  `;

  const ListHeader = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    font-weight: 600;
    height: 54px;
    ${style.text.ellipsis};
    ${split ? style.split.bottom : ''};
  `;

  const ListFooter = styled.div`
    min-height: 44px;
    ${split ? `border-top: 1px solid ${style.color.split}` : ''};
  `;

  return (
    <List className={className} {...other}>
      {header && <ListHeader>{header}</ListHeader>}
      {children}
      {footer && <ListFooter>{footer}</ListFooter>}
    </List>
  );
};

List.Item = ListItem;

List.propTypes = props;

export default List;
