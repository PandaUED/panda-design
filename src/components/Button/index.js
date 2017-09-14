import { rgba } from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { style } from '../';

const props = {
	color    : PropTypes.string,
	deg      : PropTypes.number,
	size     : PropTypes.oneOf(['large', 'default', 'small']),
	round    : PropTypes.bool,
	ghost    : PropTypes.bool,
	border   : PropTypes.bool,
	shadow   : PropTypes.bool,
	highlight: PropTypes.bool,
	disabled : PropTypes.bool
};

const Button = ({
	                color = 'primary',
	                deg,
	                size = 'default',
	                round = false,
	                ghost = false,
	                border = true,
	                shadow = false,
	                highlight = false,
	                disabled = false,
	                children,
	                ...other
                }) => {
	let Btn = styled.a`
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		background: transparent;
		height: ${{large: 54, default: 48, small: 36}[size]}px;
		font-size: ${{large: 18, default: 16, small: 14}[size]}px;
		font-weight: 500;
		border-radius: ${round ? {large: 54, default: 48, small: 36}[size] / 2 : 0}px;
		position: relative;
		overflow:hidden;
		:before {
			content:"";
			display: none;
			background: rgba(0,0,0,.05);
			width: 100%;
			height: 100%;
			position: absolute;
			top:0;
			left:0;
		}
		&:active{
			&:before{
				display: block;
			}
		}
	`;

	if (ghost && !deg) {
		Btn = Btn.extend`
		border: 1px solid ${style.color[color]};
		color:${style.color[color]};
	`;
	} else {
		Btn = Btn.extend`
		background: ${deg ? style.gradient[color](deg) : style.color[color]};
		color:#fff;
	`;
	}

	if (shadow) {
		const shadowColor = style.color[color];
		Btn               = Btn.extend`
		box-shadow: 0 ${{
			large  : `10px 30px`,
			default: `8px 24px`,
			small  : `6px 18px`
		}[size]} 0 ${rgba(shadowColor, 0.3)};
	`;
	}

	if (highlight) {
		const hightlightSize = {large: 6, default: 5, small: 4}[size];
		Btn                  = Btn.extend`
		:after{
				content:"";
				display: block;
				width: ${hightlightSize * 2}px;
				height: ${hightlightSize * 2}px;
				border-top:${hightlightSize - 2}px solid;
				border-right:${hightlightSize - 2}px solid;
				border-color: rgba(255,255,255,.3);
				position: absolute;
				right:${hightlightSize * 1.25}px;
				top:${hightlightSize * 1.25}px;
				border-radius:0 100% 0  0;
			}
		`;
	}
	return (
		<Btn role="button" {...other}>{children}</Btn>
	);
};

Button.propTypes = props;

export default Button;