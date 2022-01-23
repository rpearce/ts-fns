export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/source/*.ts'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {},
  preset: 'ts-jest',
  setupFilesAfterEnv: [],
  testEnvironment: 'node',
  verbose: true,
}
