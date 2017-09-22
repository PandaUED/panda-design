import cssnano from 'cssnano';
import pxtorem from 'postcss-pxtorem';

export default {
	entry              : {
		'index' : './src/index.js',
		'common': './src/vendor.js'
	},
	multipage          : true,
	publicPath         : '/',
	disableCSSModules  : false,
	hash               : true,
	sass               : {
		sourceMap   : process.env.NODE_ENV === 'development',
		includePaths: [
			'node_modules',
			'src/components/style'
		]
	},
	extraPostCSSPlugins: [
		pxtorem({
			        rootValue    : 16,
			        propWhiteList: []
		        })
	],
	extraBabelPlugins  : [
		'transform-runtime',
		'lodash'
	],
	autoprefixer       : {
		browsers: [
			'iOS >= 8',
			'Android >= 4'
		]
	},
	env                : {
		development: {
			'extraBabelPlugins': [
				'dva-hmr'
			]
		},
		production : {
			extraPostCSSPlugins: [
				cssnano({
					        preset: [
						        'default',
						        {discardComments: {removeAll: true}}
					        ]
				        })
			]
		}
	},
	dllPlugin          : {
		exclude: [
			'babel-runtime'
		],
		include: [
			'dva/router',
			'dva/saga',
			'dva/fetch'
		]
	}
};

