# 样式变量

包含颜色等全局样式变量

## API

| 属性       | 说明                                       | 类型     | 调用方法                               |
| :------- | ---------------------------------------- | ------ | ---------------------------------- |
| color    | 颜色                                       | string | `style.color[type]`                |
| gradient | 渐变色,支持自定义deg角度                           | func   | `style.gradient[type](deg:number)` |
| split    | 真实1px分割线，需要填写方向`all`,`top`,`bottom`,`left`,`right` | string | `style.split[direction]`           |
| text     | 关于文字的快捷样式,如过长截断省略等`ellipsis`             | string | `style.split[type]`                |



### color

| 颜色名    | 颜色值  |
| ------ | ---- |
 |redbag|#FF5F5F|
 |red|#FF5F5F|
 |orange|#FF6700|
 |yellow|#FFB300|
 |green|#07CF93|
 |blue|#5891EF|
 |purple|#DA59E9|
 |darkGrey|#828994|
 |textDark|#444|
 |textNormal|#666|
 |textLight|#999|
 |textDeactive|#BBBFC8|
 |placeholder|#CACACA|
 |split|#eee|
 |bgDeactive|#D6D9E0|
 |bgNotice|#FAFBFB|
 |bgPage|#F8F8F8|
 |white|#FFF|
 |gold|#D2BA8A|
 |silvery|#BDC4CF|
 |cooper|#DD9D78|

