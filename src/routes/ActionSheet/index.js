/**
 * Created by Liqi on 17/9/28.
 */

import {
  WhiteSpace,
  ActionSheet,
  ActionSheetSharedInstance,
  style,
} from 'pand';
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
    width: 200px;
    height: 200px;
    background: ${style.color.orange};
  `;
  return (
    <ActionSheetDemo>
      <WhiteSpace>ActionSheet</WhiteSpace>
      <a
        onClick={() => {
          ActionSheet.sharedInstance.show({
            title: '选择排序方式',
            content: <IconTest />,
            onClose: () => {
              console.log('close 应用层回调');
            },
          });
        }}
      >
        ActionSheet btn top
      </a>
      <a
        onClick={() => {
          ActionSheet.sharedInstance.show({
            content: <IconTest />,
            onClose: () => {
              console.log('close 应用层回调');
            },
            closeBtnPosition: 'bottom',
          });
        }}
      >
        ActionSheet btn bottom
      </a>
      <ActionSheetSharedInstance />
    </ActionSheetDemo>
  );
};

export default PageActionSheet;
