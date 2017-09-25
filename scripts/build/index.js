import frontMatter from 'front-matter';
import fs from 'fs-extra';
import path from 'path';
import _ from 'lodash';
const pathSrc = './src/components';
const pathJs = './src/routes';
const pathDist = './data';
export default () => {
  const files = fs.readdirSync(pathSrc);
  return files.forEach(item => {
    if (
      item === 'Example' ||
      !fs.statSync(path.join(pathSrc, item)).isDirectory()
    )
      return;

    // 读取md
    const data = fs.readFileSync(path.join(pathSrc, item, 'index.md'), 'utf-8');
    const parsed = frontMatter(data);
    const json = { ...parsed.attributes };
    json.name = item;
    json.class = _.startCase(json.class);
    json.body = parsed.body
      .replace(/^`````([\w\:]+)$/gm, '`````$1-')
      .replace(/(\n){3,}/g, '\n\n');
    json.body = json.body.replace(/(#(.*))\n/, (m, m1) => {
      json.title = m1.replace('#', '').replace(/^ /, '');
      return m.replace(m1, '');
    });

    // 读取js example
    try {
      const dataCode = fs.readFileSync(
        path.join(pathJs, item, 'index.js'),
        'utf-8'
      );
      const parsedCode = frontMatter(dataCode);
      json.code = parsedCode.body;
      console.error(`+ 完成 [${item}]`);
    } catch (e) {
      json.code = false;
      console.error(`- 缺少 [${item}] - Example页面`);
    }

    fs.writeFileSync(
      path.join(pathDist, _.kebabCase(item)),
      JSON.stringify(json)
    );
  });
};
