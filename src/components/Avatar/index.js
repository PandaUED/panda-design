import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
  className: PropTypes.string,
  size: PropTypes.number,
  shape: PropTypes.string,
  url: PropTypes.string,
};

const Image = ({ className, size, shape, url, ...other }) => {
  let Image = styled.img`background: transparent;`;
  if (shape === 'circle') {
    Image = Image.extend`
      ${size
        ? `width:${size}px;height:${size}px;border-radius:${size / 2}px`
        : 'width:48px;height:48px;border-radius:24px'};
    `;
  }

  return (
    <Image
      className={className}
      {...other}
      src={url}
      width={size}
      height={size}
    />
  );
};

Image.propTypes = props;

export default Image;
