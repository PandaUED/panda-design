import { darken, rgba } from 'polished';
import PropTypes from 'prop-types';
import TouchFeedback from 'rmc-feedback';
import styled from 'styled-components';
import { style } from '../';

const props = {
	color    : PropTypes.oneOf(Object.keys(style.color)),
	deg      : PropTypes.number,
	size     : PropTypes.oneOf(['large', 'default', 'small']),
	round    : PropTypes.bool,
	ghost    : PropTypes.bool,
	border   : PropTypes.bool,
	shadow   : PropTypes.bool,
	highlight: PropTypes.bool,
	disabled : PropTypes.bool,
	onClick  : PropTypes.func
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
	                onClick,
	                children,
	                ...other
                }) => {
	let Button = styled.a`
		cursor: pointer;
    text-align: center;
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
		-webkit-appearance: none;
		${style.text.ellipsis}
	`;

	if (ghost) {
		const theme = style.color[color];
		Button         = Button.extend`
		color:${theme};
		${(border) ? `border: 1px solid ${theme}` : ``};
		`;
		if (!disabled) Button = Button.extend`
		&:active{
		color:${darken(0.08, theme)};
		${(border) ? `border-color:${darken(0.08, theme)}` : ``};
		}
`;
	} else if (deg) {
		const theme       = style.gradient[color](deg);
		const themeActive = `linear-gradient(rgba(0,0,0,.08) 0%,rgba(0,0,0,.08) 100%)`;
		Button               = Button.extend`
		background: ${theme};
		color:#fff;
		`;
		if (!disabled) Button = Button.extend`
		&:active{
		background: ${themeActive},${theme};
		color:rgba(255,255,255,.7)
		}
		`;
	} else {
		const theme = style.color[color];
		Button         = Button.extend`
		background: ${theme};
		color:#fff;
		`;
		if (!disabled) Button = Button.extend`
		&:active{
		background:${darken(0.05, theme)};
		color:rgba(255,255,255,.7)
		}
		`;
	}

	if (shadow) {
		const shadowColor = style.color[color];
		Button               = Button.extend`
		box-shadow: 0 ${{
			large  : `10px 30px`,
			default: `8px 24px`,
			small  : `6px 18px`
		}[size]} 0 ${rgba(shadowColor, 0.3)};
	`;
	}

	if (highlight) {
		const hightlightSize = {large: 6, default: 5, small: 4}[size];
		Button                  = Button.extend`
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

	if (disabled) {
		Button = Button.extend`
			opacity: .5;
			cursor: not-allowed;
    `;
	}

	return (
		<TouchFeedback disabled={disabled}>
			<Button role="button" onClick={disabled ? undefined : onClick} {...other}>
				{children}
			</Button>
		</TouchFeedback>
	);
};

Button.propTypes = props;

export default Button;