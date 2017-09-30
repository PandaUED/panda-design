import React from 'react';
import { View, List, Avatar, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace>头像</WhiteSpace>
      <List>
        <List.Item padding={16} split>
          <Avatar url="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3360175613,2775433479&fm=58&u_exp_0=2793141998,2442128069&fm_exp_0=86&bpow=870&bpoh=1280" />
        </List.Item>
        <List.Item padding={16} split>
          <Avatar
            shape="square"
            url="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3360175613,2775433479&fm=58&u_exp_0=2793141998,2442128069&fm_exp_0=86&bpow=870&bpoh=1280"
          />
        </List.Item>
      </List>
      <WhiteSpace />
    </View>
  );
};
