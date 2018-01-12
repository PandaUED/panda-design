# 带背景的图标


## API



| 属性   | 说明      |   类型   |   默认值   |
| :-------- | ------ | :----: | :-----: |
| bgSize |  | number | 40 |
| bgColor |  | string | #FF6700 |
| shape |  | BgIcon.SHAPE（ROUND／SQUARE） | BgIcon.SHAPE.ROUND |
| marginRight |  | number | 0 |
|  **Icon配置（同Icon组件）**  |  |  |  |
|  **也可不配置Icon，直接嵌入node** |  |  |  |
| size      | 图标尺寸`16`,`24`,`32`, 和图标名有对应关系，只做调用，后可更改尺寸 |    Number    | 24 |
| type      | 图标名，大小写皆可以                               |    String    |               -                |
| double    | 是否是双色图标                                  |   Boolean    |               -                | false |
| color     | 图标颜色，双色图标时为数组                            | string/array | See：[color](../style/index.md) |
| iconClassName | 样式类名                                     |    String    | double ? ['#fff', 'rgba(255,255,255,0.5)'] : '#fff' |
| **OTHER** |                                          |              |                                |
| className | 样式类名                                     |    String    |               -                |
| style     | 自定义样式                                    |    Object    |               -                |
