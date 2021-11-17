const baseConfig = require('./../../jest.base.config');

module.exports = {
  ...baseConfig,
  modulePathIgnorePatterns: ['tests/e2e/'],
  collectCoverageFrom: ['composables/**/*.ts'],
  testMatch: ['<rootDir>/**/tests/unit/**/*spec.[jt]s?(x)']
};
