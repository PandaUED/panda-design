import PropTypes from "prop-types";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { style } from "../";

const props = {};

const Card = ({ children = "example", ...other }) => {
  const Card = styled.div`background: #fff;`;

  return <Card {...other}>{children}</Card>;
};

Card.propTypes = props;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
