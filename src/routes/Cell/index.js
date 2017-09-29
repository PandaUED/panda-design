import React from 'react';
import { Button, Badge, Icon, Image, Cell, List, View, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace>单独使用-Avatar</WhiteSpace>
      <Cell className="CellCls" along padding={24}>
        <Cell.Left>
          <Image
            shape="circle"
            url="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3360175613,2775433479&fm=58&u_exp_0=2793141998,2442128069&fm_exp_0=86&bpow=870&bpoh=1280"
          />
        </Cell.Left>
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
        <Cell.Right size={13} color="#666D78;">
          <Icon size={16} type="right" color="#E3E3E3" />
        </Cell.Right>
      </Cell>

      <WhiteSpace>单独使用-Cell</WhiteSpace>

      <Cell className="CellCls" along padding={16}>
        <Icon size={16} type="gift" color="aliceblue" />
        <Cell.Main size={15} marginLeft={8}>
          新手福利
        </Cell.Main>
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along padding={16}>
        <Icon size={24} type="coin" color="#447281" />
        <Cell.Main>新手福利</Cell.Main>
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along bold padding={16} fontSize={16}>
        新手福利
        <Cell.Main color="#BBBFC8" size={14} marginLeft={6}>
          #170126-2
        </Cell.Main>
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along padding={16} fontSize={15}>
        新手福利
        <Badge type="text">抢购</Badge>
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along padding={16}>
        <Cell.Left>账单说明</Cell.Left>
        <Cell.Right color="#444444">银行卡-转入-定存宝</Cell.Right>
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along center padding={16}>
        「6月期」年化9.5%
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along center padding={16} color="#999999">
        「3月期」年化8.5% (已售罄)
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along padding={16} margin={10}>
        <Cell.Main>不使用红包</Cell.Main>
        <Cell.Right>
          <Icon size={24} type="Acitve" color="#07CF93" />
        </Cell.Right>
      </Cell>

      <WhiteSpace>单独使用-CellLarge</WhiteSpace>

      <WhiteSpace>单独使用-TimeList</WhiteSpace>
      <Cell className="CellCls" along padding={16}>
        <Cell.Left size={13}>09:32</Cell.Left>
        <Cell.Main size={13}>熊猫活宝第3227期 · 20万</Cell.Main>
        <Cell.Right size={13} color="#666D78;">
          8分钟售罄
        </Cell.Right>
      </Cell>

      <WhiteSpace>单独使用-Note</WhiteSpace>
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
        <Cell.Left size={12}>
          <Icon size={16} type="confirm" color="#666D78" />
          <div>我已阅读并同意</div>
        </Cell.Left>
        <Cell.Main size={12} marginLeft={1}>
          《熊猫金库用户服务协议》
        </Cell.Main>
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
