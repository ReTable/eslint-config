import { fixupPluginRules } from '@eslint/compat';

import plugin from 'eslint-plugin-testing-library';

import { user } from '../common/user';
import { areRulesPresented, buildConfigs } from '../helpers';
import { Config, FactoryOptions, Rules } from '../types';

type Options = FactoryOptions & {
  rules?: Rules;
};

export function testingLibrary({ rules, ...options }: Options): Array<Config> {
  const configs: Array<Config> = [
    {
      name: 'testing-library/react',

      plugins: {
        'testing-library': fixupPluginRules(plugin),
      },

      rules: plugin.configs['flat/react'].rules,
    },
  ];

  if (areRulesPresented(rules)) {
    configs.push(user(rules));
  }

  return buildConfigs(options, configs);
}
