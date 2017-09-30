# Cell

包裹一行信息，常用于列表List内。可以直接添加内容，也可以分成左中右三部分分别添加。

## API

### Cell

| 属性        | 说明                                |   类型   |   默认值   |
| :-------- | --------------------------------- | :----: | :-----: |
| along     |表示不与List搭配使用               | bool | false |
| center     | 内容是否需要居中                   | bool | false |
| **OTHER** |   只是提供这些接口，觉得麻烦的话可以在内层node里自己写样式       |        |         |
| className | 样式类名                              | string |    -    |
| color | 文字颜色                              | string |    '#444'    |
| bold | 文字是否加粗                              | bool |    false   |
| fontSize | 字体大小                            | number |    14   |
| padding | 不与List搭配使用时常需设置内边距       | number |    16   |
| margin | Cell的左右margin                            | number |    0   |


### Cell.Left

| 属性        | 说明                                |   类型   |   默认值   |
| :-------- | --------------------------------- | :----: | :-----: |
| **OTHER** |   只是提供这些接口，觉得麻烦的话可以在内层node里自己写样式       |        |         |
| className | 样式类名                              | string |    -    |
| color | 文字颜色                              | string |    '#999'    |
| size | 字体大小                            | number |    14   |


### Cell.Main

| 属性         | 说明                                |   类型   |   默认值   |
| :--------   | ---------------------------------   | :----: | :-----: |
| desc      | 可以选择添加描述部分                          | node |    -    |
| **OTHER** | 只是提供这些接口，觉得麻烦的话可以在内层node里自己写样式     |        |         |
| className | 样式类名, 如果有desc部分,则也作为desc部分类名前缀       | string |    -    |
| color | 文字颜色                              | string |    '#999'    |
| size | 字体大小                            | number |    14   |
| marginLeft | 左边距                              | number |    12    |
| descSize | 描述部分字体大小                            | number |    12   |
| descMargin | 描述部分距title部分距离                            | number |    8   |


### Cell.Right

| 属性        | 说明                                |   类型   |   默认值   |
| :-------- | --------------------------------- | :----: | :-----: |
| right | 距离右边距离                            | number |    16   |
| **OTHER** |   只是提供这些接口，觉得麻烦的话可以在内层node里自己写样式       |        |         |
| className | 样式类名                              | string |    -    |
| color | 文字颜色                              | string |    '#666D78'    |
| size | 字体大小                            | number |    13   |
