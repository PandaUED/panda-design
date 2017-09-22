import { connect } from 'dva';
import NProgress from 'nprogress';
import React from 'react';
import './index.scss';

const mapStateToProps = state => {
  return { loading: state.loading.global };
};

class Loading extends React.Component {
  componentWillMount() {
    NProgress.start();
  }

  componentDidMount() {
    NProgress.done();
  }

  componentWillReceiveProps(nextProps) {
    nextProps.loading ? NProgress.start() : NProgress.done();
  }

  componentWillUnmount() {
    NProgress.start();
  }

  render() {
    this.props.loading ? NProgress.start() : NProgress.done();

    return null;
  }
}

export default connect(mapStateToProps)(Loading);
