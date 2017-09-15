import { Button, Card, View, WhiteSpace } from 'pand';
import styled from 'styled-components';

let {Header, Body} = Card;

export default () => {

	Body = styled(Body)`
	> a{
	margin-bottom: 1rem;
	}
  `;

	return (
		<View>
			<WhiteSpace/>
			<Card>
				<Header split>Button</Header>
				<Body padding>
				<Button round color="primary">按钮标题</Button>
				<Button round ghost>按钮标题</Button>
				<Button round disabled>按钮标题</Button>
				<Button round color="primary" deg={-45} shadow>按钮标题</Button>
				<Button round size="small" color="primary" deg={45} shadow highlight>按钮标题</Button>
				</Body>
			</Card>
			<WhiteSpace/>
		</View>
	);
}