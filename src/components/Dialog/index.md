# 对话框

## 规则

- 一次只显示一个 Dialog
- 根节点初始化 `<DialogSharedInstance />`

## API

```js
Dialog.sharedInstance.alert({
    title,
    message,
    confirmBtn,
    theme,
    callback,
    icon,
});

Dialog.sharedInstance.confirm({
    title,
    message,
    confirmBtn,
    cancelBtn,
    theme,
    callback,
    icon,
});
```

| 属性   | 说明      |   类型   |   默认值   |
| :-------- | ------ | :----: | :-----: |
| title | 标题 | string | null |
| message | 描述 | string | null |
| confirmBtn | 确认按钮 | string | 确认 |
| cancelBtn | 取消按钮（confirm only） | string | 取消 |
| theme | 对话主题 | classic／new | classic |
| callback | 点击按钮回调，可选result参数 | func | null |
| icon | 顶部icon(theme==='new' only) | node | null |
| closable | 是否在蒙层显示关闭按钮	 | bool | false |