import _ from 'lodash';
import { Card, style, View, WhiteSpace } from 'pand';
import { rgba } from 'polished';
import styled from 'styled-components';

export default () => {
	let {Header, Body} = Card;
	Body               = styled(Body)`
		display: flex;
		flex-wrap: wrap;
  `;

	const Item         = styled.div`
		margin:.4rem;
		display: flex;
		flex-direction: column;
		align-items: center;
`;
	const Ball         = styled.div`
		width: 72px;
		height: 72px;
		border-radius: 50%;
		margin: .8rem 0;
`;
	const Color        = Ball.extend`
		width: 72px;
		height: 72px;
		border-radius: 50%;
		background: ${porp => porp.color};	
		box-shadow: 0 8px 24px 0 ${porp => rgba(porp.color, 0.5)};
		margin: .8rem 0;
`;
	const Gradient     = Ball.extend`
		background: ${porp => porp.gradient};	
		box-shadow: 0 8px 24px 0 ${porp => rgba(porp.color, 0.5)};
`;
	const Title        = styled.div`
		text-align: center;
		color: ${style.color.textNoraml};
		margin-bottom: .6rem;
		font-size: .8rem;
`;
	const Hex          = Title.extend`
		color: ${style.color.textLight};
		font-size: .7rem;
		margin-bottom: .4rem;
`;
	const GradientHex  = Hex.extend`
		width: 72px;
		position: relative;
		widows: 100%;
		&:before{
				content:"●";
				color:${porp => porp.color};
				position: absolute;
				left: 0;
		}
`;
	const ColorDisplay = [];

	_.forEach(style.color, (color, key) => {
		ColorDisplay.push(
			<Item key={key}>
				<Color color={color}/>
				<Title>{key}</Title>
				<Hex>{color}</Hex>
			</Item>
		);
	});

	const GradientDisplay = [];

	_.forEach(style.gradient, (color, key) => {
		color          = color(45);
		let ColorArray = color.replace(/(.*)\(|\)|[0-9]+%|[0-9]+deg/g, '').split(',');
		GradientDisplay.push(
			<Item key={key}>
				<Gradient color={style.color[key]} gradient={color}/>
				<Title>{key}</Title>
				<GradientHex color={ColorArray[1]}>{ColorArray[1]}</GradientHex>
				<GradientHex color={ColorArray[2]}>{ColorArray[2]}</GradientHex>
			</Item>
		);
	});

	return (
		<View>
			<WhiteSpace/>
			<Card>
				<Header split>Gradient</Header>
				<Body padding>
				{GradientDisplay}
				</Body>
			</Card>
			<WhiteSpace/>
			<Card>
				<Card.Header split>Color</Card.Header>
				<Body padding>
				{ColorDisplay}
				</Body>
			</Card>
		</View>
	);
}