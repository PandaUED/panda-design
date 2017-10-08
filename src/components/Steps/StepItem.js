import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '../index';

const props = {
  className: PropTypes.string,
  data: PropTypes.object,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  color: PropTypes.string,
  deg: PropTypes.string,
};

// 横版步骤
const HorizontalStepItem = ({
  data,
  isFirst = false,
  isLast = false,
  ...other
}) => {
  const StepItem = styled.div`
    margin: 0;
    color: #cacaca;
    display: flex;
  `;

  let PlaceHolder = styled.div`
    width: 48px;
    height: 1px;
    margin-top: 12px;
  `;
  let StepIcon = styled.div`
    height: 24px;
    width: 24px;
    font-size: 14px;
    border-radius: 12px;
    text-align: center;
    line-height: 24px;
    margin: 0 auto;
  `;
  let StepName = styled.div`
    font-size: 12px;
    line-height: 12px;
    margin-top: 6px;
  `;

  if (data.status === 'active') {
    PlaceHolder = PlaceHolder.extend`background-color: #5891ef;`;
    StepName = StepName.extend`color: #5891ef;`;
    StepIcon = StepIcon.extend`
      color: white;
      background-color: #5891ef;
    `;
  }

  return (
    <StepItem {...other}>
      {!isFirst && <PlaceHolder />}
      <div {...other}>
        <StepIcon>{data.num}</StepIcon>
        <StepName>{data.name}</StepName>
      </div>
      {!isLast && <PlaceHolder />}
    </StepItem>
  );
};

// 竖版步骤
const VerticalStepItem = ({
  data,
  isFirst = false,
  isLast = false,
  ...other
}) => {
  const StepItem = styled.div`
    margin: 0;
    color: #cacaca;
    display: flex;
    div {
      display: flex;
      flex-direction: column;
    }
  `;

  let PlaceHolder = styled.div`
    width: 1px;
    height: 16px;
    margin-left: 11px;
  `;
  let StepIcon = styled.div`
    height: 24px;
    width: 24px;
    font-size: 14px;
    border-radius: 12px;
    text-align: center;
    line-height: 24px;
    margin: 0 auto;
  `;
  let StepName = styled.div`
    font-size: 15px;
    color: #666666;
    line-height: 15px;
    margin-left: 16px;
  `;
  let StepDesc = styled.div`
    margin-top: 3px;
    font-size: 12px;
    color: #999999;
    line-height: 12px;
    margin-left: 16px;
  `;
  let StepContent = styled.div`margin-top: 16px;`;
  if (isFirst) {
    StepContent = StepContent.extend`margin-top: 0;`;
  }

  if (data.status === 'finish') {
    PlaceHolder = PlaceHolder.extend`background-color: #5891ef;`;
    StepIcon = StepIcon.extend`color: #5891ef;`;
  }

  if (data.status === 'active') {
    PlaceHolder = PlaceHolder.extend`background-color: #5891ef;`;
    StepIcon = StepIcon.extend`color: #5891ef;`;
    StepName = StepName.extend`color: #5891ef;`;
  }

  if (data.status === 'error') {
    PlaceHolder = PlaceHolder.extend`background-color: #ff5f5f;`;
    StepIcon = StepIcon.extend`color: #ff5f5f;`;
  }

  return (
    <StepItem {...other}>
      <div>
        {!isFirst && <PlaceHolder />}
        <StepIcon>
          <Icon size={24} type={data.icon} />
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
const ProgressStepItem = ({ data, color, deg, isLast = false, ...other }) => {
  let StepItem = styled.div`
    margin: 0;
    color: #cacaca;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    ${data.rate ? `width: ${data.rate}` : ''};
  `;

  let PlaceHolder = styled.div`
    width: 48px;
    height: 15px;
    margin-top: 12px;
    border-color: #d6d9e0;
    border-left: 1px solid;
    border-top: 1px solid;
  `;
  let PlaceHolderRight = PlaceHolder.extend`
    border-left: 0;
    border-right: 1px solid;
    border-top: 1px solid;
  `;
  let StepInfo = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  let StepContent = styled.div`
    background-color: #d6d9e0;
    color: white;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
  `;
  let StepName = styled.div`
    font-size: 12px;
    line-height: 12px;
    margin-top: 6px;
    color: #828994;
  `;
  let StepRight = styled.div`
    div + div {
      float: right;
    }
  `;

  if (data.status === 'active') {
    PlaceHolder = PlaceHolder.extend`
      ${color ? `border-color: ${color}` : 'border-color: #5891EF'};
    `;
    StepName = StepName.extend`
      ${color ? `color: ${color}` : 'color: #5891EF'};
    `;
    StepContent = StepContent.extend`
      ${color
        ? `background-image: linear-gradient(-45deg, ${deg} 0%, ${color} 100%);`
        : 'background-image: linear-gradient(-45deg, #00B6FF 0%, #3F94F7 100%)'};
    `;
  }

  if (!isLast) {
    StepItem = StepItem.extend`margin-right: 2px;`;
  }

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
