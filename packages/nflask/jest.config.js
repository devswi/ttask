const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    verbose: true,
    silent: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: './',
    testRegex: '(/test/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    moduleFileExtensions: ['ts', 'js'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['!**/node_modules/**', '!**/dist/**', '**/src/**'],
    coverageDirectory: 'test/coverage',
    coverageReporters: ['json', 'lcov', 'clover'],
    transform: {
        '^.+\\ts$': 'ts-jest',
    },
};
