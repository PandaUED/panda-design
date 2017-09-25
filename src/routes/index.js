import dynamic from 'dva/dynamic';
import { Route, Switch } from 'dva/router';
import _ from 'lodash';
import { View } from 'pand';
import Loading from './Loading';
import Home from './Home';
import { whiteNav, transNav, Navigation } from './Navigation/index';

const MakeRoute = page => (
  <Route
    path={`/${_.kebabCase(page)}`}
    component={dynamic({ component: () => import(`./${page}`) })}
  />
);

export default () => (
  <View>
    <Route path="/" component={Loading} />
    <Switch>
      <Route exact path="/" component={Home} />
      {MakeRoute('Color')}
      {MakeRoute('WhiteSpace')}
      {MakeRoute('WingBlank')}
      {MakeRoute('Button')}
      {MakeRoute('Card')}

      {/* navigation start */}
      <Route
        path={'/navigation'}
        component={dynamic({ component: () => Navigation })}
      />
      <Route exact path="/navigation-white" component={whiteNav} />
      <Route exact path="/navigation-trans" component={transNav} />
      {/* navigation end */}
    </Switch>
  </View>
);
