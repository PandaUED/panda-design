/**
 * Created by Liqi on 17/9/30.
 */
import { WhiteSpace, Keyboard, style, Icon } from 'pand';
import styled from 'styled-components';

const PageKeyboard = () => {
  return (
    <div>
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
    </div>
  );
};

export default PageKeyboard;
