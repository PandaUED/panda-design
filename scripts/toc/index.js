import fs from 'fs-extra';
import path from 'path';
const pathDist = './data';

export default (cb) => {
	let tocData = [];
	const files = fs.readdirSync(pathDist);
	files.forEach(item => {
		if (item === 'toc') return;
		let data = JSON.parse(fs.readFileSync(path.join(pathDist, item)));
		tocData.push({
			             name : data.name,
			             title: data.title
		             });
	});

	fs.writeFileSync(path.join(pathDist, 'toc'), JSON.stringify(tocData));
}