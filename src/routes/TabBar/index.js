/**
 * Author: Ruo
 * Create: 2017-09-28
 * Description: 这是演示页面，展示组件的功能
 */

import { TabBar, WhiteSpace, Card } from 'pand';
import React from 'react';
import './../../components/Modal/_modal.scss';

export default () => {
  class PageTabBar extends React.Component {
    constructor( props ) {
      super(props);
      this.state = {
        tabsDataA: [
          {
            content: '首页',
            icon: {
              size: 24,
              type: 'Home',
              double: false,
            },
          },
          {
            content: '金库',
            icon: {
              size: 24,
              type: 'YuE',
              double: true,
              color: ['#333', '#777'],
            },
          },
          {
            content: '发现',
            icon: {
              size: 24,
              type: 'Discover',
            },
          },
          {
            content: '我的',
            icon: {
              size: 24,
              type: 'My',
            },
          },
          { content: '这是多出来的数据会被自动截断' },
        ],
        tabsDataB: [
          {
            title: '资金安全:',
            content: '全程由新网银行存管',
            icon: {
              size: 24,
              type: 'GreenSafe',
              double: true,
              color: ['#333', '#777'],
            },
          },
          { content: '标题' },
        ],
        tabsDataC: [
          { content: '标题' },
          { content: '标题' },
        ],
        tabsDataD: [
          {
            content: '标题',
            icon: {
              size: 24,
              type: 'Bill',
            },
          },
          {
            content: '标题',
            icon: {
              size: 24,
              type: 'Bill',
            },
          },
          { content: '标题' },
        ],
        activeIndexA: 1,
        activeIndexB: 0,
        activeIndexC: 0,
        activeIndexD: 0,
      };
    }

    render() {
      const {
        tabsDataA,
        tabsDataB,
        tabsDataC,
        tabsDataD,
        activeIndexA,
        activeIndexB,
        activeIndexC,
        activeIndexD,
      } = this.state;
      return (
        <div>
          <Card>
            <TabBar tabsData={tabsDataA} activeIndex={activeIndexA}/>
          </Card>
          <WhiteSpace/>
          <Card>
            <TabBar mode={2} tabsData={tabsDataB} activeIndex={activeIndexB}/>
          </Card>
          <WhiteSpace/>
          <Card>
            <TabBar mode={2} tabsData={tabsDataC} activeIndex={activeIndexC}/>
          </Card>
          <WhiteSpace/>
          <Card>
            <TabBar mode={3} tabsData={tabsDataD} activeIndex={activeIndexD}/>
          </Card>
        </div>
      );
    }
  }

  return <PageTabBar/>;
};
