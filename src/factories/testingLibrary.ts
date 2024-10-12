import { fixupPluginRules } from '@eslint/compat';
import plugin from 'eslint-plugin-testing-library';

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
      'testing-library': fixupPluginRules(plugin),
    },

    rules: {
      ...plugin.configs['flat/react'].rules,

      ...rules,
    },
  };
}
