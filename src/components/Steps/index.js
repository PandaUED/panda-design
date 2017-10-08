import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../';
import { default as StepItem } from './StepItem';

const props = {
  className: PropTypes.string,
  type: PropTypes.string,
  data: PropTypes.array,
};

const Steps = ({ children = 'example', type, data = [], ...other }) => {
  const Steps = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${style.color.textDeactive};
    background: transparent;
  `;

  return (
    <Steps {...other}>
      {data.map(item => {
        return (
          <StepItem
            type={type}
            key={item.num}
            data={item}
            isFirst={data.indexOf(item) === 0}
            isLast={data.indexOf(item) === data.length - 1}
          />
        );
      })}
    </Steps>
  );
};

Steps.propTypes = props;

export default Steps;
