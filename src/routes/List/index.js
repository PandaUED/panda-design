import React from 'react';
import { Button, List, View, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace />
      <List
        className="listCls"
        split
        renderFooter={<Button>close</Button>}
        renderHeader="ListHeader123"
      >
        <List.Item>1</List.Item>
        <List.Item>2</List.Item>
        <List.Item margin>3</List.Item>
        <List.Item>4</List.Item>
        <List.Item margin>5</List.Item>
        <List.Item>6</List.Item>
      </List>
      <WhiteSpace />
    </View>
  );
};
