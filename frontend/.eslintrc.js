module.exports = {
  'env': {
    'es6': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
    'import',
    'simple-import-sort',
  ],
  'settings': {
    'import/resolver': {
      'node': {
        'moduleDirectory': [
          'node_modules',
          'src',
        ]
      }
    }
  },
  'rules': {
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {'argsIgnorePattern': '^_' }],
    '@typescript-eslint/member-ordering': ['warn', {
      'default': [
        'static-field',
        'instance-field',
        'static-method',
        'instance-method',
      ]
    }],
    'no-param-reassign': 'error',
    'no-console': 'error',
    'no-fallthrough': 'error',
  },
};
