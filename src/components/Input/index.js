import styled from 'styled-components';
import PropTypes from 'prop-types';

const props = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  left: PropTypes.node,
  right: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

// large small square
const Input = ({
  className,
  type = 'small',
  onChange,
  left,
  right,
  placeholder,
  value,
  ...other
}) => {
  if (type !== 'square') {
    const InputWrap = styled.div`
      display: flex;
      background-color: white;
      align-items: center;
      padding: 19px 8px;
    `;
    let Input = styled.input`
      color: #cacaca;
      width: 100%;
      margin-left: 24px;
      font-size: 16px;
      line-height: 16px;
      ::-moz-placeholder {
        color: #cacaca;
      }
      ::-webkit-input-placeholder {
        color: #cacaca;
      }
    `;
    const InputLeft = styled.div`margin-left: 16px;`;
    const InputRight = styled.div`
      font-size: 12px;
      color: #5891ef;
      word-break: keep-all;
      margin-right: 8px;
    `;
    if (type === 'large') {
      Input = Input.extend`
        font-size: 20px;
        line-height: 20px;
        font-weight: bold;
      `;
    }
    return (
      <InputWrap>
        {left && <InputLeft>{left}</InputLeft>}
        <Input
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={e => {
            onChange(e);
          }}
          {...other}
        />
        {right && <InputRight>{right}</InputRight>}
      </InputWrap>
    );
  }

  const InputWrap = styled.div`
    display: flex;
    justify-content: center;
  `;
  const InputBlock = styled.div`
    background: #ffffff;
    border: 0 solid #eeeeee;
    font-size: 36px;
    color: #444444;
    line-height: 54px;
    height: 54px;
    width: 48px;
    text-align: center;
    margin-right: 6px;
  `;
  return (
    <InputWrap>
      <InputBlock>{value[0]}</InputBlock>
      <InputBlock>{value[1]}</InputBlock>
      <InputBlock>{value[2]}</InputBlock>
      <InputBlock>{value[3]}</InputBlock>
      <InputBlock>{value[4]}</InputBlock>
      <InputBlock>{value[5]}</InputBlock>
    </InputWrap>
  );
};

Input.propTypes = props;

export default Input;
