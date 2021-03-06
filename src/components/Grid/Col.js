import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { style } from '../style_index';

const props = {
  className: PropTypes.string,
  children: PropTypes.node,
  span: PropTypes.number,
  offset: PropTypes.number,
  height: PropTypes.number,
};

const Col = ({ className, children = 'example', span, offset = 0, height, ...other }) => {
  const Col = styled.div`
    flex: ${span + offset};
    text-align: center;
    display: flex;
    ${height && `height: ${height}px;`};
  `;
  const ColOffest = styled.div`
    flex: ${offset};
    text-align: center;
  `;
  const ColContent = styled.div`
    flex: ${span};
    background-color: ${style.color.white};
    padding: 0 0;
    text-align: center;
  `;

  return (
    <Col className={className} {...other}>
      {offset > 0 && <ColOffest className={className ? `${className}-offset` : ''} />}
      <ColContent className={className ? `${className}-content` : ''}>{children}</ColContent>
    </Col>
  );
};

Col.propTypes = props;

export default Col;
