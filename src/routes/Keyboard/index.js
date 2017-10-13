/**
 * Created by Liqi on 17/9/30.
 */
import { WhiteSpace, Keyboard, Icon } from 'pand';

const PageKeyboard = () => {
  return (
    <div>
      <WhiteSpace>Keyboard password</WhiteSpace>
      <Keyboard
        type="password"
        icon={<Icon size={24} type="Yes" />}
        onChange={r => console.log(`currValue: ${r}`)}
      />

      <WhiteSpace>Keyboard calculator</WhiteSpace>
      <Keyboard
        type="calculator"
        onChange={r => console.log(`currValue: ${r}`)}
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
