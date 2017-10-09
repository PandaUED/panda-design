import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../';

const props = {
  children: PropTypes.string,
};

const Radio = ({ children = 'example', ...other }) => {
  const Radio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: ${style.color.textDeactive};
    background: ${style.color.bgDeactive};
  `;

  return <Radio {...other}>{children}</Radio>;
};

Radio.propTypes = props;

export default Radio;
