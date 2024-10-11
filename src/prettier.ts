import { rules } from 'eslint-plugin-prettier';

import { filterRulesByName } from './helpers';
import type { Config, Rules } from './types';

export function buildConfig(
  configName: string,
  allRules: Rules,
  filter: (name: string) => boolean,
): Config {
  const rules: Rules = {};

  for (const [name, rule] of Object.entries(allRules)) {
    if (!filter(name)) {
      continue;
    }

    rules[name] = rule;
  }

  return { name: configName, rules };
}

export const javascript = buildConfig(
  'javascript',
  rules,
  (name) => name.startsWith('unicorn/') || !name.includes('/'),
);

export const typescript = filterRulesByName(
  rules,
  (name) =>
    name.startsWith('unicorn/') || name.startsWith('@typescript-eslint/') || !name.includes('/'),
);

export const react = filterRulesByName(rules, (name) => name.startsWith('react/'));
