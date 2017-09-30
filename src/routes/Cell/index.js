import React from 'react';
import { Badge, Icon, Avatar, Cell, View, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace>Cell-Avatar</WhiteSpace>
      <Cell className="CellCls" along padding={24}>
        <Cell.Left>
          <Avatar
            shape="circle"
            url="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3360175613,2775433479&fm=58&u_exp_0=2793141998,2442128069&fm_exp_0=86&bpow=870&bpoh=1280"
          />
        </Cell.Left>
        <Cell.Main
          size={16}
          descMargin={13}
          desc={
            <div>
              <Icon size={16} type="phone" color="#999" />
              153****3008
            </div>
          }
        >
          番薯哥哥
        </Cell.Main>
        <Cell.Right color="#666D78">
          <Icon size={16} type="right" color="#E3E3E3" />
        </Cell.Right>
      </Cell>

      <WhiteSpace>Cell-Default</WhiteSpace>
      <Cell className="CellCls" along>
        <Icon size={16} type="gift" color="aliceblue" />
        <Cell.Main size={15} marginLeft={8}>
          新手福利
        </Cell.Main>
        <Cell.Right color="#999">查看更多</Cell.Right>
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along>
        <Icon size={24} type="coin" color="#447281" />
        <Cell.Main>新手福利</Cell.Main>
        <Cell.Right color="#666D78">
          存管
          <Icon size={16} type="vip" color="#FFB300" />
          <Icon size={16} type="right" color="#CACACA" />
        </Cell.Right>
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along bold fontSize={16}>
        新手福利
        <Cell.Main color="#BBBFC8" size={14} marginLeft={6}>
          #170126-2
        </Cell.Main>
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along fontSize={15}>
        新手福利
        <Badge type="text">抢购</Badge>
        <Cell.Right color="#CACACA">
          无可用红包
          <Icon size={16} type="right" color="#CACACA" />
        </Cell.Right>
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along>
        <Cell.Left>账单说明</Cell.Left>
        <Cell.Right size={14} color="#444">
          银行卡-转入-定存宝
        </Cell.Right>
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along center>
        「6月期」年化9.5%
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along center color="#999">
        「3月期」年化8.5% (已售罄)
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along margin={10}>
        <Cell.Main>不使用红包</Cell.Main>
        <Cell.Right right={24}>
          <Icon size={24} type="Acitve" color="#07CF93" />
        </Cell.Right>
      </Cell>

      <WhiteSpace>Cell-CellLarge</WhiteSpace>
      <Cell className="CellCls" along>
        <Cell.Left>
          <Avatar
            shape="square"
            url="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3360175613,2775433479&fm=58&u_exp_0=2793141998,2442128069&fm_exp_0=86&bpow=870&bpoh=1280"
          />
        </Cell.Left>
        <Cell.Main size={16} desc="解释">
          奖励
        </Cell.Main>
        <Cell.Right color="#666D78">
          <Icon size={16} type="right" color="#E3E3E3" />
        </Cell.Right>
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along>
        <Cell.Left>
          <Avatar
            shape="square"
            url="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3360175613,2775433479&fm=58&u_exp_0=2793141998,2442128069&fm_exp_0=86&bpow=870&bpoh=1280"
          />
        </Cell.Left>
        <Cell.Main size={16} desc="解释">
          奖励
        </Cell.Main>
        <Cell.Right color="#5891EF">领取</Cell.Right>
      </Cell>
      <WhiteSpace />
      <Cell className="CellCls" along>
        <Cell.Left>
          <Avatar
            shape="square"
            url="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3360175613,2775433479&fm=58&u_exp_0=2793141998,2442128069&fm_exp_0=86&bpow=870&bpoh=1280"
          />
        </Cell.Left>
        <Cell.Main size={16} desc="可用额度：10,000.00元">
          招商银行「尾号8582」
        </Cell.Main>
        <Cell.Right>
          <Icon size={16} type="select" color="#5891EF" />
        </Cell.Right>
      </Cell>

      <WhiteSpace>Cell-TimeList</WhiteSpace>
      <Cell className="CellCls" along padding={16}>
        <Cell.Left size={13}>09:32</Cell.Left>
        <Cell.Main size={13}>熊猫活宝第3227期 · 20万</Cell.Main>
        <Cell.Right color="#666D78">8分钟售罄</Cell.Right>
      </Cell>

      <WhiteSpace>Cell-Note</WhiteSpace>
      <Cell className="CellCls" along padding={16}>
        <Cell.Left>
          <Icon size={16} type="point" color="#85B2FF" />
        </Cell.Left>
        <Cell.Main size={12} color="#999">
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
      <WhiteSpace />
    </View>
  );
};
