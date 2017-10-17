# 选项夹

## 梗概
1. 当元素数量少于4个时，默认给tabs加上左右padding，即元素会向中间靠拢，两边留出一定空白
2. 当设置 `buttonGroup = true` 时取消padding，即元素占据整个容器宽度
3. 本组件包含tabs和content

## API
### TabFrame - 不能包含自元素
| 属性                                       | 说明                         | 类型      | 可选值                            | 默认值      |
| ---------------------------------------- | -------------------------- | ------- | ------------------------------ | -------- |
| [tabsData[Object]](#tabsData[Object] - [Tabs](../tabs/index.md)) | 请查看Tabs组件文档                | Array   | -                              | []       |
| linkBar                                  | 添加滑动的下划线                   | Boolean | -                              | false    |
| buttonGroup                              | 将标签选项夹设置为按钮组               | Boolean | -                              | false    |
| activeColor                              | tab选项夹被激活时的字体颜色            | String  | See：[color](../style/index.md) | **blue** |
| activeIndex                              | 默认激活的 tab索引                | Number  | -                              | 0        |
| tabsPosition                             | 设置tabs的位置                  | String  | top／bottom                     | top      |
| confirm                                  | 设置该框架为文字描述 + 按钮            | Boolean | -                              | false    |
| description                              | 当`confirm = true`时显示的描述性文字 | Boolean | -                              | false    |

### tabsData[Object] - [Tabs](../tabs/index.md) 

该配置可用于[**Tabs**](../tabs/index.js)组件中的tabsData属性

| 属性          | 说明             | 类型     | 可选值  | 默认值  |
| ----------- | -------------- | ------ | ---- | ---- |
| [tab](#tab) | tab的属性         | Object | -    | -    |
| content     | tab标签激活时要显示的内容 | Node   | -    | -    |



### tab - [Tab](../tabs/index.md)

icon是另外封装在TabFrame的BasicTab中，Tab组件中没有相关配置

| 属性            | 说明         | 类型            | 可选值  | 默认值   |
| ------------- | ---------- | ------------- | ---- | ----- |
| title         | tab内容      | Node          | -    | -     |
| [icon](#icon) | tab图标      | Obejct        | -    | -     |
| highlight     | 设置渐变（高亮）背景 | Boolean       | -    | false |
| **OTHER**     |            |               |      |       |
| style         | -          | Object        | -    | -     |
| className     | -          | String/Object | -    | -     |
| onClick       | -          | Function      | -    | -     |



### icon - [Icon](../icon/index.md) 

为空或者不设置将不显示icon

| 属性       | 说明           | 类型   | 可选值  | 默认值  |
| -------- | ------------ | ---- | ---- | ---- |
| common   | 默认情况下显示的icon | Node | -    | -    |
| Selected | 激活情况下显示的icon | Node | -    | -    |

