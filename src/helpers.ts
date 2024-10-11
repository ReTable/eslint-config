import { Globals, GlobalsConfig, Rules } from './types';

export function mergeGlobals(userGlobals: Globals[]): GlobalsConfig {
  const all: Globals = {};

  for (const nsOrConfig of userGlobals) {
    const target = typeof nsOrConfig === 'object' ? nsOrConfig : nsOrConfig;

    Object.assign(all, target);
  }

  return all;
}

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
