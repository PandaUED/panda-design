import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../';

const props   = {

};

const CardHeader = ({children,...other}) =>{
	let CardHeader = styled.div`
	background: #fff;
	`;
	return (
		<CardHeader {...other}>{children}</CardHeader>
	);
}

CardHeader.propTypes = props

export default CardHeader;