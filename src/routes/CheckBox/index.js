import React from 'react';
import { View, List, CheckBox, WhiteSpace, Cell } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace>复选框</WhiteSpace>
      <List>
        <List.Item padding={16} split>
          <CheckBox active />
        </List.Item>
        <List.Item padding={16} split>
          <CheckBox />
        </List.Item>
        <List.Item padding={16} split>
          <CheckBox active disabled />
        </List.Item>
        <List.Item padding={16} split>
          <CheckBox disabled />
        </List.Item>

        <List.Item padding={16} split>
          <CheckBox title="name" desc="description" />
        </List.Item>
      </List>
      <WhiteSpace>结合Cell展示协议</WhiteSpace>
      <Cell alone padding={16}>
        <CheckBox type="small" />
        <Cell.Left size={12} marginLeft={6}>
          <div>我已阅读并同意</div>
        </Cell.Left>
        <Cell.Main size={12} marginLeft={1} color="#666D78">
          《熊猫金库用户服务协议》
        </Cell.Main>
      </Cell>
    </View>
  );
};
