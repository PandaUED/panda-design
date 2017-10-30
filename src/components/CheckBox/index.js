import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../style_index';

const props = {
  className: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

const CheckBox = ({ title = 'example', className, active, disabled, onChange, desc, ...other }) => {
  const CheckBoxWrap = styled.div`
    display: flex;
    align-items: center;
  `;
  const CheckBox = styled.div`
    width: 21px;
    height: 21px;
    margin-right: 16px;
    > div {
      position: absolute;
      width: 100%;
      height: 44px;
      input[type='checkbox']:checked + .checkboxicon {
        border-color: ${style.color.blue};
        background-color: ${style.color.blue};
      }
      input[type='checkbox']:disabled + .checkboxicon {
        opacity: 0.3;
      }
    }
  `;
  const CheckBoxInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    border: 0 none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  `;
  const CheckBoxIcon = styled.div`
    position: relative;
    right: 0;
    width: 21px;
    height: 21px;
    border: 1px solid ${style.color.bgDeactive};
    border-radius: 50%;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    box-sizing: border-box;
    :after {
      content: ' ';
      width: 6px;
      height: 10px;
      position: absolute;
      border-style: solid;
      border-width: 0 1px 1px 0;
      border-color: white;
      transform: rotate(45deg);
      left: 6px;
      top: 2px;
    }
  `;
  const CheckBoxContent = styled.div`
    color: ${style.color.textDark};
    ${disabled && `color: ${style.color.placeholder};`};
  `;
  const CheckBoxDesc = styled.div`
    color: ${style.color.textLight};
    font-size: 12px;
  `;

  return (
    <CheckBoxWrap className={className}>
      <CheckBox>
        <div>
          <CheckBoxInput
            type="checkbox"
            {...other}
            disabled={disabled}
            defaultChecked={active}
            onChange={e => {
              if (onChange) {
                onChange(e);
              }
            }}
          />
          <CheckBoxIcon className="checkboxicon" />
        </div>
      </CheckBox>
      <CheckBoxContent>
        {title}
        {desc && <CheckBoxDesc>{desc}</CheckBoxDesc>}
      </CheckBoxContent>
    </CheckBoxWrap>
  );
};

CheckBox.propTypes = props;

export default CheckBox;
