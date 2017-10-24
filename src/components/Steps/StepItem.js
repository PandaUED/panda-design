import styled, { css } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { style } from '../style_index';

const props = {
  className: PropTypes.string,
  data: PropTypes.object,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  color: PropTypes.string,
};

const iconList = {
  finish: 'StepDone',
  active: 'StepDoing',
  holding: 'StepNormal',
  error: 'StepWrong',
};

// 横版步骤
const HorizontalStepItem = ({ data, isFirst = false, isLast = false, ...other }) => {
  const activeIcon = css`
    color: ${style.color.white};
    background-color: ${style.color.blue};
  `;
  const StepItem = styled.div`
    margin: 0;
    color: ${style.color.placeholder};
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      display: flex;
    }
  `;
  const PlaceHolder = styled.div`
    width: 48px;
    height: 1px;
    margin-top: 12px;
    background-color: ${style.color.bgPage};
    ${(data.status === 'active' || data.status === 'finish') &&
      `background-color: ${style.color.blue};`};
  `;
  const WhitePlaceHolder = PlaceHolder.extend`background-color: transparent;`;
  const StepIcon = styled.div`
    height: 24px;
    width: 24px;
    font-size: 14px;
    border-radius: 12px;
    text-align: center;
    line-height: 24px;
    margin: 0 auto;
    background-color: ${style.color.bgPage};
    ${(data.status === 'active' || data.status === 'finish') && activeIcon};
  `;
  const StepName = styled.div`
    font-size: 12px;
    line-height: 12px;
    margin-top: 6px;
    ${(data.status === 'active' || data.status === 'finish') && `color: ${style.color.blue};`};
  `;

  return (
    <StepItem {...other}>
      <div>
        {isFirst ? <WhitePlaceHolder /> : <PlaceHolder />}
        <StepIcon>
          {data.status !== 'finish' && data.num}
          {data.status === 'finish' && <Icon size={24} type={iconList[data.status]} />}
        </StepIcon>
        {isLast ? <WhitePlaceHolder /> : <PlaceHolder />}
      </div>
      <StepName>{data.name}</StepName>
    </StepItem>
  );
};

// 竖版步骤
const VerticalStepItem = ({ data, isFirst = false, isLast = false, ...other }) => {
  const StepItem = styled.div`
    margin: 0;
    color: ${style.color.placeholder};
    display: flex;
    div {
      display: flex;
      flex-direction: column;
    }
  `;
  const PlaceHolder = styled.div`
    width: 1px;
    height: 16px;
    margin-left: 11px;
    background-color: ${style.color.bgPage};
    ${data.status === 'finish' && `background-color: ${style.color.blue};`};
    ${data.status === 'active' && `background-color: ${style.color.blue};`};
    ${data.status === 'error' && `background-color: ${style.color.red};`};
  `;
  const StepIcon = styled.div`
    height: 24px;
    width: 24px;
    font-size: 14px;
    border-radius: 12px;
    text-align: center;
    line-height: 24px;
    margin: 0 auto;
    color: ${style.color.placeholder};
    background-color: ${style.color.bgPage};
    ${data.status === 'finish' && `background-color: ${style.color.blue};color: white;`};
    ${data.status === 'active' && `background-color: ${style.color.blue};color: white;`};
    ${data.status === 'error' && `background-color: ${style.color.red};color: white;`};
  `;
  const StepName = styled.div`
    font-size: 15px;
    color: ${style.color.textNormal};
    line-height: 15px;
    margin-left: 16px;
    ${data.status === 'active' && `color: ${style.color.blue};`};
  `;
  const StepDesc = styled.div`
    margin-top: 3px;
    font-size: 12px;
    color: ${style.color.textLight};
    line-height: 12px;
    margin-left: 16px;
  `;
  const StepContent = styled.div`${isFirst ? 'margin-top: 0;' : 'margin-top: 16px;'};`;

  return (
    <StepItem {...other}>
      <div>
        {!isFirst && <PlaceHolder />}
        <StepIcon>
          <Icon size={24} type={iconList[data.status]} />
        </StepIcon>
        {!isLast && <PlaceHolder />}
      </div>
      <StepContent>
        <StepName>{data.name}</StepName>
        <StepDesc>{data.desc}</StepDesc>
      </StepContent>
    </StepItem>
  );
};

// 横版进度
const ProgressStepItem = ({ data, color, isLast = false, ...other }) => {
  const StepItem = styled.div`
    margin: 0;
    color: ${style.color.placeholder};
    display: flex;
    flex-direction: column;
    background-color: ${style.color.white};
    ${data.rate ? `width: ${data.rate}` : ''};
    ${!isLast && 'margin-right: 2px;'};
  `;
  const PlaceHolder = styled.div`
    width: 48px;
    height: 15px;
    margin-top: 12px;
    border-color: ${style.color.bgDeactive};
    border-left: 1px solid;
    border-top: 1px solid;
    ${data.status === 'active' &&
      `${color ? `border-color: ${style.color[color]}` : `border-color: ${style.color.blue}`};`};
  `;
  const PlaceHolderRight = PlaceHolder.extend`
    border-left: 0;
    border-right: 1px solid;
    border-top: 1px solid;
  `;
  const StepInfo = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const StepContent = styled.div`
    background-color: ${style.color.bgDeactive};
    color: ${style.color.white};
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    ${data.status === 'active' &&
      `${color
        ? `background-image: ${style.gradient[color](120)};`
        : `background-image: ${style.gradient['blue'](120)}`};`};
  `;
  const StepName = styled.div`
    font-size: 12px;
    line-height: 12px;
    margin-top: 6px;
    color: ${style.color.darkGrey};
    ${data.status === 'active' &&
      `${color ? `color: ${style.color[color]}` : `color: ${style.color.blue}`};`};
  `;
  const StepRight = styled.div`
    div + div {
      float: right;
    }
  `;

  return (
    <StepItem {...other}>
      <StepInfo>
        <div>
          <StepName>{data.time}</StepName>
          <StepName>{data.desc}</StepName>
        </div>
        {data.right && (
          <StepRight>
            <StepName>{data.right.time}</StepName>
            <StepName>{data.right.desc}</StepName>
          </StepRight>
        )}
      </StepInfo>
      <StepInfo>
        <PlaceHolder />
        {data.right && <PlaceHolderRight />}
      </StepInfo>
      <StepContent>{data.name}</StepContent>
    </StepItem>
  );
};

HorizontalStepItem.propTypes = props;
VerticalStepItem.protoTypes = props;
ProgressStepItem.propTypes = props;

export { HorizontalStepItem, VerticalStepItem, ProgressStepItem };
