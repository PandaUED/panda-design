import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { style } from '../';

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
  const hasDescStyle = css`
    height: 50px;
    padding-top: 5px;
  `;
  const RadioWrap = styled.div`
    width: 100%;
    background: white;
    height: 44px;
    padding-left: 20px;
    border-bottom: 1px solid ${style.color.split};
    align-items: center;
    position: relative;
    font-size: 15px;
    input[type='radio']:checked + div {
      div:after {
        border-color: ${style.color.blue};
      }
    }
    input[type='radio']:disabled + div {
      opacity: 0.3;
    }

    ${desc && hasDescStyle};
  `;
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
  const RadioDesc = styled.div`
    color: ${style.color.textLight};
    font-size: 12px;
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
      border-color: ${style.color.white};
      transform: rotate(45deg);
      top: 13px;
      right: 36px;
    }
  `;

  return (
    <div>
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
          <div>
            {name}
            {desc && <RadioDesc>{desc}</RadioDesc>}
          </div>
          <RadioIcon className="radioIcon" />
        </Radio>
      </RadioWrap>
    </div>
  );
};

Radio.propTypes = props;

export default Radio;
