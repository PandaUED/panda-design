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
        tabsData: [
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
        activeIndex: 0,
      };
    }

    render() {
      const { tabsData } = this.state;
      return (
        <div>
          <Card>
            <TabBar tabsData={tabsData} />
          </Card>
        </div>
      );
    }
  }

  return <PageTabBar />;
};
