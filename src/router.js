import { Router } from 'dva/router';
import React from 'react';
import Routes from './routes';

export default ({ history }) => {
  history.listen(() => window.scrollTo(0, 0));
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};
