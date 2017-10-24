import styled from 'styled-components';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import './_card.scss';

const props = {};

const Card = ({ children = 'example', className = '', ...other }) => {
  const Card = styled.div`
    background: #fff;
  `;

  return (
    <Card className={`${className} xm-card`} {...other}>
      {children}
    </Card>
  );
};

Card.propTypes = props;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
