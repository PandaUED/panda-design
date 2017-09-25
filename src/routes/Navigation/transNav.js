import { style, View, NavBar, NAVBAR_MODE } from 'pand';
import styled from 'styled-components';

const transNav = () => {
    const PageView = styled(View)`
    height: 1600px;
    background-color: #f8f8f8!important;
	`;


    return (
        <PageView>
            <NavBar mode={NAVBAR_MODE.TRANS}/>
        </PageView>
    );
};

export {transNav}