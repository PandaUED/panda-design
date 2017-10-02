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
        tabsA: [
          { content: '这是有点长的标题' },
          { content: 'TITLE2' },
          { content: 'TITLE3' },
          { content: 'TITLE4' },
          { content: 'TITLE5' },
          { content: 'TITLE6' },
          { content: 'TITLE7' },
          { content: 'TITLE8' },
          { content: 'TITLE9' },
          { content: 'TITLE10' },
          { content: 'TITLE11' },
        ],
        tabsB: [
          { content: 'TITLE1' },
          { content: 'TITLE2' },
          { content: 'TITLE3' },
          { content: 'TITLE4' },
        ],
        activeIndex: 3,
      };
    }
    render() {
      const { tabsA, tabsB, activeIndex } = this.state;
      return (
        <div>
          <Tabs tabsData={tabsA} activeIndex={activeIndex} />
          <Tabs tabsData={tabsB} activeIndex={activeIndex} />
        </div>
      );
    }
  }
  return <PageTab />;
};
