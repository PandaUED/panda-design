import { Switch } from 'dva/router';
import { View } from 'pand';
import Loading from '../Loading';

export default ({ children }) => (
  <View>
    <Loading />
    <Switch>{children}</Switch>
  </View>
);
