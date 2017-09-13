import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import style from '../../style';

const props = {
	color   : PropTypes.string,
	deg     : PropTypes.number,
	size    : PropTypes.oneOf(['large', 'default', 'small']),
	round   : PropTypes.bool,
	ghost   : PropTypes.bool,
	border  : PropTypes.bool,
	disabled: PropTypes.bool
};

const Button = ({
	                color = 'primary',
	                deg,
	                size = 'default',
	                round = false,
	                ghost = false,
	                border = true,
	                disabled = false,
	                children,
	                ...other
                }) => {
	let Btn = styled.a`
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		background: transparent;
		border: 1px solid transparent;
		height: ${{large: 54, default: 48, small: 36}[size]}px;
		font-size: ${{large: 18, default: 16, small: 14}[size]}px;
		border-radius: ${round ? {large: 54, default: 48, small: 36}[size] / 2 : 0}px;
	`;

	if (ghost) {
		Btn = Btn.extend`
		border-color: ${border ? style.color[color] : 'transparent'};
		color:${style.color[color]};
	`;
	} else {
		Btn = Btn.extend`
		background: ${deg ? style.gradient[color](deg) : style.color[color]};
		color:#fff;
	`;
	}
	return (
		<Btn role="button" {...other}>{children}</Btn>
	);
};

Button.propTypes = props;

export default Button;