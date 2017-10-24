import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { style } from '../style_index';

const props = {
  className: PropTypes.string,
  closable: PropTypes.bool,
  marquee: PropTypes.bool,
  center: PropTypes.bool,
  icon: PropTypes.node,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
};

const NoticeBar = ({
  className,
  closable,
  marquee,
  center,
  icon,
  children = 'example',
  visible = false,
  onClose,
  ...other
}) => {
  const centerContent = css`
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    display: flex;
  `;
  const NoticeBar = styled.div`
    font-size: 13px;
    color: ${style.color.darkGrey};
    background: ${style.color.bgNotice};
    height: 36px;
    line-height: 36px;
    display: flex;
    flex-direction: row;
    ${!visible && 'display: none;'};
  `;
  const NoticeBarContent = styled.div`${center && centerContent};`;
  const NoticeBarIcon = styled.a`
    span {
      line-height: 36px;
    }

    padding: 0 8px;
    display: inline-block;
    background: ${style.color.bgNotice};
  `;
  return (
    <NoticeBar className={className} {...other}>
      <NoticeBarIcon>{icon}</NoticeBarIcon>
      {marquee && (
        <marquee behavior="scroll" direction="left">
          {children}
        </marquee>
      )}
      {!marquee && <NoticeBarContent>{children}</NoticeBarContent>}
      {closable && (
        <NoticeBarIcon
          onClick={() => {
            onClose();
          }}
        >
          <Icon size={16} type="remove" color="#CACACA" />
        </NoticeBarIcon>
      )}
    </NoticeBar>
  );
};

NoticeBar.propTypes = props;

export { NoticeBar };
