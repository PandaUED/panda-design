# 计算器

- 使用定制键盘输入数值，禁用原生键盘
- 根据传入的 `计算函数（需纯函数）`计算结果并输出
- 如未传入计算函数， 直接输出输入值
- 现有过滤两位小数的输入过滤函数，支持传入 `输入过滤函数（需纯函数）`



## API

```js
Calculator.open();
Calculator.close();
```


| 属性   | 说明      |   类型   |   默认值   |
| :-------- | ------ | :----: | :-----: |
| calculateFunc | 计算函数 | func | null |
| checkValue | 输入过滤函数 | func | 过滤两位小数 |
| onClose | 关闭弹窗回调 | func | null |
| onConfirm | 点击确认按钮回调 | func | null |
| notice | noticeBar内容 | string | null |
| content | 更多内容接口 | node | null |
