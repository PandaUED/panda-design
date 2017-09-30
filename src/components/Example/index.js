import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../';

const props = {
  children: PropTypes.string,
};

const Example = ({ children = 'example', ...other }) => {
  const Example = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    line-hegiht: 44px;
    text-align: center;
    color: ${style.color.textDeactive};
    background: ${style.color.bgDeactive};
  `;

  return <Example {...other}>{children}</Example>;
};

Example.propTypes = props;

export default Example;
