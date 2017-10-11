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
        content={
          <div>
            <Timer>重新获取 (41s)</Timer>
            <WhiteSpace transparent size={25} />
            <NoticeBar center visible>
              短信验证码已发至153****3008，请查收
            </NoticeBar>
          </div>
        }
        onPasswordFinish={value => {
          console.log(`input finished, value: ${value}`);
            Toast.sharedInstance.show({
                desc: `input finished, value: ${value}`,
            });
          refCombinePassword.close();
        }}
      />
      {/* <a
                onClick={() => {
                    refCombineCalculator.open()
                }}
            >
                计算器
            </a> */}
      <Combine ref={c => (refCombineCalculator = c)} type="calculator" />
    </CombineDemo>
  );
};

export default PageCombine;
