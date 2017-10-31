# 小标签

展示数据细节，用作tab选项,
TODO 图标变色

## API

| 属性              | 说明                         | 类型      | 默认值   |
| --------------- | -------------------------- | ------- | ----- |
| backgroundColor | 背景颜色，值可从/color页面选取         | string  | white |
| textColor       | 标题文字颜色，值可从/color页面选取       | string  | white |
| deg             | 渐变角度，如果deg存在，背景自动变为渐变色     | number  | -     |
| type            | 标签样式，详见`TAG_TYPE`五种        | string  | BIG   |
| img             | 标签里的icon                   | string  | -     |
| color           | 标签icon颜色，值可从/color页面选取     | string  | -     |
| border          | 当type为`FILTER`时有效，显示边框而非阴影 | Boolean | false |
| **OTHER**       |                            |         |       |
| classname       | 样式类名                       | string  | -     |
| style           | 自定义样式                      | object  | -     |

##TAG_TYPE

```
BIG, FILTER, LARGE, MIDDLE, SMALL
```

