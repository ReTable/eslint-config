import type { Config, Rules } from '../../types';
import { rules as allRules } from 'eslint-config-prettier';

export function buildPrettierConfig(name: string, filter: (name: string) => boolean): Config {
  const rules: Rules = {};

  for (const [name, rule] of Object.entries(allRules)) {
    if (!filter(name)) {
      continue;
    }

    rules[name] = rule;
  }

  return { name: `prettier/${name}`, rules };
}
