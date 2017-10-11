import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Icon } from 'pand';

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
  let NoticeBar = styled.div`
    font-size: 13px;
    color: #828994;
    background: #fafbfb;
    height: 36px;
    line-height: 36px;
    display: flex;
    flex-direction: row;
  `;
  let NoticeBarContent = styled.div`display: block;`;
  if (center) {
    NoticeBarContent = NoticeBarContent.extend`
      flex-grow: 1;
      align-items: center;
      justify-content: center;
      display: flex;
    `;
  }

  const NoticeBarIcon = styled.a`
    span {
      line-height: 36px;
    }

    padding: 0 8px;
    display: inline-block;
    background: #fafbfb;
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
  if (visible) {
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
  } else {
    return null;
  }
};

NoticeBar.propTypes = props;

export default NoticeBar;
