import styled from 'styled-components';
import PropTypes from 'prop-types';

const props = {
  className: PropTypes.string,
  type: PropTypes.string,
  data: PropTypes.object,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
};

const StepItem = ({
  type,
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

  if (type === 'horizontal') {
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
  } else if (type === 'vertical') {
    return (
      <StepItem {...other}>
        <StepIcon>{data.num}</StepIcon>
        <StepName>{data.name}</StepName>
      </StepItem>
    );
  } else if (type === 'progress') {
    return (
      <StepItem {...other}>
        <StepIcon>{data.num}</StepIcon>
        <StepName>{data.name}</StepName>
      </StepItem>
    );
  }

  console.log(data);
  return <div>发生错误，具体见console。</div>;
};

StepItem.propTypes = props;

export default StepItem;
