import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../';

const props = {
	split: PropTypes.bool
};

const CardHeader = ({
	                    split = false,
	                    children,
	                    ...other
                    }) => {
	let CardHeader = styled.div`
	background: #fff;
	height: 54px;
	display:flex;
	align-items: center;
	justify-content: space-between;
	padding:0 16px;
	font-weight: 600;
	${style.text.ellipsis};
	${split ? `border-bottom: 1px solid ${style.color.split}` : ``};
	`;

	return (
		<CardHeader {...other}>{children}</CardHeader>
	);
};

CardHeader.propTypes = props;

export default CardHeader;