import _ from 'lodash';
import { style, View, WhiteSpace } from 'pand';
import styled from 'styled-components';
import { MakeLink } from '../../utils/router';
import Config from '../../config';

export default () => {
  const PageView = styled(View)`
    > a {
      display: block;
      padding: 1rem;
      background: #fff;
      color: #444;
      ${style.split.bottom};
    }
  `;

  const list = [];

  _.forEach(Config, (item, key) => {
    list.push(<WhiteSpace key={key}>{key}</WhiteSpace>);
    item.forEach(link => {
      list.push(<MakeLink key={link} to={link} />);
    });
  });

  return <PageView>{list}</PageView>;
};
