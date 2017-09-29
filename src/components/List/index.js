import PropTypes from 'prop-types';
import styled from 'styled-components';
// import classnames from 'classnames';
import { style } from '../';
import ListItem from './ListItem';

const props = {
  className: PropTypes.string,
  renderHeader: PropTypes.node,
  renderFooter: PropTypes.node,
  split: PropTypes.bool,
};

const List = ({
  className,
  children,
  renderHeader,
  renderFooter,
  split,
  ...other
}) => {
  const List = styled.a`
    background: transparent;
    display: flex;
    flex-direction: column;
  `;

  const ListHeader = styled.div`
    background: #fff;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    font-weight: 600;
    ${style.text.ellipsis};
    ${split ? style.split.bottom : ''};
  `;

  const ListFooter = styled.div`
    min-height: 44px;
    ${split ? `border-top: 1px solid ${style.color.split}` : ''};
  `;

  return (
    <List className={className} {...other}>
      <ListHeader>{renderHeader}</ListHeader>
      {children}
      <ListFooter>{renderFooter}</ListFooter>
    </List>
  );
};

List.Item = ListItem;

List.propTypes = props;

export default List;
