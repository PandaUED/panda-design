import styled from 'styled-components';
import PropTypes from 'prop-types';
import { style } from '../';

const props = {
  className: PropTypes.string,
  name: PropTypes.string,
  desc: PropTypes.string,
  active: PropTypes.bool,
  disable: PropTypes.bool,
  onChange: PropTypes.func,
};

const CheckBox = ({
  name = 'example',
  className,
  active,
  disable,
  onChange,
  desc,
  ...other
}) => {
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
        border-color: #5891ef;
        background-color: #5891ef;
      }
      input[type='checkbox']:disabled + .checkboxicon {
        opacity: 0.3;
      }
    }
  `;
  let CheckBoxContent = styled.div``;
  const CheckBoxDesc = styled.div`
    color: #999;
    font-size: 14px;
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
    border: 1px solid #d6d9e0;
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

  if (disable) {
    CheckBoxContent = CheckBoxContent.extend`color: #cacaca;`;
  }

  return (
    <CheckBoxWrap className={className}>
      <CheckBox>
        <div>
          <CheckBoxInput
            type="checkbox"
            {...other}
            disabled={disable}
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
        {name}
        {desc && <CheckBoxDesc>{desc}</CheckBoxDesc>}
      </CheckBoxContent>
    </CheckBoxWrap>
  );
};

CheckBox.propTypes = props;

export default CheckBox;
