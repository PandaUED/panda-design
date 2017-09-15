import dynamic from 'dva/dynamic';
import { Route, Switch } from 'dva/router';
import _ from 'lodash';
import { View } from 'pand';
import App from './App';
import Button from './Button';
import Home from './Home';

const MakeRoute = (page) => <Route
	path={'/' + _.kebabCase(page)}
	component={dynamic({component: () => import(`./${page}`)})}
/>;

export default () => (
	<View>
		<Route path="/" component={App}/>
		<Switch>
			<Route exact path="/" component={Home}/>
			{MakeRoute('style')}
			{MakeRoute('WhiteSpace')}
			{MakeRoute('WingBlank')}
			{MakeRoute('Button')}
			{MakeRoute('Card')}
		</Switch>
	</View>
)