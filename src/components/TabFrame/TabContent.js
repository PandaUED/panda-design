/**
 * Author: Ruo
 * Create: 2017-10-16
 * Description:
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';

class BasicTabContent extends React.Component {
  static propTypes = {
    index: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    beforeRenderContent: PropTypes.func,
    afterRenderContent: PropTypes.func,
  };
  static defaultProps = {
    beforeRenderContent: () => {},
    afterRenderContent: () => {},
  };
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.activeIndex || 0,
    };
  }
  componentWillMount() {
    this.props.beforeRenderContent();
  }
  componentDidMount() {
    this.props.afterRenderContent();
  }
  componentWillUpdate() {
    this.props.beforeRenderContent();
  }
  componentDidUpdate() {
    this.props.afterRenderContent();
  }
  render() {
    const {
      index,
      children,
      className,
      beforeRenderContent,
      afterRenderContent,
      ...other
    } = this.props;
    const { activeIndex } = this.context;
    return (
      <div
        className={classNames('tab-content', className, activeIndex === index ? 'active' : '')}
        {...other}
      >
        {children}
      </div>
    );
  }
}
BasicTabContent.contextTypes = {
  activeIndex: PropTypes.number,
};
const TabContent = styled(BasicTabContent)`
  display: none;
  width: 100%;
  flex-grow: 1;
  &.active {
    display: flex;
  }
  & > * {
    height: 100%;
    width: 100%;
  }
`;
export { TabContent };
