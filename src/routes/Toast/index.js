/**
 * Created by Liqi on 17/9/27.
 */

import { WhiteSpace, Toast, ToastSharedInstance, style } from 'pand';
import styled from 'styled-components';

const ToastDemo = () => {
  const IconTest = styled.div`
    width: 40px;
    height: 40px;
    background: ${style.color.orange};
  `;
  const ToastD = styled.div`
    > a {
      display: block;
      padding: 1rem;
      background: #fff;
      color: #444;
      ${style.split.bottom};
    }
  `;
  return (
    <ToastD>
      <WhiteSpace>Toast</WhiteSpace>
      <a
        onClick={() => {
          Toast.sharedInstance.show({
            desc: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
            button: 'OK',
            icon: <IconTest />,
          });
        }}
      >
        Toast WITH Button (3s)
      </a>
      <a
        onClick={() => {
          Toast.sharedInstance.show({
            desc: '内容内容',
            icon: <IconTest />,
          });
        }}
      >
        Toast NO Button (1s)
      </a>
      <a
        onClick={() => {
          Toast.sharedInstance.show({
            desc: '内容内容',
            duration: 5000,
          });
        }}
      >
        Toast Set Time (5s)
      </a>
      {/* <ToastSharedInstance /> */}
    </ToastD>
  );
};

export default ToastDemo;
