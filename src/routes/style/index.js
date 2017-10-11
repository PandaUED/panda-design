import _ from 'lodash';
import { Card, style, View, WhiteSpace } from 'pand';
import { rgba } from 'polished';
import styled from 'styled-components';

const { Header } = Card;

export default () => {
  const Item = styled.div`
    margin: 0.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Ball = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    margin: 0.8rem 0;
  `;
  const Color = Ball.extend`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: ${porp => porp.color};
    box-shadow: 0 8px 24px 0 ${porp => rgba(porp.color, 0.5)};
    margin: 0.8rem 0;
  `;
  const Gradient = Ball.extend`
    background: ${porp => porp.gradient};
    box-shadow: 0 8px 24px 0 ${porp => rgba(porp.color, 0.5)};
  `;
  const Title = styled.div`
    text-align: center;
    color: ${style.color.textNormal};
    margin-bottom: 0.6rem;
    font-size: 0.8rem;
  `;
  const Hex = Title.extend`
    color: ${style.color.textLight};
    font-size: 0.7rem;
    margin-bottom: 0.4rem;
  `;
  const GradientHex = Hex.extend`
    width: 72px;
    position: relative;
    widows: 100%;
    &:before {
      content: '●';
      color: ${porp => porp.color};
      position: absolute;
      left: 0;
    }
  `;

  const Body = styled(Card.Body)`
    display: flex;
    flex-wrap: wrap;
  `;

  const ColorDisplay = [];

  _.forEach(style.color, (color, key) => {
    ColorDisplay.push(
      <Item key={key}>
        <Color color={color} />
        <Title>{key}</Title>
        <Hex>{color}</Hex>
      </Item>
    );
  });

  const GradientDisplay = [];

  _.forEach(style.gradient, (color, key) => {
    const Color = color(45);
    const ColorArray = Color.replace(/(.*)\(|\)|[0-9]+%|[0-9]+deg/g, '').split(',');
    GradientDisplay.push(
      <Item key={key}>
        <Gradient color={style.color[key]} gradient={Color} />
        <Title>{key}</Title>
        <GradientHex color={ColorArray[1]}>{ColorArray[1]}</GradientHex>
        <GradientHex color={ColorArray[2]}>{ColorArray[2]}</GradientHex>
      </Item>
    );
  });

  return (
    <View>
      <WhiteSpace />
      <Card>
        <Header split>Gradient</Header>
        <Body padding>{GradientDisplay}</Body>
      </Card>
      <WhiteSpace />
      <Card>
        <Header split>Color</Header>
        <Body padding>{ColorDisplay}</Body>
      </Card>
    </View>
  );
};
