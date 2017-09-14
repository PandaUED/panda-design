import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
	size: PropTypes.number
};

const WingBlank = ({
	                   size = 16,
	                   ...other
                   }) => {
	let WingBlank = styled.div`
	padding: 0 ${size}px
	`;
	return (
		<WingBlank {...other}/>
	);
};

WingBlank.propTypes = props;

export default WingBlank;