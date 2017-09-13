import { connect } from 'dva';
import { Route, Router, Switch } from 'dva/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import Routes from './routes';

const mapStateToProps = (state) => {return {loading: state.loading.global};};
const PrimaryLayout   = connect(mapStateToProps)(class extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		NProgress.start();
	}

	componentDidMount() {
		NProgress.done();
	}

	render() {
		const {loading} = this.props;
		if (loading) NProgress.start();
		if (!loading) NProgress.done();
		return <Routes/>;
	}
});

export default ({history}) => {
	history.listen((location, action) => window.scrollTo(0, 0));
	return (
		<Router history={history}>
			<PrimaryLayout/>
		</Router>
	);
}
