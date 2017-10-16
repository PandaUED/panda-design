# 验证码键盘

- 使用定制键盘输入验证码，禁用原生键盘

## API

```js
Password.open();
Password.close();
```




| 属性   | 说明      |   类型   |   默认值   |
| :-------- | ------ | :----: | :-----: |
| onPasswordFinish | 输入完成回调（含value参数） | func | null |
| onClose | 关闭回调（含value参数） | func | null |
| passwordNum | 验证码位数限制 | number | 6 |
| actionBar | actionBar内容 | node | null |
| notice | noticeBar内容 | string | null |
| icon | 键盘左下角icon | node | null |