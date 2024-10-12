import plugin from 'eslint-plugin-prettier';

import type { Config, Rules } from '~/types';

export function buildPrettierConfig(filter: (name: string) => boolean): Config {
  const rules: Rules = {};

  for (const [name, rule] of Object.entries(plugin.rules)) {
    if (!filter(name)) {
      continue;
    }

    rules[name] = rule;
  }

  return { name: 'prettier', rules };
}
