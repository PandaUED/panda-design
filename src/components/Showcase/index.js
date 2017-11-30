/**
 * Created by lichenguang on 2017/9/15.
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import { style } from '../style_index';

const props = {
  backgroundColor: PropTypes.oneOf(Object.keys(style.color)),
  titleColor: PropTypes.oneOf(Object.keys(style.color)),
  deg: PropTypes.number,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  leftDesc: PropTypes.string,
  leftTitle: PropTypes.string,
  rightDesc: PropTypes.string,
  rightTitle: PropTypes.string,
  button: PropTypes.node,
  backgroundText: PropTypes.string,
};

const Showcase = ({
  backgroundColor = 'white',
  titleColor,
  deg,
  title,
  desc,
  leftDesc,
  leftTitle,
  rightDesc,
  rightTitle,
  bottomDesc,
  button,
  backgroundText,
  ...other
}) => {
  let Showcase = styled.div`
    height: ${backgroundColor === 'white' ? (bottomDesc ? '156px' : '162px') : '152px'};
    border-radius: 6px;
    margin: ${backgroundColor === 'white' ? null : '8px 15px 14px 17px'};
    box-shadow: 0 4px 4px 0 ${rgba(style.color[backgroundColor], 0.41)};
    padding: ${backgroundColor === 'white' ? '16px' : '18px'};
    background: ${style.color[backgroundColor]};
    overflow: hidden;
    color: ${backgroundColor === 'white' ? null : '#fff'};
    flex-shrink: 0;
    line-height: 1;
  `;

  if (deg) {
    Showcase = Showcase.extend`background: ${style.gradient[backgroundColor](deg)};`;
  }

  const Title = styled.div`
    font-size: 36px;
    margin-top: 10px;
    color: ${titleColor ? style.color[titleColor] : bottomDesc ? '#56606F' : null};
  `;
  const Desc = styled.div`
    font-size: 11px;
    opacity: 0.6;
    color: ${backgroundColor === 'white' ? '#666D78' : null};
  `;
  const Subtitle = Title.extend`
    font-family: PingFangSC-Medium;
    font-size: 16px;
    margin-top: 6px;
    color: ${backgroundColor === 'white' ? '#444' : null};
  `;
  const Button = styled.div`
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 100px;
    padding: 6px 9.5px 6px 10.5px;
    font-size: 10px;
    align-self: flex-start;
  `;
  const BottomDesc = Desc.extend`
    line-height: 16px;
    letter-spacing: 0.4px;
  `;
  const Cell = styled.div`flex: 1;`;
  const ShowcaseHeader = styled.div`display: flex;`;
  const ShowcaseContent = styled(ShowcaseHeader)`
    margin-top: ${bottomDesc ? '16' : '25'}px;
    letter-spacing: ${bottomDesc ? 0 : 0.4}px;
  `;
  const ShowcaseBackground = styled.span`
    opacity: 0.08;
    font-size: 100px;
    float: right;
    margin-top: -62px;
    margin-right: -46px;
    color: ${style.color.white};
    font-weight: bold;
  `;

  return (
    <Showcase {...other}>
      <ShowcaseHeader>
        <Cell>
          <Desc>{desc}</Desc>
          <Title>{title}</Title>
        </Cell>
        {button ? <Button>{button}</Button> : null}
      </ShowcaseHeader>
      <ShowcaseContent>
        {leftDesc &&
          leftTitle && (
            <Cell>
              <Desc>{leftDesc}</Desc>
              <Subtitle>{leftTitle}</Subtitle>
            </Cell>
          )}
        {rightDesc &&
          rightTitle && (
            <Cell
              style={{
                textIndent: 16,
                boxShadow: backgroundColor === 'white' ? '#f8f8f8 0.5px 0px 0px inset' : null,
              }}
            >
              <Desc>{rightDesc}</Desc>
              <Subtitle>{rightTitle}</Subtitle>
            </Cell>
          )}
        {bottomDesc && (
          <Cell>
            <BottomDesc>{bottomDesc}</BottomDesc>
          </Cell>
        )}
      </ShowcaseContent>
      {backgroundText ? <ShowcaseBackground>{backgroundText}</ShowcaseBackground> : null}
    </Showcase>
  );
};

Showcase.propTypes = props;

export default Showcase;
