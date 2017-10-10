/**
 * Created by Liqi on 17/9/30.
 */
import { WhiteSpace, Keyboard, style, Icon } from 'pand';
import styled from 'styled-components';

const PageKeyboard = () => {
  const KeyboardDemo = styled.div`
    > a {
      display: block;
      padding: 1rem;
      background: #fff;
      color: #444;
      ${style.split.bottom};
    }
  `;
  return (
    <KeyboardDemo>
      <WhiteSpace>Keyboard password</WhiteSpace>
      <Keyboard
        type="password"
        icon={<Icon size={24} type="Yes" />}
        handleChange={r => console.log(`currValue: ${r}`)}
      />

      <WhiteSpace>Keyboard calculator</WhiteSpace>
      <Keyboard
        type="calculator"
        handleChange={r => console.log(`currValue: ${r}`)}
        onHide={() => {
          console.log(`hide`);
        }}
        onConfirm={() => {
          console.log(`confirm`);
        }}
      />
    </KeyboardDemo>
  );
};

export default PageKeyboard;
