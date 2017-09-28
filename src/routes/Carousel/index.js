/**
 * Created by lichenguang on 2017/9/21.
 */

import { Card, Carousel, View, WhiteSpace } from 'pand';
import styled from 'styled-components';

let { Header, Body } = Card;

export default () => {
  Body = styled(Body)`
    > a {
      margin-bottom: 1rem;
    }
  `;
  return (
    <View>
      <WhiteSpace />
      <Card>
        <Header split>Carousel Banner</Header>
        <Body>
          <Carousel
            color="primary"
            deg={45}
            autoplay
            infinite
            dots
            style={{ height: 192 }}
          >
            {['1', '2', '3'].map(i => <div key={i}>Carousel {i}</div>)}
          </Carousel>
          <WhiteSpace />
          <Carousel color="blue" deg={45} style={{ height: 128 }}>
            <div>banner</div>
          </Carousel>
          <WhiteSpace />
          <Header split>Carousel Card</Header>
          <Carousel
            type="card"
            cardTitle="活动名称"
            color="red"
            deg={45}
            style={{ height: 116 }}
          >
            <div>card</div>
          </Carousel>
          <WhiteSpace />
          <Header split>Carousel Safe</Header>
          <Carousel type="safe" autoplay infinite>
            <div key={0}>153****300转入活宝 12,000元 41秒前</div>
            <div key={1}>Carousel 2</div>
            <div key={2}>Carousel 3</div>
          </Carousel>
        </Body>
      </Card>
      <WhiteSpace />
    </View>
  );
};
