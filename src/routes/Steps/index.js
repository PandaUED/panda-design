import React from 'react';
import { View, Steps, WhiteSpace } from 'pand';

const data = [
  { name: '步骤1', num: 1, status: 'active' },
  { name: '步骤2', num: 2, status: 'active' },
  { name: '步骤3', num: 3, status: 'holding' },
];

export default () => {
  return (
    <View>
      <WhiteSpace>Steps-横版步骤</WhiteSpace>
      <Steps className="HorizentalCls" data={data} type="horizontal" />
      <WhiteSpace>Steps-竖版步骤</WhiteSpace>
      <Steps className="VerticalCls" data={data} type="vertical" />
      <WhiteSpace>Steps-横版进度条</WhiteSpace>
      <Steps className="ProgressCls" data={data} type="progress" />
    </View>
  );
};
