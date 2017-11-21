# 轻提示

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。

## 规则

- 一次只显示一个 toast
- 根节点初始化 `<ToastSharedInstance />`

## API

```js
Toast.sharedInstance.showSuccess/showFail({
    title,
    desc,
    button,
    duration,
    onClose,
});

Toast.sharedInstance.show({
    title,
    desc,
    button,
    duration,
    onClose,
    icon, // 自定义icon
});
```

| 属性   | 说明      |   类型   |   默认值   |
| :-------- | ------ | :----: | :-----: |
| title     | 标题 | string | 温馨提示 |
| desc | 详细描述 | string |    null    |
| button | 右侧按钮文案 | string | null |
| hasFooterBar | 当前页面是否有footerBar | bool | false |
| onClose | 右侧按钮关闭回调 | function | null|
| duration| 自动关闭时间 | number | `button ? 3000: 1000`|
| icon | 左侧icon | node | null |