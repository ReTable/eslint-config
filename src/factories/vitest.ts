import vitestPlugin from '@vitest/eslint-plugin';

import type { Config, Files, Ignores, Rules } from '~/types';

type Options = {
  name: string;

  files: Files;

  ignores?: Ignores;

  rules?: Rules;
};

export function vitest({ name, files, ignores, rules }: Options): Config {
  return {
    name,

    files,

    ignores,

    plugins: {
      vitest: vitestPlugin,
    },

    rules: {
      ...vitestPlugin.configs.recommended.rules,

      ...rules,
    },
  };
}
