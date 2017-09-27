import fs from 'fs-extra';
import path from 'path';
import _ from 'lodash';
import Config from '../../src/config'
const pathDist = './data';

export default cb => {

  let tocData = {}

	_.forEach(Config, (item,key) => tocData[_.startCase(key)] = []);

  const files = fs.readdirSync(pathDist);
	files.forEach(item => {
    if (item === 'toc') return;
    let data = JSON.parse(fs.readFileSync(path.join(pathDist, item)));
    tocData[data.class].push({
      name: data.name,
      title: data.title,
    });
  });

  fs.writeFileSync(path.join(pathDist, 'toc'), JSON.stringify(tocData));
};
