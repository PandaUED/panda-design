import { connect } from 'dva';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';

const mapStateToProps = (state) => {return {loading: state.loading.global};};

class App extends React.Component {

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
		return <div/>;
	}
}

export default connect(mapStateToProps)(App);