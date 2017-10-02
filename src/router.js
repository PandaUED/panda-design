import dynamic from 'dva/dynamic';
import { Route, Router, Switch } from 'dva/router';
import _ from 'lodash';
import Config from './config';
import App from './routes/App';
import Home from './routes/Home';

const MakeRoute = to => (
  <Route
    key={to}
    path={`/${_.kebabCase(to)}`}
    component={dynamic({ component: () => import(`./routes/${to}`) })}
  />
);

export default ({ history }) => {
  history.listen(() => window.scrollTo(0, 0));
  let list = [];
  _.forEach(Config, item => (list = list.concat(item)));

  return (
    <Router history={history}>
      <App>
        <Route exact path="/" component={Home} />
        {MakeRoute('style')}
        <Switch>{list.map(link => MakeRoute(link))}</Switch>
      </App>
    </Router>
  );
};
