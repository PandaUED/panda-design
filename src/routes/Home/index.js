import { Link } from 'dva/router';
import styled from 'styled-components';

export default () => {
	const Home = styled.div`
	> a {
		display: block;
		padding: 1rem;
		background:#fff;
		border-bottom:1px solid #f8f8f8;
		color:#444;
	}
	`;
	return (
		<Home>
			<Link to="/color">Color</Link>
			<Link to="/button">Button</Link>
		</Home>
	);
}