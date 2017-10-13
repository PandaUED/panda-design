# 步骤条

显示步骤。三种type。

## API
### Steps
| 属性        | 说明                                |   类型   |   默认值   |
| :-------- | --------------------------------- | :----: | :-----: |
| type      | 样式                | string | ["horizontal" \ "vertical" \ "progress"] |
| data      | 数据                | array  | [] |
| **OTHER** |                    |        |         |
| classname | 样式类名            | string |    -    |
| color     | 主要颜色(用于progress类Steps)            | string |    "red"    |


### horizontal类型data数据格式
| 名称        | 说明                                |   类型   |   默认值   |
| :-------- | --------------------------------- | :----: | :-----: |
| name      | 步骤名称                | string  | '步骤1' |
| num       | 第几步                  | number  | 1 |
| status    | 步骤进行状态             | string  | 'active' or 'holding' |

### vertical类型data数据格式
| 名称        | 说明                                |   类型   |   默认值   |
| :-------- | --------------------------------- | :----: | :-----: |
| name      | 步骤名称                | string  | '步骤1' |
| desc      | 详细介绍，辅助说明        | string  | '辅助说明文字' |
| status    | 步骤进行状态             | string  | 'finish' or 'active' or 'holding' or 'error' |

### progress类型data数据格式
| 名称        | 说明                                |   类型   |   默认值   |
| :-------- | --------------------------------- | :----: | :-----: |
| name      | 步骤名称（下方文字）             | string  | '当日计息' |
| time      | 时间                           | string  | '07月13日 当日' |
| desc      | 当前时间操作                    | string  | '之前转入' |
| status    | 步骤进行状态                    | string  | 'active' or 'holding' |
| rate      | 步骤占进度条百分比               | string  | '30%' |
| right     | 当前步骤右侧节点，有time和desc参数| object  | { time: '2018年08月13日到期退出', desc: '期间每月一次免费转出' } |
