import React from 'react';
import { View, Input, WhiteSpace, Icon } from 'pand';

class PageInput extends React.Component {
  state = {
    phoneNumber: '',
  };
  render() {
    return (
      <View>
        <WhiteSpace>输入框</WhiteSpace>
        <WhiteSpace>small（默认）</WhiteSpace>
        <Input
          placeholder="请输入手机号"
          type="tel"
          value={this.state.phoneNumber}
          onChange={e => {
            this.setState({ phoneNumber: e.target.value });
            console.log(e.target.value);
          }}
          showClear
        />
        <Input
          placeholder="请输入手机号"
          type="tel"
          onChange={e => {
            console.log(e.target.value);
          }}
          showClear
          defaultValue="13366049321"
        />
        <WhiteSpace>large</WhiteSpace>
        <Input
          placeholder="请输入金额"
          type="money"
          size="large"
          right={
            <div
              onClick={() => {
                console.log('dianji');
              }}
            >
              全部转出
            </div>
          }
          left={<Icon color="#666666" size={24} type="Money" />}
          onChange={e => {
            console.log(e.target.value);
          }}
        />
        <WhiteSpace>square（应配合键盘使用）</WhiteSpace>
        <Input size="square" value="23248" />
      </View>
    );
  }
}
export default PageInput;
