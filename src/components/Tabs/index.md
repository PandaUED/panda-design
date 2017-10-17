Parent:: TabFrame

# 选项夹标题栏

用来展示产品信息

## API
###tabs
| 属性             | 说明              | 类型     | 可选值                            | 默认值      |
| -------------- | --------------- | ------ | ------------------------------ | -------- |
| titles[Object] | tab数据,元素为对象     | Array  | -                              | -        |
| activeColor    | tab选项夹被激活时的字体颜色 | String | See：[color](../style/index.md) | **blue** |
| activeIndex    | 默认激活的 tab索引     | Number | -                              | 0        |
| linkBar        | 滑动的下划线          | Array  | -                              | -        |
| **OTHER**      |                 |        |                                |          |

###tab

| 属性        | 说明          | 类型            | 可选值  | 默认值   |
| --------- | ----------- | ------------- | ---- | ----- |
| title     | tab数据,元素为对象 | Node          | -    | -     |
| disable   | 禁用onClick事件 | Boolean       | -    | false |
| **OTHER** |             |               |      |       |
| Style     | -           | Object        | -    | -     |
| className | -           | String/Object | -    | -     |
| onClick   | -           | Function      | -    | -     |



