import { Link } from 'dva/router';
import {style} from 'pand';
import styled from 'styled-components';

export default () => {
	const Home = styled.div`
	> a {
		display: block;
		padding: 1rem;
		background:#fff;
		color:#444;
		${style.split.bottom}
	}
	`;
	return (
		<Home>
			<Link to="/color">Color</Link>
			<Link to="/button">Button</Link>
		</Home>
	);
}