import { Example, View, WhiteSpace } from 'pand';

export default () => {
  return (
    <View>
      <WhiteSpace />
      <Example />
      <WhiteSpace size={15} />
      <Example />
      <WhiteSpace size={20} />
      <Example />
    </View>
  );
};
