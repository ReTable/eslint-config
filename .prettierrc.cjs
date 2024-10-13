const base = require('@tabula/prettier-config');

module.exports = {
  ...base,

  importOrder: ['^node:.*$', '^eslint$', '^@eslint/', '<THIRD_PARTY_MODULES>', '^[./]'],
};
