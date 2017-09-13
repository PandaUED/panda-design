import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const props = {
	type    : PropTypes.oneOf(['primary']),
	size    : PropTypes.oneOf(['large','middle','small']),
	disabled: PropTypes.bool
};

const Button = (
	{
		type = 'primary',
		size = 'large',
		disabled = false,
		children,
		...other
	}
) => {
	const Btn = styled.a`
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		height: ${{large: 54, small: 44}[size]}px;
`;

	return (
		<Btn role="button" {...other}>{children}</Btn>
	);
};

Button.propTypes = props

export default Button;