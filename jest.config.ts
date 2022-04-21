import type { Config } from '@jest/types'
import { pathsToModuleNameMapper } from 'ts-jest'
import { defaults as tsjPreset } from 'ts-jest/presets'
import { compilerOptions } from './tsconfig.json'

const config: Config.InitialOptions = {
  rootDir: '.',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '.*\\.test\\.ts$',
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['json', 'ts'],
  moduleDirectories: ['node_modules', 'packages'],
  coverageReporters: ['html', 'lcov', 'text'],
  transform: tsjPreset.transform,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
}
export default config
