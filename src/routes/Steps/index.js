import React from 'react';
import { View, Steps, WhiteSpace } from 'pand';

const horizontalData = [
  { name: '步骤1', num: 1, status: 'active' },
  { name: '步骤2', num: 2, status: 'active' },
  { name: '步骤3', num: 3, status: 'holding' },
];

const verticalData = [
  { name: '步骤1', num: 1, status: 'finish', icon: 'acitve', desc: '辅助说明文本' },
  { name: '步骤2', num: 2, status: 'active', icon: 'acitve', desc: '辅助说明文本' },
  { name: '步骤3', num: 3, status: 'holding', icon: 'news', desc: '辅助说明文本' },
  { name: '步骤4', num: 4, status: 'error', icon: 'close', desc: '辅助说明文本' },
];

const progressData = [
  { name: '步骤1', num: 1, status: 'active' },
  { name: '步骤2', num: 2, status: 'active' },
  { name: '步骤3', num: 3, status: 'holding' },
];

export default () => {
  return (
    <View>
      <WhiteSpace>Steps-横版步骤</WhiteSpace>
      <Steps
        className="HorizentalCls"
        data={horizontalData}
        type="horizontal"
      />
      <WhiteSpace>Steps-竖版步骤</WhiteSpace>
      <Steps className="VerticalCls" data={verticalData} type="vertical" />
      <WhiteSpace>Steps-横版进度条</WhiteSpace>
      <Steps className="ProgressCls" data={progressData} type="progress" />
    </View>
  );
};
