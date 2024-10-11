import type { Rules } from '~/types';

export function filterRulesByName(rules: Rules, filter: (name: string) => boolean): Rules {
  const all: Rules = {};

  for (const [name, rule] of Object.entries(rules)) {
    if (!filter(name)) {
      continue;
    }

    all[name] = rule;
  }

  return all;
}
