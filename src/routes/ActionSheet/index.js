/**
 * Created by Liqi on 17/9/28.
 */

import { WhiteSpace, ActionSheet, style } from 'pand';
import styled from 'styled-components';

const PageActionSheet = () => {
  const ActionSheetDemo = styled.div`
    > a {
      display: block;
      padding: 1rem;
      background: #fff;
      color: #444;
      ${style.split.bottom};
    }
  `;
  const IconTest = styled.div`
    height: 200px;
    background: ${style.color.orange};
  `;
  let refASTop = null;
  let refASBottom = null;
  return (
    <ActionSheetDemo>
      <WhiteSpace>ActionSheet</WhiteSpace>
      <a
        onClick={() => {
          console.log(refASTop);
          refASTop.show();
        }}
      >
        ActionSheet btn top
      </a>

      <ActionSheet
        ref={c => (refASTop = c)}
        title="选择排序方式"
        onClose={() => {
          console.log('close 应用层回调');
        }}
      >
        <IconTest />
      </ActionSheet>

      <a
        onClick={() => {
          refASBottom.show();
        }}
      >
        ActionSheet btn bottom
      </a>

      <ActionSheet
        ref={c => (refASBottom = c)}
        title="选择排序方式"
        closeBtnPosition={ActionSheet.TYPES.BOTTOM}
        onClose={() => {
          console.log('close 应用层回调');
        }}
      >
        <IconTest />
      </ActionSheet>
    </ActionSheetDemo>
  );
};

export default PageActionSheet;
