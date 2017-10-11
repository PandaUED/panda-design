/**
 * Created by Liqi on 17/10/10.
 */

import { WhiteSpace, Combine, style, NoticeBar, Toast } from 'pand';
import styled from 'styled-components';

const PageCombine = () => {
  const CombineDemo = styled.div`
    > a {
      display: block;
      padding: 1rem;
      background: #fff;
      color: #444;
      ${style.split.bottom};
    }
  `;
  const Timer = styled.div`
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    line-height: 16px;
    margin-left: 30px;
  `;

  let refCombinePassword = null;
  let refCombineCalculator = null;
  return (
    <CombineDemo>
      <WhiteSpace>Combine</WhiteSpace>
      <a
        onClick={() => {
          refCombinePassword.open();
        }}
      >
        输入验证码
      </a>
      <Combine
        ref={c => (refCombinePassword = c)}
        type="password"
        actionBar={
          <div>
            <Timer>重新获取 (41s)</Timer>
            <WhiteSpace transparent size={25} />
          </div>
        }
        onClose={() => console.log('close 应用层回调')}
        notice="短信验证码已发至153****3008，请查收"
        onPasswordFinish={value => {
          console.log(`input finished, value: ${value}`);
          Toast.sharedInstance.show({
            desc: `input finished, value: ${value}`,
          });
          refCombinePassword.close();
        }}
      />
      <a
        onClick={() => {
          refCombineCalculator.open();
        }}
      >
        计算器
      </a>
      <Combine
        ref={c => (refCombineCalculator = c)}
        type="calculator"
        notice="预期年化收益可能与累计单日收益出现几分钱的误差"
        calculateFunc={value => value * 2}
        onClose={() => console.log('Combine close')}
        onConfirm={() => console.log('Combine confirm')}
      />
    </CombineDemo>
  );
};

export default PageCombine;
