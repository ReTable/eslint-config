import { rules } from 'eslint-plugin-prettier';

import { filterRulesByName } from './helpers';

export const javascript = filterRulesByName(
  rules,
  (name) => name.startsWith('unicorn/') || !name.includes('/'),
);

export const typescript = filterRulesByName(
  rules,
  (name) =>
    name.startsWith('unicorn/') || name.startsWith('@typescript-eslint/') || !name.includes('/'),
);

export const react = filterRulesByName(rules, (name) => name.startsWith('react/'));
