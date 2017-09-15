import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../';

const props = {
	split: PropTypes.bool
};

const CardFooter = ({
	                    split = false,
	                    children,
	                    ...other
                    }) => {
	let CardFooter = styled.div`
	min-height: 44px;
	${split ? `border-top: 1px solid ${style.color.split}` : ``};
	`;
	return (
		<CardFooter {...other}>{children}</CardFooter>
	);
};

CardFooter.propTypes = props;

export default CardFooter;