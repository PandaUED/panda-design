import { Button, View } from 'pand';
import styled from 'styled-components';

export default () => {
	const PageView = styled(View)`
	> a {
		margin: 1rem;
	}
	`;

	return (
		<PageView>
			<Button round color="primary">按钮标题</Button>
			<Button round ghost>按钮标题</Button>
			<Button round disabled>按钮标题</Button>
			<Button round color="primary" deg={-45} shadow>按钮标题</Button>
			<Button round size="small" color="primary" deg={45} shadow highlight>按钮标题</Button>
		</PageView>
	);
}