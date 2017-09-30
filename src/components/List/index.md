# 列表

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作

## API

### List

| 属性        | 说明                                |   类型   |   默认值   |
| :-------- | --------------------------------- | :----: | :-----: |
| header     | 列表头部，不设置表示不渲染                   | node | - |
| footer     | 列表尾部，不设置表示不渲染                   | node | - |
| split      | 列表头尾是否有分界线                          | bool |    true    |
| **OTHER** |                                   |        |         |
| className | 样式类名                              | string |    -    |


### List.Item

| 属性         | 说明                                |   类型   |   默认值   |
| :--------   | ---------------------------------   | :----: | :-----: |
| split      | 是否向下分割(加下margin)                          | bool |    false    |
| border     | 是否向下分割(加下border)  | bool |    false    |
| onClick     | 点击时的处理                          | func |    -    |
| padding     | 左右padding值(设置后上下padding默认16px)。不加或false表示完全无padding。 | bool或number |    true   |
| **OTHER** |                                   |        |         |
| className | 样式类名                              | string |    -    |
