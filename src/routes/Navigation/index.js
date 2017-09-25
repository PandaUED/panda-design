import { Link } from 'dva/router';
import _ from 'lodash';
import { style, View, WhiteSpace } from 'pand';
import styled from 'styled-components';
import {whiteNav} from './whiteNav';
import {transNav} from './transNav';

const Navigation = () => {
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
    const MakeLink = ({to, title}) => <Link to={_.kebabCase(to)}>{title}</Link>;

    return (
        <PageView>
            <WhiteSpace>Navigation</WhiteSpace>
            <MakeLink to="/navigation-trans" title="trans"/>
            <MakeLink to="/navigation-white" title="white"/>
        </PageView>
    );
};

export {
    whiteNav,
    transNav,
    Navigation
}