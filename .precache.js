module.exports = {
	stripPrefix: 'dist/',
	staticFileGlobs: [
		'dist/img/**/*',
		'dist/favicons/*',
		'dist/fonts/*',
		'dist/*common*'
	],
	dontCacheBustUrlsMatching: /./,
	swFilePath: 'dist/precache.js'
};