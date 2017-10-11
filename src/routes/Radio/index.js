import React from 'react';
import { View, List, Radio, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace>单选框</WhiteSpace>
      <List>
        <Radio group="color" value="blue" name="蓝色" />
        <Radio group="color" value="green" name="绿色" checked />
        <Radio group="color" value="red" name="红色" />
      </List>
      <WhiteSpace />
      <List>
        <Radio group="color2" value="blue" name="蓝色" disabled checked />
        <Radio group="color2" value="green" name="绿色" disabled />
        <Radio group="color2" value="red" name="红色" disabled />
      </List>
      <WhiteSpace />
      <List>
        <Radio
          group="color3"
          value="blue"
          name="蓝色"
          desc="detail"
          onClick={e => console.log(e.target.value)}
        />
        <Radio
          group="color3"
          value="green"
          name="绿色"
          desc="detail"
          onClick={e => console.log(e.target.value)}
        />
        <Radio
          group="color3"
          value="red"
          name="红色"
          checked
          desc="detail"
          onClick={e => console.log(e.target.value)}
        />
      </List>
      <WhiteSpace />
    </View>
  );
};
