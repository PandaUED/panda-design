import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = (
	{
		type,
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

Button.propTypes = {
	type    : PropTypes.string,
	size    : PropTypes.string,
	disabled: PropTypes.bool
};

export default Button;