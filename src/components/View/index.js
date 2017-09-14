import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
	color: PropTypes.string
};

const View = ({
	              color = 'transparent',
	              ...other
              }) => {
	const View = styled.div`
	overflow-x: hidden;
	width: 100%;
	background: ${color};
	position: relative;
	`;
	return <View {...other} />;
};

View.propTypes = props;

export default View;