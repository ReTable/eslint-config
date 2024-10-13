import plugin from 'eslint-config-prettier';

import type { Config, Rules } from '~/types';

export function buildPrettierConfig(name: string, filter: (name: string) => boolean): Config {
  const rules: Rules = {};

  for (const [name, rule] of Object.entries(plugin.rules)) {
    if (!filter(name)) {
      continue;
    }

    rules[name] = rule;
  }

  return { name: `prettier/${name}`, rules };
}
