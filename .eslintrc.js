// https://www.npmjs.com/package/eslint-plugin-cypress

// eslint-disable-next-line no-undef
module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'cypress/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:cypress/recommended'
  ],
  'plugins': [
    'cypress'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'parser': '@babel/eslint-parser',
    'requireConfigFile': false,
  },

  'rules': {
    'no-console': 0,
    'max-len': ['warn', 120],
    // 'no-undef': 0,
    'imports-order': 0,

    'comma-dangle': ['error', 'only-multiline'],
    'indent': ['error', 2],

    'semi': ['error', 'always'],

    // https://eslint.org/docs/rules/brace-style
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }], // allman || stroustrup || 1tbs

    'no-multi-spaces': 0,
    'no-lonely-if'   : 0,

    'padded-blocks': ['error', {
      'blocks'  : 'never',
      'classes' : 'always',
      'switches': 'never'
    }, { 'allowSingleLineBlocks': true }],

    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    // https://eslint.org/docs/rules/quote-props
    'quote-props': ['error', 'consistent'],

    'camelcase': ['error', { properties: 'always', ignoreDestructuring: true }],

    'object-shorthand': [2, 'consistent'],
    'no-multiple-empty-lines': ['error', { max: 2 }],

    'cypress/no-unnecessary-waiting': 0,
  },
};
