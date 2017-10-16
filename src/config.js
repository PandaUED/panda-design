// routes里的文件夹名要和组件名一一对应
// 不同的组件要尽量拆成不同的文件夹，不要塞在一起
// 文档请不要留白也会报错，至少复制Example中的文档
export default {
  Variable: ['style'],
  Layout: ['View', 'WhiteSpace', 'WingBlank', 'Grid'],
  Navigation: ['NavBar', 'Tabs', 'TabBar', 'Steps'],
  DataEntry: ['Icon', 'Button', 'Card', 'Avatar', 'Input', 'Switch', 'CheckBox', 'Radio'],
  DataDisplay: ['Showcase', 'Carousel', 'List', 'Cell', 'Badge', 'Tag', 'NoticeBar'],
  Feedback: ['Modal', 'Dialog', 'Toast', 'ActionSheet', 'Keyboard'],
  Combination: ['Combine', 'Calculator'],
  Gesture: [],
  Other: [],
};
const Ignore = ['Example', 'utlis'];
export { Ignore };
