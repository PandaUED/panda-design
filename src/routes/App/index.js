import { Switch } from 'dva/router';
import { View, ToastSharedInstance, DialogSharedInstance } from 'pand';
import Loading from '../Loading';

export default ({ children }) => (
  <View>
    <Loading />
    <Switch>{children}</Switch>
    <ToastSharedInstance />
    <DialogSharedInstance />
  </View>
);
