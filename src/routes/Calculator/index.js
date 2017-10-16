/**
 * Created by Liqi on 17/10/10.
 */

import { WhiteSpace, style, Calculator } from 'pand';
import styled from 'styled-components';

const CalculatorDemo = styled.div`
  > a {
    display: block;
    padding: 1rem;
    background: #fff;
    color: #444;
    ${style.split.bottom};
  }
`;

const PageCalculator = () => {
  let refCalculator = null;

  return (
    <CalculatorDemo>
      <WhiteSpace>Calculator</WhiteSpace>
      <a
        onClick={() => {
          refCalculator.open();
        }}
      >
        打开计算器
      </a>
      <Calculator
        // resetWhenClose
        ref={c => (refCalculator = c)}
        calculateFunc={value => value * 2}
        onClose={() => console.log('Calculator close')}
        onConfirm={() => console.log('Calculator confirm')}
        notice="预期年化收益可能与累计单日收益出现几分钱的误差"
      />
    </CalculatorDemo>
  );
};

export default PageCalculator;
