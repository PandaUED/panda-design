/**
 * Created by Liqi on 18/1/12.
 */
import React from 'react';
import styled from 'styled-components';
import { style, WhiteSpace, BgIcon, Icon } from 'pand';

const BgIconDemo = styled.div`
  > a {
    display: block;
    padding: 1rem;
    background: #fff;
    color: #444;
    ${style.split.bottom};
  }
`;

class PageBgIcon extends React.Component {
  render() {
    return (
      <BgIconDemo>
        <WhiteSpace>直接传入，带默认值</WhiteSpace>
        <a href="">
          <BgIcon type="Bell" double />
        </a>
        <WhiteSpace>直接传入，填入所有参数</WhiteSpace>
        <a href="">
          <BgIcon
            bgSize={40}
            bgColor={style.gradient.red()}
            shape={BgIcon.SHAPE.ROUND}
            size={24}
            type="Bell"
            double
            color={['#fff', 'rgba(255,255,255,0.5)']}
          />
        </a>
        <WhiteSpace>以children形式传入Icon</WhiteSpace>
        <a href="">
          <BgIcon>
            <Icon type="Bell" double size={24} />
          </BgIcon>
        </a>
      </BgIconDemo>
    );
  }
}

export default PageBgIcon;
