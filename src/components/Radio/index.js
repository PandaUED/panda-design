import styled from 'styled-components';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

const props = {
  className: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  group: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

const Radio = ({
  className,
  group,
  onClick = noop,
  checked,
  disabled,
  desc,
  name,
  value = 'example',
  ...other
}) => {
  const RadioInput = styled.input`
    position: absolute;
    width: 100%;
    -webkit-appearance: none;
    height: 44px;
    z-index: 5;
  `;
  const Radio = styled.div`
    height: 44px;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const RadioWrap = styled.div`
    width: 100%;
    background: white;
    height: 44px;
    padding-left: 20px;
    border-bottom: 1px solid #eee;
    align-items: center;
    input[type='radio']:checked + div {
      div:after {
        border-color: #5891ef;
      }
    }
    input[type='radio']:disabled + div {
      opacity: 0.3;
    }
  `;
  const RadioContent = styled.div`font-size: 15px;`;
  const RadioDesc = styled.div`
    color: #999;
    font-size: 14px;
    margin-top: 5px;
  `;
  const RadioIcon = styled.div`
    width: 24px;
    :after {
      content: ' ';
      width: 6px;
      height: 10px;
      position: absolute;
      border-style: solid;
      border-width: 0 2px 2px 0;
      border-color: #ffffff;
      transform: rotate(45deg);
      top: 13px;
      right: 36px;
    }
  `;

  return (
    <RadioWrap className={className}>
      <RadioInput
        type="radio"
        defaultChecked={checked}
        disabled={disabled}
        name={group}
        value={value}
        onClick={e => onClick(e)}
      />
      <Radio>
        <RadioContent>
          {name}
          {desc && <RadioDesc>{desc}</RadioDesc>}
        </RadioContent>
        <RadioIcon className="radioIcon" />
      </Radio>
    </RadioWrap>
  );
};

Radio.propTypes = props;

export default Radio;
