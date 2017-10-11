import React from 'react';
import { View, List, Switch, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace>Switch滑动开关</WhiteSpace>
      <List>
        <List.Item padding={16} split>
          <Switch active />
        </List.Item>
        <List.Item padding={16} split>
          <Switch />
        </List.Item>
        <List.Item padding={16} split>
          <Switch active type="square" color="#108ee9" />
        </List.Item>
        <List.Item padding={16} split>
          <Switch active disable />
        </List.Item>
        <List.Item padding={16} split>
          <Switch disable />
        </List.Item>
      </List>
      <WhiteSpace />
    </View>
  );
};
