import { Link } from 'dva/router';
import { style, View } from 'pand';
import styled from 'styled-components';

export default () => {
	const PageView = styled(View)`
	> a {
		display: block;
		padding: 1rem;
		background:#fff;
		color:#444;
		${style.split.bottom}
	}
	`;
	return (
		<PageView>
			<Link to="/color">Color</Link>
			<Link to="/button">Button</Link>
		</PageView>
	);
}