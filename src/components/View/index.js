import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const props = {
  color: PropTypes.string,
};
const BasicView = styled.div`
  overflow-x: hidden;
  width: 100%;
  background: ${({ theme }) => theme.color};
`;
const View = ({ color = 'transparent', ...other }) => {
  return (
    <ThemeProvider theme={{ color }}>
      <BasicView {...other} />
    </ThemeProvider>
  );
};

View.propTypes = props;

export default View;
