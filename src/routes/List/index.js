import React from 'react';
import { Button, List, Cell, View, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace />
      <List
        className="listCls"
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
        header="ListHeader123"
      >
        <List.Item padding>1</List.Item>
        <List.Item padding>2</List.Item>
        <List.Item split padding>
          3
        </List.Item>

        <List.Item>
          <Cell margin={16}>4</Cell>
        </List.Item>
        <List.Item split>
          <Cell margin={16}>5</Cell>
        </List.Item>

        <List.Item padding>6</List.Item>
      </List>
      <WhiteSpace />
    </View>
  );
};
