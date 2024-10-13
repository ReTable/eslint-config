import { fixupPluginRules } from '@eslint/compat';

import { user } from '../common/user';
import { areRulesPresented, buildConfigs } from '../helpers';
import type { Config, Files, Ignores, Rules } from '../types';
import plugin from 'eslint-plugin-testing-library';

type Options = {
  name?: string;

  files: Files;

  ignores?: Ignores;

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
