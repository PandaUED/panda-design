import { Button } from '../../components';
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
			<Button round color="primary">This is Button</Button>
			<Button round color="primary" deg={-45}>This is Button</Button>
			<Button round ghost>This is Button</Button>
			<Button round size="small" color="primary" deg={45}>This is Button</Button>
		</View>
	);
}