/**
 * Created by lichenguang on 2017/9/21.
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactCarousel from './ReactCarousel';
import { style } from '../';

const props = {
  color: PropTypes.oneOf(Object.keys(style.color)),
  deg: PropTypes.number,
  dots: PropTypes.bool,
  autoplay: PropTypes.bool,
  infinite: PropTypes.bool,
  type: PropTypes.oneOf(['banner', 'card', 'safe']),
  cardTitle: PropTypes.string,
};

const Carousel = ({
  color = 'white',
  deg,
  dots = false,
  autoplay = false,
  infinite = false,
  type = 'banner',
  cardTitle,
  ...other
}) => {
  const CarouselWrapper = styled.div`
    padding: ${type === 'card' ? '19px 16px 0 16px' : null};
    background: #fff;
    text-align: ${type === 'safe' ? 'center' : null};
  `;

  let Carousel = styled(ReactCarousel)`
    height: ${{ banner: 192, card: 116 }[type]}px;
    background: ${style.color[color]};
    padding-bottom: ${type === 'safe' || type === 'card' ? '16px' : null};
    margin: ${type === 'card' ? '16px 0' : null};
    a {
      display: inline-block;
      width: 100%;
      img {
        width: 100%;
        vertical-align: top;
      }
    }

    div {
      font-family: PingFangSC-Medium;
      font-size: 13px;
      color: #999999;
    }
  `;
  if (deg) {
    Carousel = Carousel.extend`background: ${style.gradient[color](deg)};`;
  }

  const Title = styled.div`
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #444444;
    line-height: 16px;
  `;

  const Vertical = styled.div`
    padding-top: 16px;
    padding-bottom: 16px;
    width: 100%;
  `;
  const Safe = styled.div`
    font-family: PingFangSC-Medium;
    font-size: 13px;
    color: #5bb547;
    line-height: 13px;
  `;
  return (
    <CarouselWrapper>
      {type === 'safe' ? (
        <Vertical>
          <Safe>新网银行资金存管</Safe>
        </Vertical>
      ) : null}
      {type === 'card' ? <Title>{cardTitle}</Title> : null}
      <Carousel
        {...other}
        dots={dots}
        autoplay={autoplay}
        wrapAround={infinite}
        vertical={type === 'safe'}
      />
    </CarouselWrapper>
  );
};

Carousel.propTypes = props;

export default Carousel;
