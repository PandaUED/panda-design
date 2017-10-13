# 键盘

- 代替原生键盘
- type: `password / calculator`


## API


| 属性   | 说明      |   类型   |   默认值   |
| :-------- | ------ | :----: | :-----: |
| type | 键盘类型 | password / calculator | password |
| onChange | 键盘输入回调 | func | null |
| onHide | 键盘隐藏回调（calculator only） | func | null |
| onConfirm | 键盘确认回调（calculator only） | func | null |
| checkValue | 键盘输入过滤确认回调（calculator only） | func | null |
| numLimit | 验证码数字个数限制（password only） | number | 6 |
| icon | 左下角icon定制（password only） | node | null |
| keyboardCls | 样式类名 | string | null |