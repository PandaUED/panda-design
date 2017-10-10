/**
 * Author: Ruo
 * Create: 2017-09-28
 * Description: 这是演示页面，展示组件的功能
 */

import { Tabs } from 'pand';
import React from 'react';
import './../../components/Modal/_modal.scss';

export default () => {
  class PageTab extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tabsDataA: [
          { content: '这是有点长的标题' },
          { content: '这是有点长的标题呢' },
          { content: '嗯嗯确实有点长呢' },
          { content: 'TITLE2' },
          { content: 'TITLE3' },
          { content: 'TITLE4' },
          { content: 'TITLE5' },
          { content: 'TITLE6' },
          { content: '哈哈哈哈哈哈果然很长啊' },
          { content: 'TITLE8' },
          { content: 'TITLE9' },
          { content: 'TITLE10' },
          { content: '有我长吗HIAHIAHIAHIAHIAHIAHIA～' },
        ],
        tabsDataB: [
          { content: 'TITLE1' },
          { content: 'TITLE2' },
          { content: 'TITLE3' },
          { content: 'TITLE4' },
        ],
        activeIndexA: 2,
        activeIndexB: 3,
      };
    }
    render() {
      const { tabsDataA, tabsDataB, activeIndexA, activeIndexB } = this.state;
      return (
        <div>
          <Tabs tabsData={tabsDataA} activeIndex={activeIndexA} />
          <Tabs tabsData={tabsDataB} activeIndex={activeIndexB} />
        </div>
      );
    }
  }
  return <PageTab />;
};
