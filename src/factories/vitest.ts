import plugin from '@vitest/eslint-plugin';

import { user } from '../common/user';
import { areRulesPresented, buildConfigs } from '../helpers';
import type { Config, Files, Ignores, Rules } from '../types';

type Options = {
  name?: string;

  files: Files;

  ignores?: Ignores;

  rules?: Rules;
};

export function vitest({ name, files, ignores, rules }: Options): Array<Config> {
  return buildConfigs({ name, files, ignores }, [
    {
      name: 'vitest',

      plugins: {
        vitest: plugin,
      },

      rules: plugin.configs.recommended.rules,
    },
    areRulesPresented(rules) ? user(rules) : false,
  ]);
}
