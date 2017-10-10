/**
 * Created by Liqi on 17/9/30.
 */
import { WhiteSpace, Keyboard, style } from 'pand';
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
      <WhiteSpace>Keyboard</WhiteSpace>
      <a>Keyboard</a>
      <Keyboard handleChange={r => console.log(r)} />
    </KeyboardDemo>
  );
};

export default PageKeyboard;
