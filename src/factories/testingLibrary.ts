import { fixupPluginRules } from '@eslint/compat';
import testingLibraryPlugin from 'eslint-plugin-testing-library';

import type { Config, Files, Ignores, Rules } from '~/types';

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
