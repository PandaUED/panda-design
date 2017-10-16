/**
 * Created by Liqi on 17/10/16.
 */

import { WhiteSpace, Password, style, Toast } from 'pand';
import styled from 'styled-components';

const PasswordDemo = styled.div`
  > a {
    display: block;
    padding: 1rem;
    background: #fff;
    color: #444;
    ${style.split.bottom};
  }
`;

const PagePassword = () => {
  let refPassword = null;

  return (
    <PasswordDemo>
      <WhiteSpace>Password</WhiteSpace>
      <a
        onClick={() => {
          refPassword.open();
        }}
      >
        输入验证码
      </a>
      <Password
        ref={c => (refPassword = c)}
        actionBar="重新获取 (41s)"
        onClose={value => console.log(`close 应用层回调, value: ${value}`)}
        notice="短信验证码已发至153****3008，请查收"
        onPasswordFinish={value => {
          console.log(`input finished, value: ${value}`);
          Toast.sharedInstance.show({
            desc: `input finished, value: ${value}`,
          });
          refPassword.close();
        }}
      />
    </PasswordDemo>
  );
};

export default PagePassword;
