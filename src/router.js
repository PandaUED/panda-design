import { Route, Router, Switch } from 'dva/router';
import React from 'react';

const PrimaryLayout = () => {
	return (
		<div>
		</div>
	);
};

export default ({history}) => {
	history.listen((location, action) => window.scrollTo(0, 0));
	return (
		<Router history={history}>
			<PrimaryLayout/>
		</Router>
	);
}
