import dynamic from 'dva/dynamic';
import { Route, Link } from 'dva/router';
import _ from 'lodash';

const MakeRoute = to => (
  <Route
    key={to}
    path={`/${_.kebabCase(to)}`}
    component={dynamic({ component: () => import(`../routes/${to}`) })}
  />
);

const MakeLink = ({ to }) => (
  <Link to={_.kebabCase(to)}>{_.startCase(to)}</Link>
);

export { MakeRoute, MakeLink };
