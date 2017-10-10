# 通知栏

页面内栏状显示通知，可滚动循环播放，可定时或手动删除。

## API

| 属性        | 说明                                |   类型   |   默认值   |
| :-------- | --------------------------------- | :----: | :-----: |
| closable     | 是否显示右侧关闭按钮                | bool | false |
| marquee     | 文字是否滚动显示                | bool | false |
| center     | 文字是否居中显示                | bool | false |
| visible     | 是否可见，用于控制notice展示                | bool | false |
| **OTHER** |                                   |        |         |
| classname | 样式类名                              | string |    -    |
| icon     | 可添加左侧icon                             | node |    -    |
| onClose   | 点击右侧关闭按钮的回调函数                       |  func  |    -    |
