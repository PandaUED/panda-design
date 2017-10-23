/**
 * Created by Liqi on 17/9/28.
 */
import { default as Component } from '../utlis/Component';
import PropTypes from 'prop-types';
import { Icon } from '../Icon/index';
import { WhiteSpack as WhiteSpace } from '../WhiteSpace/index';
import { Modal } from '../Modal/index';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import './_actionSheet.scss';
import { noop } from 'lodash';

const ACTIONSHEET_TYPE = {
  TOP: 'top',
  BOTTOM: 'bottom',
};

const ASStyles = {
  ASContainer: styled.div`
    position: fixed;
    bottom: 0;
    background: #fff;
    width: 100%;
  `,
  ASTitle: styled.div`
    height: 54px;
    line-height: 54px;
    font-family: PingFangSC-Regular;
    font-size: 17px;
    color: #666;
    text-align: center;
    position: relative;
  `,
  ASCloseBtnTop: styled.div`
    position: absolute;
    padding: 15px;
    left: 0;
    top: 0;
    z-index: 100;
  `,
  ASCloseBtnBottom: styled.div`
    height: 54px;
    line-height: 54px;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #444;
    font-weight: bold;
  `,
};

class ActionSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asVisible: false,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  static propTypes = {
    closeBtnPosition: PropTypes.string,
    onClose: PropTypes.func,
    title: PropTypes.string,
    actionSheetCls: PropTypes.string,
  };

  static defaultProps = {
    closeBtnPosition: ACTIONSHEET_TYPE.TOP,
    onClose: noop,
    title: null,
    actionSheetCls: null,
  };

  show() {
    this.setState({ asVisible: true });
  }

  hide() {
    this.setState({ asVisible: false });
    this.props.onClose();
  }

  render({ title, children, closeBtnPosition, actionSheetCls }, { asVisible }) {
    return (
      <div className={actionSheetCls}>
        <Modal visible={asVisible} onClose={this.hide} maskClosable />
        <CSSTransition timeout={400} classNames="actionSheet-fade" in={asVisible}>
          {status => {
            return (
              <ASStyles.ASContainer
                className={`actionSheet-fade actionSheet-fade-${status} actionSheet-container`}
              >
                {closeBtnPosition === ACTIONSHEET_TYPE.TOP && (
                  <ASStyles.ASCloseBtnTop onClick={this.hide}>
                    <Icon size={24} type="Close" color="#666" />
                  </ASStyles.ASCloseBtnTop>
                )}
                {title && <ASStyles.ASTitle>{title}</ASStyles.ASTitle>}
                <div className="actionSheet-content">{children}</div>
                {closeBtnPosition === ACTIONSHEET_TYPE.BOTTOM && (
                  <div>
                    <WhiteSpace />
                    <ASStyles.ASCloseBtnBottom onClick={this.hide}>取消</ASStyles.ASCloseBtnBottom>
                  </div>
                )}
              </ASStyles.ASContainer>
            );
          }}
        </CSSTransition>
      </div>
    );
  }
}

ActionSheet.TYPES = ACTIONSHEET_TYPE;

export { ActionSheet };
