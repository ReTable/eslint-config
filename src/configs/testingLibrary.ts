import { fixupPluginRules } from '@eslint/compat';

import plugin from 'eslint-plugin-testing-library';

import { NamedConfig } from '../types';
import { ns } from './helpers';

export type Options = {
  library: 'dom' | 'react';
};

export function testingLibrary({ library }: Options): Array<NamedConfig> {
  return ns('testing-library', [
    {
      name: library,

      plugins: {
        'testing-library': fixupPluginRules(plugin),
      },

      rules: plugin.configs[`flat/${library}`].rules,
    },
  ]);
}
