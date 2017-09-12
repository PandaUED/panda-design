export default {
	entry            : {
		'index' : './src/index.js',
		'common': './src/vendor.js'
	},
	multipage        : true,
	publicPath       : '/',
	disableCSSModules: true,
	hash             : true,
	sass             : {
		sourceMap   : process.env.NODE_ENV === 'development',
		includePaths: [
			'node_modules',
			'src/style'
		]
	},
	extraBabelPlugins: [
		'transform-runtime',
		'lodash'
	],
	autoprefixer     : {
		browsers: [
			'iOS >= 8',
			'Android >= 4'
		]
	},
	env              : {
		development: {
			'extraBabelPlugins': [
				'dva-hmr'
			]
		}
	},
	dllPlugin        : {
		exclude: [
			'babel-runtime',
		],
		include: [
			'dva/router',
			'dva/saga',
			'dva/fetch'
		]
	}
};

