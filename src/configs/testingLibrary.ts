import { fixupPluginRules } from '@eslint/compat';

import plugin from 'eslint-plugin-testing-library';

import { Config } from '../types';

export type Options = {
  library: 'dom' | 'react';
};

export function testingLibrary({ library }: Options): Array<Config> {
  return [
    {
      name: `testing-library/${library}`,

      plugins: {
        'testing-library': fixupPluginRules(plugin),
      },

      rules: plugin.configs[`flat/${library}`].rules,
    },
  ];
}
