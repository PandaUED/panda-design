import { Link } from 'dva/router';
import _ from 'lodash';
import { style, View, WhiteSpace } from 'pand';
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

	// url链接驼峰转中划线
	const MakeLink = ({to}) => <Link to={_.kebabCase(to)}>{to}</Link>;

	return (
		<PageView>

			<WhiteSpace>Style</WhiteSpace>
			<MakeLink to="Color" />

			<WhiteSpace>Layout</WhiteSpace>
			<MakeLink to="WhiteSpace" />
			<MakeLink to="WingBlank" />

			<WhiteSpace>Data Entry</WhiteSpace>
			<MakeLink to="Button" />
			<MakeLink to="Card" />
		</PageView>
	);
}