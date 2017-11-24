import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, {ThemeProvider} from 'styled-components';

const props = {
    color: PropTypes.string,
};
const BasicView = styled.div`
  overflow-x: hidden;
  width: 100%;
  background: ${({theme}) => theme.color};
`;
const View = ({color = 'transparent', className, ...other}) => {
    return (
        <ThemeProvider theme={{color}}>
            <BasicView {...other} className={classnames('xMainViewWrapper', className)}/>
        </ThemeProvider>
    );
};

View.propTypes = props;

export default View;
