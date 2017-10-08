import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../';
import {
  HorizontalStepItem,
  VerticalStepItem,
  ProgressStepItem,
} from './StepItem';

const props = {
  className: PropTypes.string,
  type: PropTypes.string,
  data: PropTypes.array,
};

const Steps = ({ type, data = [], ...other }) => {
  let Steps = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${style.color.textDeactive};
    background: transparent;
  `;

  if (type === 'vertical') {
    Steps = Steps.extend`flex-direction: column;`;
  }

  return (
    <Steps {...other}>
      {type === 'horizontal' &&
        data.map(item => {
          return (
            <HorizontalStepItem
              type={type}
              key={item.num}
              data={item}
              isFirst={data.indexOf(item) === 0}
              isLast={data.indexOf(item) === data.length - 1}
            />
          );
        })}
      {type === 'vertical' &&
        data.map(item => {
          return (
            <VerticalStepItem
              type={type}
              key={item.num}
              data={item}
              isFirst={data.indexOf(item) === 0}
              isLast={data.indexOf(item) === data.length - 1}
            />
          );
        })}
      {type === 'progress' &&
        data.map(item => {
          return (
            <ProgressStepItem
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
