module.exports = {
	stripPrefix: 'dist/',
	staticFileGlobs: [
		// 'dist/**/*',
		// 'dist/favicon/*',
		// 'dist/font/*',
		'dist/*common*'
	],
	dontCacheBustUrlsMatching: /./,
	swFilePath: 'dist/precache.js'
};