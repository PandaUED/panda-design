import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../';

const props = {
  className: PropTypes.string,
  size: PropTypes.number,
  shape: PropTypes.string,
  url: PropTypes.string,
  name: PropTypes.string,
};

const Avatar = ({ className, size = 48, shape = 'circle', url, name = ' ', ...other }) => {
  const AvatarWrap = styled.div`
    display: flex;
    align-items: center;
  `;
  const Avatar = styled.img`
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
    <AvatarWrap>
      <Avatar className={className} {...other} src={url} width={size} height={size} />
      {!url && <AvatarName>{name[0].toUpperCase()}</AvatarName>}
    </AvatarWrap>
  );
};

Avatar.propTypes = props;

export default Avatar;
