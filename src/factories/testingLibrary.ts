import { fixupPluginRules } from '@eslint/compat';

import plugin from 'eslint-plugin-testing-library';

import { user } from '../common/user';
import { areRulesPresented, buildConfigs } from '../helpers';
import { Config, FactoryOptions, Rules } from '../types';

type Options = FactoryOptions & {
  rules?: Rules;
};

export function testingLibrary({ name, files, ignores, rules }: Options): Array<Config> {
  return buildConfigs({ name, files, ignores }, [
    {
      name: 'testing-library',

      plugins: {
        'testing-library': fixupPluginRules(plugin),
      },

      rules: plugin.configs['flat/react'].rules,
    },
    areRulesPresented(rules) ? user(rules) : false,
  ]);
}
