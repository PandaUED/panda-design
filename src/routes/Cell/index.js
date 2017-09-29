import React from 'react';
import { Button, Cell, List, View, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace>单独使用</WhiteSpace>
      <Cell className="CellCls" padding={16}>
        123
      </Cell>
      <WhiteSpace>结合List使用</WhiteSpace>
      <List
        className="listCls"
        header="Cell + List"
        split
        footer={
          <Button
            onClick={() => {
              window.history.go(-1);
            }}
          >
            close
          </Button>
        }
      >
        <List.Item>
          <Cell margin={16}>123</Cell>
        </List.Item>
        <List.Item>
          <Cell margin={16}>123</Cell>
        </List.Item>
        <List.Item split>
          <Cell margin={16}>123</Cell>
        </List.Item>
        <List.Item>
          <Cell margin={16}>123</Cell>
        </List.Item>
        <List.Item split>
          <Cell margin={16}>123</Cell>
        </List.Item>
      </List>
    </View>
  );
};
