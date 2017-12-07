# 按钮

点击后会触发一个操作。

## API

| 属性        | 说明                                |   类型   |   默认值   |
| :-------- | --------------------------------- | :----: | :-----: |
| color     | 按钮颜色，值可从/color页面选取                | string | primary |
| textColor      | 文字颜色，值可从/color页面选取           | string | #fff |
| textActiveColor| 文字激活状态颜色，值可从/color页面选取    | string | rgba(255, 255, 255, 0.7) |
| deg       | 渐变角度，如果deg存在，按钮将自动变为渐变色           | number |    -    |
| size      | 按钮大小，可选值为 large , defualt , small | string | default |
| round     | 是否为圆角按钮                           |  bool  |  true  |
| ghost     | 是否为线框按钮                           |  bool  |  false  |
| border    | 在线框按钮的情况下是否显示描边                   |  bool  |  true   |
| shadow    | 是否显示按钮阴影(和按钮颜色相同)                 |  bool  |  false  |
| highlight | 是否显示右上角高光                         |  bool  |  false  |
| disabled   | 设置禁用                              |  bool  |  false  |
| **OTHER** |                                   |        |         |
| classname | 样式类名                              | string |    -    |
| style     | 自定义样式                             | object |    -    |
| onClick   | 点击按钮的点击回调函数                       |  func  |    -    |
| children     | 填写在按钮中内容，如文字，iconfont                | any | - |
