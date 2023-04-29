import type { JestConfigWithTsJest } from 'ts-jest'
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json'

function manageKey(key: string): string {
  return key.includes('(.*)') ? key.slice(0, -1) + '\\.js$' : key;
}

function manageMapper(mapper: Record<string, string>): Record<string, string> {
  console.log(mapper)
  const newMapper: Record<string, string> = {};
  for (const key in mapper) {
     newMapper[manageKey(key)] = mapper[key];
  }
  newMapper['^src/(.*).js$'] = '<rootDir>/src/$1';
  return newMapper;
}

const config:JestConfigWithTsJest = {
  verbose: true,
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  roots: ['<rootDir>src/__tests__'],
  testMatch: ['**/**.test.ts'],
  transform: {
    '^.+\\.ts|.js?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  modulePaths: [
    "<rootDir>"
  ],
  moduleFileExtensions: ["ts", "js"],
  moduleNameMapper: manageMapper(
    pathsToModuleNameMapper(
      compilerOptions.paths, { prefix: '<rootDir>/' }
      ) as Record<string, string>
    ),
  collectCoverageFrom: ['src/**', '!src/__tests__/**'],
  maxWorkers: 1,
};

export default config;