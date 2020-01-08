module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "class-methods-use-this":"off",
    "no-param-reassing": "off",
    "camelcase":"off",
    "no-unused-var":["error", {"argsIgnorePattern":"next"}]
  },
};
