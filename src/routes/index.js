import { Route, Router, Switch } from 'dva/router';
import Home from './Home';
import Button from './Button';
import Color from './Color';

export default () => (
	<Switch>
		<Route exact path="/" component={Home}/>
		<Route path="/button" component={Button}/>
		<Route path="/color" component={Color}/>
	</Switch>
)