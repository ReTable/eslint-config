import plugin from '@vitest/eslint-plugin';

import { user } from '../common/user';
import { areRulesPresented, buildConfigs } from '../helpers';
import { Config, FactoryOptions, Rules } from '../types';

type Options = FactoryOptions & {
  rules?: Rules;
};

export function vitest({ rules, ...options }: Options): Array<Config> {
  const configs: Array<Config> = [
    {
      name: 'vitest',

      plugins: {
        vitest: plugin,
      },

      rules: plugin.configs.recommended.rules,
    },
  ];

  if (areRulesPresented(rules)) {
    configs.push(user(rules));
  }

  return buildConfigs(options, configs);
}
