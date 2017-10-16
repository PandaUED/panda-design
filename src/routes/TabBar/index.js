/**
 * Author: Ruo
 * Create: 2017-09-28
 * Description: 这是演示页面，展示组件的功能
 */

import { TabBar, WhiteSpace, Card, Icon } from 'pand';
import React from 'react';
import { darken, rgba } from 'polished';
import './../../components/Modal/_modal.scss';

const iconSize = 24;
export default () => {
  class PageTabBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tabsDataA: [
          {
            title: '首页',
            icon: {
              common: <Icon size={iconSize} type={'Home'} />,
              selected: <Icon size={iconSize} type={'HomeActive'} double />,
            },
          },
          {
            title: '金库',
            icon: {
              common: <Icon size={iconSize} double type={'YuE'} />,
              selected: <Icon size={iconSize} type={'CoinActive'} double />,
            },
          },
          {
            title: '发现',
            icon: {
              common: <Icon size={iconSize} type={'Discover'} />,
              selected: <Icon size={iconSize} type={'DiscoverActive'} double />,
            },
          },
          {
            title: '我的',
            icon: {
              common: <Icon size={iconSize} type={'My'} />,
              selected: (
                <Icon size={iconSize} type={'MyActive'} double gradient color={['orange']} />
              ),
            },
          },
        ],
        tabsDataB: [
          { title: ' 标题1' },
          { title: ' 标题2' },
          { title: ' 标题3' },
          {
            title: ' 标题4',
            highlight: true,
          },
        ],
        tabsDataC: [
          {
            title: ' 标题1',
            icon: {
              common: <Icon size={iconSize} type={'Home'} />,
              selected: <Icon size={iconSize} type={'HomeActive'} double />,
            },
            style: {
              width: '64px',
              flexGrow: 0,
              borderRight: '1px solid #F8F8F8',
            },
          },
          {
            title: ' 标题2',
            icon: {
              common: <Icon size={iconSize} double type={'YuE'} />,
              selected: <Icon size={iconSize} type={'CoinActive'} double />,
            },
            style: {
              width: '64px',
              flexGrow: 0,
            },
          },
          {
            title: ' 标题3',
            highlight: true,
          },
        ],
        tabsDataD: [
          { title: ' 标题1' },
          {
            title: ' 标题2',
            highlight: true,
          },
        ],
        activeIndex: 0,
      };
    }

    render() {
      const { tabsDataA, tabsDataB, tabsDataC, tabsDataD } = this.state;
      return (
        <div>
          <Card>
            <TabBar tabsData={tabsDataA} />
          </Card>
          <WhiteSpace>设置 buttonGroup</WhiteSpace>
          <Card>
            <TabBar tabsData={tabsDataB} />
          </Card>
          <WhiteSpace>设置 buttonGroup</WhiteSpace>
          <Card>
            <TabBar tabsData={tabsDataD} buttonGroup />
          </Card>
          <WhiteSpace>设置 buttonGroup 定制 style</WhiteSpace>
          <Card>
            <TabBar tabsData={tabsDataC} buttonGroup />
          </Card>
        </div>
      );
    }
  }

  return <PageTabBar />;
};
