# 选项夹

## 梗概
1. 当元素数量少于4个时，默认给tabs加上左右padding，即元素会向中间靠拢，两边留出一定空白
2. 当设置 `buttonGroup = true` 时取消padding，即元素占据整个容器宽度
3. 本组件包含tabs和content

## API
### TabFrame - 不能包含子元素
| 属性               | 说明                         | 类型      | 可选值                            | 默认值      |
| ---------------- | -------------------------- | ------- | ------------------------------ | -------- |
| tabsData[Object] | 请查看Tabs组件文档                | Array   | -                              | []       |
| linkBar          | 添加滑动的下划线                   | Boolean | -                              | false    |
| buttonGroup      | 将标签选项夹设置为按钮组               | Boolean | -                              | false    |
| activeColor      | tab选项夹被激活时的字体颜色            | String  | See：[color](../style/index.md) | **blue** |
| activeIndex      | 默认激活的 tab索引                | Number  | -                              | 0        |
| tabsPosition     | 设置tabs的位置                  | String  | top／bottom                     | top      |
| confirm          | 设置该框架为文字描述 + 按钮            | Boolean | -                              | false    |
| description      | 当`confirm = true`时显示的描述性文字 | Boolean | -                              | false    |

### tabsData[Object] - [Tabs](../tabs) 

该配置可用于[**Tabs**](../tabs)组件中的tabsData属性

| 属性                  | 说明                 | 类型       | 可选值  | 默认值  |
| ------------------- | ------------------ | -------- | ---- | ---- |
| [tab](#tab)         | tab的属性             | Object   | -    | -    |
| content             | tab标签激活时要显示的内容     | Node     | -    | -    |
| beforeRenderContent | 在content渲染前调用的钩子函数 | Function | -    | -    |
| afterRenderContent  | 在content渲染后调用的钩子函数 | Function | -    | -    |



### tab - [Tab](../tabs/index.md)

icon是另外封装在TabFrame的BasicTab中，Tab组件中没有相关配置

| 属性             | 说明           | 类型            | 可选值                            | 默认值    |
| -------------- | ------------ | ------------- | ------------------------------ | ------ |
| title          | tab内容        | Node          | -                              | -      |
| [icon](#icon)  | tab图标        | Obejct        | -                              | -      |
| highlight      | 设置渐变（高亮）背景   | Boolean       | -                              | false  |
| highlightColor | 设置渐变（高亮）背景颜色 | String        | See：[color](../style/index.md) | orange |
| **OTHER**      |              |               |                                |        |
| style          | -            | Object        | -                              | -      |
| className      | -            | String/Object | -                              | -      |
| onClick        | -            | Function      | -                              | -      |



### icon - [Icon](../icon/index.md) 

为空对象或者不设置将不显示icon

| 属性       | 说明                               | 类型   | 可选值  | 默认值  |
| -------- | -------------------------------- | ---- | ---- | ---- |
| common   | 默认情况下显示的icon                     | Node | -    | -    |
| Selected | 激活情况下显示的icon，没有则显示common状态下的icon | Node | -    | -    |



示例：

```jsx
const tabsData = [
  {
    tab: {
      title: <div>首页<Badge className={'corner'}>188</Badge></div>,
      icon: {
        common: <Icon size={iconSize} type={'Home'} />,
        selected: <Icon size={iconSize} type={'HomeActive'} double />,
  	  },
      style: {
        width: '64px',
        flexGrow: 0,
      },
      onClick: () => {alert('test');},
      highlight: true, // 设置渐变（高亮）背景
      description: '本月省1次免费转出机会', // 如果要设置description，请同时设置confirm
    },
    content: <View>首页内容</View>,
  },
  {...}, // 省略
];
this.state = {
    activeIndex: 0,
};
// JSX
<TabFrame 
  tabsData={tabsData} 
  activeIndex={activeIndex} 
  activeColor={'orange'}
  tabsPosition={'bottom'}
  confirm
  linkBar
/>
```

