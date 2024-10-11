import { fixupPluginRules } from '@eslint/compat';
import testingLibraryPlugin from 'eslint-plugin-testing-library';

import { Config, type Files, type Ignores, type Rules } from './types';

type Options = {
  name: string;

  files: Files;

  ignores?: Ignores;

  rules?: Rules;
};

export function testingLibrary({ name, files, ignores, rules }: Options): Config {
  return {
    name,

    files,

    ignores,

    plugins: {
      'testing-library': fixupPluginRules(testingLibraryPlugin),
    },

    rules: {
      ...testingLibraryPlugin.configs['flat/react'].rules,

      ...rules,
    },
  };
}
