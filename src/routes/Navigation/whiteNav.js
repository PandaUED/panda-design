import { NavBar, NAVBAR_MODE, View } from 'pand';
import styled from 'styled-components';

const whiteNav = () => {
  const PageView = styled(View)`
    height: 1600px;
    background-color: #f8f8f8 !important;
  `;

  return (
    <PageView>
      <NavBar mode={NAVBAR_MODE.WHITE} />
    </PageView>
  );
};

export { whiteNav };
