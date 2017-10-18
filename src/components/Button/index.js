/**
 * Author: CM & Ruo
 * Create: 2017-09-28
 * Description: 按钮组件
 */
import React from 'react';
import { darken, rgba } from 'polished';
import TouchFeedback from 'rmc-feedback';
import styled, { css } from 'styled-components';
import { style } from '../style_index';

// 预设
const heightSize = { large: 54, default: 48, small: 36 };
const fontSize = { large: 16, default: 16, small: 14 };
const borderRadiusSize = { large: 54, default: 48, small: 36 };
const hightlightSize = { large: 6, default: 5, small: 4 };
const shadowSize = {
  large: '10px 30px',
  default: '8px 24px',
  small: '6px 18px',
};

// 配置函数
const sizeFn = (sizeObject, size) => sizeObject[size];

const heightSizeFn = size => sizeFn(heightSize, size);
const fontSizeFn = size => sizeFn(fontSize, size);
const borderRadiusSizeFn = (round, size) => (round ? sizeFn(borderRadiusSize, size) / 2 : 0);
const shadowSizeFn = size => sizeFn(shadowSize, size);
const hightlightSizeFn = size => sizeFn(hightlightSize, size);

const singleColorFn = color => style.color[color];
const gradientColorFn = (color, deg) => style.gradient[color](deg);

// 组件正文
const Button = ({
  color = 'primary',
  children,
  onClick,
  deg = null,
  size = 'default',
  round = false,
  ghost = false,
  border = true,
  shadow = false,
  highlight = false,
  disabled = false,
  ...other
}) => {
  // 线框样式
  const ghostStyleSheet = css`
    color: ${singleColorFn(color)};
    border: ${border ? ` 1px solid ${singleColorFn(color)}` : ''};
    background-color: #fff;
    &:active {
      color: ${darken(0.08, singleColorFn(color))};
      ${border ? `border-color:${darken(0.08, singleColorFn(color))}` : ''};
      background-color: #fff;
    }
  `;
  // 背景渐变样式
  const degStyleSheet = css`
    background: ${gradientColorFn(color, deg)};
    color: #fff;
    &:active {
      background: 'linear-gradient(rgba(0,0,0,.08) 0%,rgba(0,0,0,.08) 100%)',
        ${gradientColorFn(color, deg)};
      color: rgba(255, 255, 255, 0.7);
    }
  `;
  // 阴影样式
  const shadowStyleSheet = css`
    box-shadow: 0 ${shadowSizeFn(size)} 0 ${rgba(singleColorFn(color), 0.3)};
  `;
  // 右上角高光的样式
  const highlightStyleSheet = css`
    :after {
      content: '';
      display: block;
      width: ${hightlightSizeFn(size) * 2}px;
      height: ${hightlightSizeFn(size) * 2}px;
      border-top: ${hightlightSizeFn(size) - 2}px solid;
      border-right: ${hightlightSizeFn(size) - 2}px solid;
      border-color: rgba(255, 255, 255, 0.3);
      position: absolute;
      border-radius: 0 100% 0 0;
      right: ${hightlightSizeFn(size) * 1.25}px;
      top: ${hightlightSizeFn(size) * 1.25}px;
    }
  `;
  // 禁用时的样式
  const disabledStyleSheet = css`
    opacity: 0.5;
    cursor: not-allowed;
  `;
  const BasicButton = styled.a`
    // display
    position: relative;
    display: flex;
    box-sizing: border-box;
    height: ${heightSizeFn(size)}px;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    -webkit-appearance: none;
    // common
    color: #fff;
    font-size: ${fontSizeFn(size)}px;
    font-weight: 500;
    background: ${singleColorFn(color)};
    border-radius: ${borderRadiusSizeFn(round, size)}px;
    cursor: pointer;
    &:active {
      background: ${darken(0.05, singleColorFn(color))};
      color: rgba(255, 255, 255, 0.7);
    }
    ${style.text.ellipsis};
    // 线框
    ${!disabled && ghost ? ghostStyleSheet : ''};
    // 渐变
    ${!(disabled || ghost || deg === null) ? degStyleSheet : ''};
    ${shadow ? shadowStyleSheet : ''};
    ${highlight ? highlightStyleSheet : ''};
    ${disabled ? disabledStyleSheet : ''};
  `;

  return (
    <TouchFeedback disabled={disabled}>
      <BasicButton role="button" onClick={onClick} {...other}>
        {children}
      </BasicButton>
    </TouchFeedback>
  );
};
export { Button };
