import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from 'pand';

const props = {
  closable: PropTypes.oneOf(['auto' | 'true' | 'false']),
  marquee: PropTypes.bool,
  center: PropTypes.bool,
};

const NoticeBar = ({
  closable = 'true',
  marquee,
  center,
  children = 'example',
  ...other
}) => {
  let NoticeBar = styled.div`
    font-size: 13px;
    color: #828994;
    background: #fafbfb;
    height: 36px;
    line-height: 36px;
  `;

  if (center) {
    NoticeBar = NoticeBar.extend`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `;
  }

  const NoticeBarIcon = styled.div`
    right: 8px;
    position: absolute;
    display: inline-block;
    span {
      line-height: 36px;
    }
  `;

  const fade = styled.div`
    animation: fade 2s infinite;
    -webkit-animation: fade 2s infinite;
    -moz-animation: fade 2s infinite;
    -o-animation: fade 2s infinite;
    -ms-animation: fade 2s infinite;
    animation-fill-mode: both;

    @keyframes fade {
      0%,
      100% {
        opacity: 0;
        transform: scale(0);
      }
      50% {
        opacity: 1;
        transform: scale(1);
      }
    }
  `;
  if (marquee) {
    return (
      <NoticeBar {...other}>
        <marquee behavior="scroll" direction="left">
          {children}
        </marquee>
      </NoticeBar>
    );
  } else {
    return (
      <NoticeBar {...other}>
        {children}
        {closable === 'true' && (
          <NoticeBarIcon>
            <Icon size={16} type="remove" color="#CACACA" />
          </NoticeBarIcon>
        )}
      </NoticeBar>
    );
  }
};

NoticeBar.propTypes = props;

export default NoticeBar;
