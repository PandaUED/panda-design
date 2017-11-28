import React from 'react';
import styled from 'styled-components';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import './_card.scss';

const props = {};

const CardStyle = styled.div`
  background: #fff;
  ${props =>
    !!props.noMarginTop &&
    `&::before{
        display: none !important;
      }`};
`;

const Card = ({ children = 'example', className = '', noMarginTop = false, ...other }) => {
  return (
    <CardStyle noMarginTop={noMarginTop} className={`${className} xm-card`} {...other}>
      {children}
    </CardStyle>
  );
};

Card.propTypes = props;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
