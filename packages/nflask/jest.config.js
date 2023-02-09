const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');
const { name } = require('./package.json');
const base = require('../../jest.config.base');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    ...base,
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
    }),
    displayName: name,
};
