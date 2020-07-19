import { compilerOptions } from './tsconfig.json'
import { pathsToModuleNameMapper } from 'ts-jest/utils'

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,ts}'],
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      statements: 22.67,
      branches: 13.81,
      lines: 24,
      functions: 19.86
    }
  },
  maxWorkers: '50%',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  preset: 'ts-jest',

  // The root directory that Jest should scan for tests and modules within
  rootDir: 'src',
  roots: ['<rootDir>'],
  testEnvironment: 'node'
  // The glob patterns Jest uses to detect test files
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],
}
