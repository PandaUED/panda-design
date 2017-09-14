import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../';

const props   = {
	children: PropTypes.string
};

const Example = ({children = 'example', ...other}) => {
	let Example = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		color: ${style.color.placeholder};
		background: ${transparent ? `transparent` : style.color.bgNotice};
	`;

	return (
		<Example {...other}>
			{children}
		</Example>
	);
};

Example.propTypes = props;

export default Example;