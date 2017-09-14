import { Button } from 'pand';
import styled from 'styled-components'

export default () => {
	const View = styled.div`
		padding:1rem;
		> a{
			margin-bottom: 1rem;
		}
	`

	return (
		<View>
			<Button round color="primary">按钮标题</Button>
			<Button round color="primary" deg={-45}>按钮标题</Button>
			<Button round ghost>按钮标题</Button>
			<Button round size="small" color="primary" deg={45}>按钮标题</Button>
		</View>
	);
}