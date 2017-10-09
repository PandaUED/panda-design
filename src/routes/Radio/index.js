import React from 'react';
import { View, List, Radio, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace>单选框</WhiteSpace>
      <List>
        <List.Item padding={16} split>
          <Radio />
        </List.Item>
        <List.Item padding={16} split>
          <Radio />
        </List.Item>
      </List>
      <WhiteSpace />
    </View>
  );
};
