module.exports = {
	parser       : 'babel-eslint',
	extends      : [
		'standard',
		'plugin:flowtype/recommended',
		'plugin:react/recommended',
		'prettier',
		'prettier/flowtype',
		'prettier/react',
		'prettier/standard'
	],
	plugins      : [
		'flowtype',
		'react',
		'prettier',
		'standard'
	],
	parserOptions: {
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
			'jsx'                         : true
		}
	},
	globals      : {
		'window'   : true,
		'document' : true,
		'navigator': true
	},
	env          : {
		'es6' : true,
		'node': true
	},
	rules        : {
		'prettier/prettier'       : [2, {
		  'singleQuote': true,
      'trailingComma': 'es5',
      'parser': 'flow',
      'printWidth': 100,
		}],
		'react/react-in-jsx-scope': [0],
		'react/prop-types'        : [1],
		'react/display-name'      : [0],
		'react/no-children-prop'  : [0],
		'no-unused-vars'          : [1],
		'react/require-default-props': [0]
	}
};