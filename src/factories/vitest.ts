import plugin from '@vitest/eslint-plugin';

import { user } from '../common/user';
import { areRulesPresented, buildConfigs } from '../helpers';
import { Config, FactoryOptions, Rules } from '../types';

type Options = FactoryOptions & {
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
