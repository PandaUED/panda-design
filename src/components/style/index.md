---
class: Variable
---

# 样式变量

包含颜色等全局样式变量

## API

| 属性       | 说明             | 类型     | 调用方法                                     |
| :------- | -------------- | ------ | ---------------------------------------- |
| color    | 颜色             | string | `style.color[type]`               |
| gradient | 渐变色,支持自定义deg角度 | func   | `style.gradient[type](deg:number)` |
| split | 真实1px分割线，需要填写方向`all`,`top`,`bottom`,`left`,`right` | string   | `style.split[direction]` |
| text | 关于文字的快捷样式,如过长截断省略等`ellipsis` | string   | `style.split[type]` |
