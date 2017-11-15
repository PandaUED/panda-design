import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../style_index';

const props = {
  className: PropTypes.string,
  size: PropTypes.number,
  shape: PropTypes.string,
  url: PropTypes.string,
  name: PropTypes.string,
  center: PropTypes.bool,
};

const Avatar = ({
  className,
  size = 48,
  shape = 'circle',
  url,
  center = false,
  name = ' ',
  ...other
}) => {
  const AvatarWrap = styled.div`
    display: flex;
    align-items: center;
    width: ${size}px;
    height: ${size}px;
    ${center && `margin: 0 auto;`};
  `;
  const Avatar = styled.img`
    background: ${style.color.bgDeactive};
    width: ${size}px;
    height: ${size}px;
    border-radius: 5px;
    ${shape === 'circle' && `border-radius: ${size / 2}px;`};
  `;
  const AvatarDiv = styled.div`
    background: ${style.color.bgDeactive};
    width: ${size}px;
    height: ${size}px;
    border-radius: 5px;
    ${shape === 'circle' && `border-radius: ${size / 2}px;`};
  `;
  const AvatarName = styled.div`
    color: white;
    text-align: center;
    position: absolute;
    width: ${size}px;
    font-size: ${size * 0.6}px;
  `;

  return (
    <AvatarWrap className={className}>
      <AvatarDiv>{url && <Avatar src={url} width={size} height={size} {...other} />}</AvatarDiv>
      {!url && <AvatarName>{name[0].toUpperCase()}</AvatarName>}
    </AvatarWrap>
  );
};

Avatar.propTypes = props;

export default Avatar;
