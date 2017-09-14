import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../';

const props   = {

};

const CardBody = ({children,...other}) =>{
	let CardBody = styled.div`
	background: #fff;
	`;
	return (
		<CardBody {...other}>{children}</CardBody>
	);
}

CardBody.propTypes = props

export default CardBody;