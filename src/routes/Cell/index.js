import React from 'react';
import { Cell, List, View, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace>单独使用</WhiteSpace>
      <Cell className="CellCls" split>
        123
      </Cell>
      <WhiteSpace>结合List使用</WhiteSpace>
      <List className="listCls">
        <List.Item>
          <Cell>123</Cell>
        </List.Item>
        <List.Item>
          <Cell>123</Cell>
        </List.Item>
        <List.Item split>
          <Cell>123</Cell>
        </List.Item>
        <List.Item>
          <Cell>123</Cell>
        </List.Item>
        <List.Item split>
          <Cell>123</Cell>
        </List.Item>
      </List>
    </View>
  );
};
