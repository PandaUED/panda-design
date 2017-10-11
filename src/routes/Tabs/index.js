/**
 * Author: Ruo
 * Create: 2017-09-28
 * Description: 这是演示页面，展示组件的功能
 */

import { Tabs, Tab, TabLinkBar, WhiteSpace, Card } from 'pand';
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
        activeIndexB: 3,
      };
    }
    render() {
      const { tabsDataA, tabsDataB, activeIndexB } = this.state;
      return (
        <div>
          <WhiteSpace>无数据时的样式</WhiteSpace>
          <Card>
            <Tabs />
          </Card>
          <WhiteSpace />
          <Card>
            <Tabs tabsData={tabsDataA} activeIndex={activeIndexB}>
              {tabsDataA.map((tabData, index) => <Tab key={index} index={index} {...tabData} />)}
            </Tabs>
          </Card>
          <WhiteSpace>有数据时的默认样式</WhiteSpace>
          <Card>
            <Tabs tabsData={tabsDataA} />
          </Card>
          <WhiteSpace>定制 hasLinkBar = false</WhiteSpace>
          <Card>
            <Tabs hasLinkBar={false}>
              {tabsDataB.map((tabData, index) => <Tab key={index} index={index} {...tabData} />)}
            </Tabs>
          </Card>
          <WhiteSpace>定制 activeColor</WhiteSpace>
          <Card>
            <Tabs activeColor={'orange'}>
              {tabsDataB.map((tabData, index) => <Tab key={index} index={index} {...tabData} />)}
            </Tabs>
          </Card>
          <WhiteSpace>定制 activeIndex</WhiteSpace>
          <Card>
            <Tabs activeIndex={activeIndexB}>
              {tabsDataB.map((tabData, index) => <Tab key={index} index={index} {...tabData} />)}
            </Tabs>
          </Card>
        </div>
      );
    }
  }
  return <PageTab />;
};
