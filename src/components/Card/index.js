import React from 'react';
import styled from 'styled-components';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import './_card.scss';

const props = {};

const CardStyle = styled.div`background: #fff;`;

// styledComponent很恶心，如果不这样写，外层组件state更新就会触发styledComponent组件的重新渲染，内部state状态就失踪了
// TODO：貌似还有其他解决办法，如ThemeProvider
const Card = ({ children = 'example', className = '', noMarginTop = false, ...other }) => {
  let CardStyleExtend = CardStyle;
  if (noMarginTop) {
    CardStyleExtend = CardStyle.extend`margin-top: 0 !important;`;
  }

  return (
    <CardStyleExtend className={`${className} xm-card`} {...other}>
      {children}
    </CardStyleExtend>
  );
};

Card.propTypes = props;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
