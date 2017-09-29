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
        <List.Item padding>1</List.Item>
        <List.Item padding>2</List.Item>
        <List.Item split padding>
          3
        </List.Item>
        <List.Item>4</List.Item>
        <List.Item split>5</List.Item>
        <List.Item padding>6</List.Item>
      </List>
      <WhiteSpace />
    </View>
  );
};
