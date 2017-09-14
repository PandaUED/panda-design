import { Route, Switch } from 'dva/router';
import Button from './Button';
import Color from './Color';
import Home from './Home';

//import dynamic from 'dva/dynamic';
//const Home = dynamic({component: () => import('./Home')});
//const Color = dynamic({component: () => import('./Color')});
//const Button = dynamic({component: () => import('./Button')});

export default () => (
	<Switch>
		<Route exact path="/" component={Home}/>
		<Route path="/button" component={Button}/>
		<Route path="/color" component={Color}/>
	</Switch>
)