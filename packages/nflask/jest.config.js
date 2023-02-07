const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    rootDir: './',
    testMatch: ['<rootDir>/test/__tests__/**/*.test.ts'],
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
