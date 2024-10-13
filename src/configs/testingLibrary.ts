import { fixupPluginRules } from '@eslint/compat';

import plugin from 'eslint-plugin-testing-library';

import { Config } from '../types';

type Library = 'dom' | 'react';

export function testingLibrary(library: Library): Array<Config> {
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
