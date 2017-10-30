/**
 * Author: Ruo
 * Create: 2017-09-28
 * Description: 这是演示页面，展示组件的功能
 */

import { TabFrame, WhiteSpace, Card, Icon, Badge, View } from 'pand';
import React from 'react';
import styled from 'styled-components';
import { darken, rgba } from 'polished';
import './../../components/Modal/_modal.scss';

const TempView = styled(View)`
  padding: 10px;
  height: 300px;
`;
const iconSize = 24;
export default () => {
  class PageTabBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tabBar: [
          {
            tab: {
              title: '首页',
              icon: {
                common: <Icon size={iconSize} type={'Home'} />,
                selected: <Icon size={iconSize} type={'HomeActive'} double />,
              },
            },
            content: <TempView>首页内容</TempView>,
          },
          {
            tab: {
              title: '金库',
              icon: {
                common: <Icon size={iconSize} double type={'YuE'} />,
                selected: <Icon size={iconSize} type={'CoinActive'} double />,
              },
            },
            content: <TempView>金库内容</TempView>,
          },
          {
            tab: {
              title: '发现',
              icon: {
                common: <Icon size={iconSize} type={'Discover'} />,
                selected: <Icon size={iconSize} type={'DiscoverActive'} double />,
              },
            },
            content: <TempView>发现内容</TempView>,
          },
          {
            tab: {
              title: '我的',
              icon: {
                common: <Icon size={iconSize} type={'My'} />,
                selected: (
                  <Icon size={iconSize} type={'MyActive'} double gradient color={['orange']} />
                ),
              },
            },
            content: <TempView>我的内容</TempView>,
          },
        ],
        badgeTab: [
          {
            tab: {
              title: (
                <div>
                  TITLE1
                  <Badge className={'corner'} type="text">
                    new
                  </Badge>
                </div>
              ),
            },
          },
          {
            tab: {
              title: (
                <div>
                  TITLE1<Badge className={'corner'}>188</Badge>
                </div>
              ),
            },
          },
          {
            tab: {
              title: (
                <div>
                  TITLE2<Badge className={'corner dot'} type="dot" />
                </div>
              ),
            },
          },
          {
            tab: {
              title: ' 标题4',
              highlight: true,
              highlightColor: 'green',
            },
          },
        ],
        tabsDataC: [
          {
            tab: {
              title: ' 标题1',
              icon: {
                common: <Icon size={iconSize} type={'Home'} />,
                selected: <Icon size={iconSize} type={'HomeActive'} double />,
              },
              style: {
                width: '64px',
                flexGrow: 0,
                boxShadow: '0.5px 0 0 #f8f8f8',
              },
            },
          },
          {
            tab: {
              title: ' 标题2',
              icon: {
                common: <Icon size={iconSize} double type={'YuE'} />,
                selected: <Icon size={iconSize} type={'CoinActive'} double />,
              },
              highlightColor: 'green',
              style: {
                width: '64px',
                flexGrow: 0,
              },
            },
          },
          {
            tab: {
              title: ' 标题3',
              highlight: true,
            },
          },
        ],
        confirmTab: [
          { tab: { title: ' 标题1' } },
          {
            tab: {
              title: ' 标题2',
              highlight: true,
            },
          },
        ],
        commonTab: [
          {
            tab: { title: ' 标题1' },
            content: <TempView>内容1</TempView>,
            beforeRenderContent: () => {
              console.log('1');
            },
            afterRenderContent: () => {
              console.log('2');
            },
          },
          {
            tab: { title: ' 标题2' },
            content: <TempView>内容2</TempView>,
            beforeRenderContent: () => {
              console.log('3');
            },
            afterRenderContent: () => {
              console.log('4');
            },
          },
          { tab: { title: ' 标题3' }, content: <TempView>内容3</TempView> },
          { tab: { title: ' 标题4' }, content: <TempView>内容4</TempView> },
        ],
        orangeTab: [
          { tab: { title: ' 标题1' } },
          { tab: { title: ' 标题2' } },
          { tab: { title: ' 标题3' } },
        ],
        twoElements: [{ tab: { title: ' 标题1' } }, { tab: { title: ' 标题2' } }],
        descriptionType: [
          {
            tab: {
              title: '温馨提示:',
              icon: {
                common: <Icon size={iconSize} type={'Discover'} />,
              },
              description: '本月省1次免费转出机会',
            },
          },
          {
            tab: {
              title: '我的',
              highlight: true,
            },
            content: <TempView>我的内容</TempView>,
          },
        ],
        activeIndex: 2,
      };
    }

    render() {
      const {
        badgeTab,
        tabsDataC,
        confirmTab,
        commonTab,
        orangeTab,
        twoElements,
        tabBar,
        activeIndex,
        descriptionType,
      } = this.state;
      return (
        <div>
          <WhiteSpace>普通 Tabs 带有Hook测试 见控制台</WhiteSpace>
          <Card>
            <TabFrame tabsData={commonTab} linkBar />
          </Card>
          <WhiteSpace />
          <Card>
            <TabFrame tabsData={orangeTab} linkBar activeColor={'orange'} />
          </Card>
          <WhiteSpace />
          <Card>
            <TabFrame tabsData={twoElements} linkBar activeColor={'orange'} />
          </Card>
          <WhiteSpace>设置 buttonGroup</WhiteSpace>
          <Card>
            <TabFrame tabsData={badgeTab} activeColor={'orange'} />
          </Card>
          <WhiteSpace>设置 buttonGroup</WhiteSpace>
          <Card>
            <TabFrame tabsData={confirmTab} buttonGroup activeColor={'orange'} />
          </Card>
          <WhiteSpace>设置 buttonGroup 定制 style</WhiteSpace>
          <Card>
            <TabFrame tabsData={tabsDataC} buttonGroup activeColor={'orange'} />
          </Card>
          <WhiteSpace>设置 activeIndex</WhiteSpace>
          <Card>
            <TabFrame tabsData={tabBar} activeIndex={activeIndex} activeColor={'orange'} />
          </Card>
          <WhiteSpace>设置 activeIndex 和 tabsPosition = bottom</WhiteSpace>
          <Card>
            <TabFrame
              tabsData={tabBar}
              activeIndex={activeIndex}
              tabsPosition={'bottom'}
              activeColor={'orange'}
            />
          </Card>
          <WhiteSpace>带有 description 的 tab, tabsPosition = bottom</WhiteSpace>
          <Card>
            <TabFrame tabsData={descriptionType} confirm activeIndex={1} activeColor={'orange'} />
          </Card>
        </div>
      );
    }
  }

  return <PageTabBar />;
};
