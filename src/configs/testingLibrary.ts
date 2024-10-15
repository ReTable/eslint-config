import { fixupPluginRules } from '@eslint/compat';

import plugin from 'eslint-plugin-testing-library';

import { defineConfig } from '../helpers';
import { NamedConfig } from '../types';

export type Options = {
  library: 'dom' | 'react';
};

export function testingLibrary({ library }: Options): NamedConfig[] {
  return defineConfig('testing-library', [
    {
      name: library,

      plugins: {
        'testing-library': fixupPluginRules(plugin),
      },

      rules: plugin.configs[`flat/${library}`].rules,
    },
  ]);
}
