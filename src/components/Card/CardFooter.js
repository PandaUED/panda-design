import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../';

const props   = {

};

const CardFooter = ({children,...other}) =>{
	let CardFooter = styled.div`
	background: #fff;
	`;
	return (
		<CardFooter {...other}>{children}</CardFooter>
	);
}

CardFooter.propTypes = props

export default CardFooter;