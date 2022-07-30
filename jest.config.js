module.exports = {
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  // Jest transformations -- this adds support for TypeScript
  // using babel-jest and ts-jest
  transform: {
    '.*': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'src/node_modules/(?!@mui)',
    '[/\\\\](node_modules|deploy)[/\\\\].+\\.(js|jsx|json)$',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '.*/test($|/.*)'],
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
  moduleDirectories: ['<rootDir>', 'node_modules/', './src'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  coveragePathIgnorePatterns: ['^.*\\.stories\\.[jt]sx?$', '.*/test($|/.*)'],
  // verbose: true,
  resetMocks: true,
};
