/**
 * Created by lichenguang on 2017/9/22.
 */
import React from 'react';
import styled from 'styled-components';
import Carousel from 'rmc-nuka-carousel';
import PropTypes from 'prop-types';

class ReactCarousel extends React.Component {
  static propTypes = {
    dots: PropTypes.bool,
    selectedIndex: PropTypes.number,
  };
  static defaultProps = {
    dots: true,
    selectedIndex: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: this.props.selectedIndex,
    };
  }

  onChange = index => {
    this.setState({
      selectedIndex: index,
    });
  };

  render() {
    const Dots = styled.div`
      position: relative;
      background: none;
      text-align: center;
      zoom: 1;
      width: 100%;
    `;
    const DotWrapper = styled.div`
      display: inline-block;
      zoom: 1;
    `;

    const Dot = styled.span`
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      opacity: 0.4;
      background: white;
      margin: 0 3px;
    `;
    const ActiveDot = Dot.extend`opacity: 0.88;`;
    const { dots, ...other } = this.props;

    let Decorators = [];
    const current = this.state.selectedIndex;

    if (dots) {
      Decorators = [
        {
          component: ({ slideCount, slidesToScroll }) => {
            const arr = [];
            for (let i = 0; i < slideCount; i += slidesToScroll) {
              arr.push(i);
            }
            const dotDom = arr.map(index => {
              return (
                <DotWrapper key={index}>
                  {index === current ? <ActiveDot /> : <Dot />}
                </DotWrapper>
              );
            });
            return <Dots>{dotDom}</Dots>;
          },
          position: 'BottomCenter',
          style: {
            padding: 12,
          },
        },
      ];
    }
    return (
      <Carousel
        {...other}
        decorators={Decorators}
        afterSlide={this.onChange}
        slideIndex={this.props.selectedIndex}
      />
    );
  }
}

export default ReactCarousel;
