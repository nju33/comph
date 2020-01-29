module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.test.json',
      diagnostics: true
    }
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '\\.test\\.ts$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  setupFilesAfterEnv: ['./tests/setup.ts']
};
