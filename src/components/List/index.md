# 列表

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作

## API

### List


| 属性        | 说明                                |   类型   |   默认值   |
| :-------- | --------------------------------- | :----: | :-----: |
| classname | 样式类名                              | string |    -    |
| header     | 列表头部，false可以不渲染                   | object |    false    |
| footer     | 列表尾部，false可以不渲染                    | object |    false    |
| split      | 列表头尾是否有分界线                          | bool |    true    |


### List.Item

| 属性         | 说明                                |   类型   |   默认值   |
| :--------   | ---------------------------------   | :----: | :-----: |
| split      | 是否向下分割                          | bool |    false    |
| onClick     | 点击时的处理                          | func |    -    |
| padding     | 是否需要16px边距,适用于内层元素是cell时 | bool |    -    |
