/**
 * Author: Ruo
 * Create: 2017-10-07
 * Description:
 */
import React from 'react';
import styled from 'styled-components';

const TabContainer = styled.div`
  position: relative;
  width: auto;
  height: 54px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-align: center;
  appearance: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export { TabContainer };
