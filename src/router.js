import {Route, Router, Switch} from 'dva/router';
import {Example} from './routes';
import React from 'react';
import {connect} from 'dva';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

function mapStateToProps(state) {
	return {
		loading: state.loading.global
	};
}

const PrimaryLayout = connect(mapStateToProps)(class extends React.Component {
	
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
		
		return <Route component={Example} />
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
