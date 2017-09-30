import { Card, Carousel, View, WhiteSpace } from 'pand';
import styled from 'styled-components';

let { Header, Body } = Card;

export default () => {
  Body = styled(Body)`
    > a {
      margin-bottom: 1rem;
    }
  `;
  const CarouselHeader = styled.div`
    padding-top: 16px;
    padding-bottom: 16px;
    width: 100%;
  `;
  const Title = styled.div`
    font-family: PingFangSC-Medium;
    font-size: 13px;
    color: #5bb547;
    line-height: 13px;
  `;
  const Wrapper = styled.div`
    text-align: center;
    padding-bottom: 16px;
  `;
  const Text = styled.div`
    font-family: PingFangSC-Medium;
    font-size: 13px;
    color: #999;
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
          <Header split>Carousel Safe</Header>
          <Wrapper>
            <CarouselHeader>
              <Title>新网银行资金存管</Title>
            </CarouselHeader>
            <Carousel vertical autoplay infinite>
              <Text key={0}>153****300转入活宝 12,000元 41秒前</Text>
              <Text key={1}>Carousel 2</Text>
              <Text key={2}>Carousel 3</Text>
            </Carousel>
          </Wrapper>
        </Body>
      </Card>
      <WhiteSpace />
    </View>
  );
};
