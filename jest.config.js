module.exports = {
  globals: {
    'babel-jest': {
      babelConfig: true,
    },
  },
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '.*': 'babel-jest',
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.ts?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'src/node_modules/(?!@mui)',
    '[/\\\\](node_modules|deploy)[/\\\\].+\\.(js|jsx)$',
  ],
  testPathIgnorePatterns: ['./node_modules/'],
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  modulePathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules|deploy|scripts)[/\\\\]'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
