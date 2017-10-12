import React from 'react';
import { View, List, CheckBox, WhiteSpace } from 'pand';

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
          <CheckBox name="name" desc="description" />
        </List.Item>
      </List>
      <WhiteSpace />
    </View>
  );
};
