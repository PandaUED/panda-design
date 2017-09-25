import { Example, View, WhiteSpace, WingBlank } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace />
      <WingBlank>
        <Example />
      </WingBlank>
      <WhiteSpace />
      <WingBlank size={24}>
        <Example />
      </WingBlank>
      <WhiteSpace />
      <WingBlank size={32}>
        <Example />
      </WingBlank>
    </View>
  );
};
