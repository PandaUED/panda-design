import React from 'react';
import { Icon, Avatar, Badge, Button, List, Cell, View, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace>List和Cell使用</WhiteSpace>
      <List
        className="listCls"
        header="List + Cell"
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
        <List.Item padding={16} border>
          非Cell-1
        </List.Item>
        <List.Item padding={16} split>
          非Cell-2
        </List.Item>

        <List.Item>
          <Cell className="CellCls" alone padding={16} height={90} bold>
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
        </List.Item>
        <List.Item>
          <Cell className="CellCls" alone fontSize={15}>
            新手福利
            <Cell.Main marginLeft={6}>
              <Badge type="text">抢购</Badge>
            </Cell.Main>
            <Cell.Right color="#999">
              无可用红包
              <Icon size={16} type="right" color="#e3e3e3" />
            </Cell.Right>
          </Cell>
        </List.Item>
        <List.Item>
          <Cell className="CellCls" alone padding={16}>
            <Cell.Left size={13}>09:32</Cell.Left>
            <Cell.Main size={13}>熊猫活宝第3227期 · 20万</Cell.Main>
            <Cell.Right color="#666D78">8分钟售罄</Cell.Right>
          </Cell>
        </List.Item>
        <List.Item split>
          <Cell className="CellCls" alone padding={16}>
            <Cell.Left size={12} marginLeft={16}>
              <Icon size={16} type="confirm" color="#666D78" />
              <div>我已阅读并同意</div>
            </Cell.Left>
            <Cell.Main size={12} marginLeft={1} color="#666D78">
              《熊猫金库用户服务协议》
            </Cell.Main>
          </Cell>
        </List.Item>

        <List.Item split padding={16}>
          <Cell>Cell</Cell>
        </List.Item>

        <List.Item padding={16}>非Cell</List.Item>
      </List>
      <WhiteSpace />
    </View>
  );
};
