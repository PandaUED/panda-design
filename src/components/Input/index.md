# 输入框

说明用途

## API

| 属性        | 说明                                |   类型   |   默认值   |
| :-------- | --------------------------------- | :----: | :-----: |
| size            | 样式                | string | 'small' |
| placeholder     | 占位                | string | - |
| left            | 左icon              | node   | - |
| right           | 有侧按钮             | node   | - |
| type            | 提供输入类型检测      | string | 'tel' or 'money' |
| value           | 外部可写入值，注意会导致组件刷新             | string   | - |
| defaultValue    | 初始值               | string   | - |
| readOnly        | 控制Input是否只读           | bool   | false |
| showClear       | 是否显示右侧清空icon           | bool   | false |
| **OTHER**       |                                      |        |         |
| classname       | 样式类名                              | string |    -    |
| onChange        | 输入框值变化的回调函数                  |  func  |    -    |
| onClick         | 输入框点击事件的回调函数，以实现如开启键盘等功能                 |  func  |    -    |
