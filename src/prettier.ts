import { rules } from 'eslint-plugin-prettier';

import type { Config, Rules } from '~/types';

export function buildConfig(allRules: Rules, filter: (name: string) => boolean): Config {
  const rules: Rules = {};

  for (const [name, rule] of Object.entries(allRules)) {
    if (!filter(name)) {
      continue;
    }

    rules[name] = rule;
  }

  return { name: 'prettier', rules };
}

export const javascript = buildConfig(
  rules,
  (name) => name.startsWith('unicorn/') || !name.includes('/'),
);

export const typescript = buildConfig(
  rules,
  (name) =>
    name.startsWith('unicorn/') || name.startsWith('@typescript-eslint/') || !name.includes('/'),
);

export const react = buildConfig(rules, (name) => name.startsWith('react/'));
