import { Tag, TAG_TYPE, WhiteSpace } from 'pand';
import React from 'react';
import styled from 'styled-components';

export default class extends React.Component {
  render() {
    const TagRow = styled.div`
      display: flex;
      background: white;
      justify-content: space-around;
      padding: 8px;
      height: 54px;
    `;

    return (
      <view>
        <WhiteSpace>big</WhiteSpace>
        <TagRow>
          <Tag type={TAG_TYPE.BIG} backgroundColor={'red'} deg={-180}>
            1个可用
          </Tag>
        </TagRow>

        <WhiteSpace>small</WhiteSpace>
        <TagRow>
          <Tag type={TAG_TYPE.SMALL} backgroundColor={'textDark'} img={'VipSmall'} color={'gold'}>
            尊享
          </Tag>
          <Tag type={TAG_TYPE.SMALL} backgroundColor={'red'} deg={-180}>
            秒杀
          </Tag>
          <Tag type={TAG_TYPE.SMALL} backgroundColor={'bgDeactive'}>
            3月期
          </Tag>
        </TagRow>
        <WhiteSpace>middle</WhiteSpace>
        <TagRow>
          <Tag type={TAG_TYPE.MIDDLE} backgroundColor={'bgDeactive'} />
          <Tag type={TAG_TYPE.MIDDLE} textColor={'darkGrey'} />
        </TagRow>
        <WhiteSpace>large</WhiteSpace>
        <TagRow>
          <Tag type={TAG_TYPE.LARGE} img={'Note'} textColor={'textDark'} />
        </TagRow>
        <WhiteSpace>fliter</WhiteSpace>
        <TagRow>
          <Tag type={TAG_TYPE.FILTER} textColor={'textNormal'} />
          <Tag type={TAG_TYPE.FILTER} textColor={'blue'} />
          <Tag type={TAG_TYPE.FILTER} border />
        </TagRow>

        <WhiteSpace>LargeRow</WhiteSpace>
        <TagRow>
          <Tag type={TAG_TYPE.LARGE} img={'Note'} textColor={'textDark'} />
          <Tag type={TAG_TYPE.LARGE} img={'Note'} textColor={'textDark'} />
          <Tag type={TAG_TYPE.LARGE} img={'Note'} textColor={'textDark'} />
          <Tag type={TAG_TYPE.LARGE} img={'Note'} textColor={'textDark'} />
        </TagRow>
      </view>
    );
  }
}
