import { Globals, GlobalsConfig } from '../types';

export function mergeGlobals(userGlobals: Globals[]): GlobalsConfig {
  const all: Globals = {};

  for (const nsOrConfig of userGlobals) {
    const target = typeof nsOrConfig === 'object' ? nsOrConfig : nsOrConfig;

    Object.assign(all, target);
  }

  return all;
}
