import React from 'react';
import { View, Steps, WhiteSpace } from 'pand';

const horizontalData = [
  { name: '步骤1', num: 1, status: 'active' },
  { name: '步骤2', num: 2, status: 'active' },
  { name: '步骤3', num: 3, status: 'holding' },
];

const verticalData = [
  { name: '步骤1', status: 'finish', icon: 'acitve', desc: '辅助说明文本' },
  { name: '步骤2', status: 'active', icon: 'acitve', desc: '辅助说明文本' },
  { name: '步骤3', status: 'holding', icon: 'news', desc: '辅助说明文本' },
  { name: '步骤4', status: 'error', icon: 'close', desc: '辅助说明文本' },
];

const progressData = [
  {
    time: '07月13日 当日',
    desc: '之前转入',
    status: 'active',
    rate: '50%',
    name: '当日计息',
  },
  {
    time: '07月13日 当日',
    desc: '之前转入',
    status: 'holding',
    rate: '50%',
    name: '次日计息',
  },
];

const progressData2 = [
  {
    time: '07月13日 当日',
    desc: '之前转入',
    status: 'active',
    rate: '25%',
    name: '锁定期30天',
  },
  {
    time: '07月13日 当日',
    desc: '之前转入',
    status: 'holding',
    rate: '75%',
    name: '逐月涨0.30%，最高达10.50%',
    right: { time: '2018年08月13日到期退出', desc: '期间每月一次免费转出' },
  },
];

const progressData3 = [
  {
    time: '07月13日 当日',
    desc: '之前转入',
    status: 'active',
    rate: '30%',
    name: '匹配完成开始计息',
  },
  {
    time: '07月13日 当日',
    desc: '之前转入',
    status: 'holding',
    rate: '70%',
    name: '3个月持续计息',
    right: { time: '2018年08月13日到期退出', desc: '期间每月一次免费转出' },
  },
];

export default () => {
  return (
    <View>
      <WhiteSpace>Steps-横版步骤</WhiteSpace>
      <WhiteSpace />
      <Steps className="HorizentalCls" data={horizontalData} type="horizontal" />
      <WhiteSpace />
      <WhiteSpace>Steps-竖版步骤</WhiteSpace>
      <WhiteSpace />
      <Steps className="VerticalCls" data={verticalData} type="vertical" />
      <WhiteSpace />
      <WhiteSpace>Steps-横版进度条</WhiteSpace>
      <WhiteSpace />
      <Steps className="ProgressCls" data={progressData} type="progress" color="red" />
      <WhiteSpace />
      <Steps className="ProgressCls" data={progressData2} type="progress" color="green" />
      <WhiteSpace />
      <Steps className="ProgressCls" data={progressData3} type="progress" />
      <WhiteSpace />
    </View>
  );
};
