module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'eqeqeq': 'warn',
    'strict': 'off',
    'no-dupe-args': 'warn',
    'no-extra-boolean-cast': 'warn',
    'no-extra-semi': 'error',
    'no-extra-label': 'error',
    'no-extra-bind': 'error',
    'no-extra-parens': 'error',
  },
};
