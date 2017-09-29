import React from 'react';
import { Button, Icon, Cell, List, View, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace>单独使用</WhiteSpace>
      <Cell className="CellCls" along padding={24}>
        <Cell.Left>头像</Cell.Left>
        <Cell.Main
          size={16}
          desc={
            <div>
              <Icon size={16} type="phone" color="#999999" />
              153****3008
            </div>
          }
        >
          番薯哥哥
        </Cell.Main>
      </Cell>

      <WhiteSpace />
      <Cell className="CellCls" along padding={16}>
        <Cell.Left>
          <Icon size={16} type="point" color="#85B2FF" />
        </Cell.Left>
        <Cell.Main size={12} color="#999999">
          通用余额转入是指将通过绑定银行卡转账至存管账户的余额转移至熊猫金库存管电子e账户，从而完成出借。
        </Cell.Main>
      </Cell>

      <WhiteSpace />
      <Cell className="CellCls" along padding={16}>
        <Cell.Left size={13}>09:32</Cell.Left>
        <Cell.Main size={13}>熊猫活宝第3227期 · 20万</Cell.Main>
        <Cell.Right size={13} color="#666D78;">
          8分钟售罄
        </Cell.Right>
      </Cell>
      <Cell className="CellCls" along padding={16} type="timeList">
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
